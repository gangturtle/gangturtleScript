///<reference path='references.ts' />

module TypeScript.Syntax {
    export var _nextSyntaxID: number = 1;

    export function nodeHasSkippedOrMissingTokens(node: ISyntaxNode): boolean {
        for (var i = 0; i < childCount(node); i++) {
            var child = childAt(node, i);
            if (isToken(child)) {
                var token = <ISyntaxToken>child;
                // If a token is skipped, return true. Or if it is a missing token. The only empty token that is not missing is EOF
                if (token.hasSkippedToken() || (width(token) === 0 && token.kind() !== SyntaxKind.EndOfFileToken)) {
                    return true;
                }
            }
        }

        return false;
    }

    export function isUnterminatedStringLiteral(token: ISyntaxToken): boolean {
        if (token && token.kind() === SyntaxKind.StringLiteral) {
            var text = token.text();
            return text.length < 2 || text.charCodeAt(text.length - 1) !== text.charCodeAt(0);
        }

        return false;
    }

    export function isUnterminatedMultilineCommentTrivia(trivia: ISyntaxTrivia): boolean {
        if (trivia && trivia.kind() === SyntaxKind.MultiLineCommentTrivia) {
            var text = trivia.fullText();
            return text.length < 4 || text.substring(text.length - 2) !== "*/";
        }
        return false;
    }

    export function isEntirelyInsideCommentTrivia(trivia: ISyntaxTrivia, fullStart: number, position: number): boolean {
        if (trivia && trivia.isComment() && position > fullStart) {
            var end = fullStart + trivia.fullWidth();
            if (position < end) {
                return true;
            }
            else if (position === end) {
                return trivia.kind() === SyntaxKind.SingleLineCommentTrivia || isUnterminatedMultilineCommentTrivia(trivia);
            }
        }

        return false;
    }

    export function isEntirelyInsideComment(sourceUnit: SourceUnitSyntax, position: number): boolean {
        var positionedToken = findToken(sourceUnit, position);
        var fullStart = positionedToken.fullStart();
        var triviaList: ISyntaxTriviaList = undefined;
        var lastTriviaBeforeToken: ISyntaxTrivia = undefined;

        if (positionedToken.kind() === SyntaxKind.EndOfFileToken) {
            // Check if the trivia is leading on the EndOfFile token
            if (positionedToken.hasLeadingTrivia()) {
                triviaList = positionedToken.leadingTrivia();
            }
            // Or trailing on the previous token
            else {
                positionedToken = previousToken(positionedToken);
                if (positionedToken) {
                    if (positionedToken && positionedToken.hasTrailingTrivia()) {
                        triviaList = positionedToken.trailingTrivia();
                        fullStart = end(positionedToken);
                    }
                }
            }
        }
        else {
            if (position <= (fullStart + positionedToken.leadingTriviaWidth())) {
                triviaList = positionedToken.leadingTrivia();
            }
            else if (position >= (fullStart + width(positionedToken))) {
                triviaList = positionedToken.trailingTrivia();
                fullStart = end(positionedToken);
            }
        }

        if (triviaList) {
            // Try to find the trivia matching the position
            for (var i = 0, n = triviaList.count(); i < n; i++) {
                var trivia = triviaList.syntaxTriviaAt(i);
                if (position <= fullStart) {
                    // Moved passed the trivia we need
                    break;
                }
                else if (position <= fullStart + trivia.fullWidth() && trivia.isComment()) {
                    // Found the comment trivia we were looking for
                    lastTriviaBeforeToken = trivia;
                    break;
                }

                fullStart += trivia.fullWidth();
            }
        }

        return lastTriviaBeforeToken && isEntirelyInsideCommentTrivia(lastTriviaBeforeToken, fullStart, position);
    }

    export function isEntirelyInStringOrRegularExpressionLiteral(sourceUnit: SourceUnitSyntax, position: number): boolean {
        var positionedToken = findToken(sourceUnit, position);

        if (positionedToken) {
            if (positionedToken.kind() === SyntaxKind.EndOfFileToken) {
                // EndOfFile token, enusre it did not follow an unterminated string literal
                positionedToken = previousToken(positionedToken);
                return positionedToken && positionedToken.trailingTriviaWidth() === 0 && isUnterminatedStringLiteral(positionedToken);
            }
            else if (position > start(positionedToken)) {
                // Ensure position falls enterily within the literal if it is terminated, or the line if it is not
                return (position < end(positionedToken) && (positionedToken.kind() === TypeScript.SyntaxKind.StringLiteral || positionedToken.kind() === TypeScript.SyntaxKind.RegularExpressionLiteral)) ||
                    (position <= end(positionedToken) && isUnterminatedStringLiteral(positionedToken));
            }
        }

        return false;
    }

    export function getAncestorOfKind(positionedToken: ISyntaxElement, kind: SyntaxKind): ISyntaxElement {
        while (positionedToken && positionedToken.parent) {
            if (positionedToken.parent.kind() === kind) {
                return positionedToken.parent;
            }

            positionedToken = positionedToken.parent;
        }

        return undefined;
    }

    export function hasAncestorOfKind(positionedToken: ISyntaxElement, kind: SyntaxKind): boolean {
        return !!getAncestorOfKind(positionedToken, kind);
    }

    export function isIntegerLiteral(expression: IExpressionSyntax): boolean {
        if (expression) {
            switch (expression.kind()) {
                case SyntaxKind.PrefixUnaryExpression:
                    var prefixExpr = <PrefixUnaryExpressionSyntax>expression;
                    if (prefixExpr.operatorToken.kind() == SyntaxKind.PlusToken || prefixExpr.operatorToken.kind() === SyntaxKind.MinusToken) {
                        // Note: if there is a + or - sign, we can only allow a normal integer following
                        // (and not a hex integer).  i.e. -0xA is a legal expression, but it is not a 
                        // *literal*.
                        expression = prefixExpr.operand;
                        return isToken(expression) && IntegerUtilities.isInteger((<ISyntaxToken>expression).text());
                    }

                    return false;

                case SyntaxKind.NumericLiteral:
                    // If it doesn't have a + or -, then either an integer literal or a hex literal
                    // is acceptable.
                    var text = (<ISyntaxToken> expression).text();
                    return IntegerUtilities.isInteger(text) || IntegerUtilities.isHexInteger(text);
            }
        }

        return false;
    }

    export function containingNode(element: ISyntaxElement): ISyntaxNode {
        var current = element.parent;

        while (current && !isNode(current)) {
            current = current.parent;
        }

        return <ISyntaxNode>current;
    }

    export function findTokenOnLeft(sourceUnit: SourceUnitSyntax, position: number): ISyntaxToken {
        var positionedToken = findToken(sourceUnit, position);
        var _start = start(positionedToken);

        // Position better fall within this token.
        // Debug.assert(position >= positionedToken.fullStart());
        // Debug.assert(position < positionedToken.fullEnd() || positionedToken.token().tokenKind === SyntaxKind.EndOfFileToken);

        // if position is after the start of the token, then this token is the token on the left.
        if (position > _start) {
            return positionedToken;
        }

        // we're in the trivia before the start of the token.  Need to return the previous token.
        if (positionedToken.fullStart() === 0) {
            // Already on the first token.  Nothing before us.
            return undefined;
        }

        return previousToken(positionedToken);
    }

    export function findCompleteTokenOnLeft(sourceUnit: SourceUnitSyntax, position: number): ISyntaxToken {
        var positionedToken = findToken(sourceUnit, position);

        // Position better fall within this token.
        // Debug.assert(position >= positionedToken.fullStart());
        // Debug.assert(position < positionedToken.fullEnd() || positionedToken.token().tokenKind === SyntaxKind.EndOfFileToken);

        // if position is after the end of the token, then this token is the token on the left.
        if (width(positionedToken) > 0 && position >= end(positionedToken)) {
            return positionedToken;
        }

        return previousToken(positionedToken);
    }

    export function firstTokenInLineContainingPosition(syntaxTree: SyntaxTree, position: number): ISyntaxToken {
        var current = findToken(syntaxTree.sourceUnit(), position);
        while (true) {
            if (isFirstTokenInLine(current, syntaxTree.lineMap())) {
                break;
            }

            current = previousToken(current);
        }

        return current;
    }

    function isFirstTokenInLine(token: ISyntaxToken, lineMap: LineMap): boolean {
        var _previousToken = previousToken(token);
        if (_previousToken === undefined) {
            return true;
        }
        
        return lineMap.getLineNumberFromPosition(end(_previousToken)) !== lineMap.getLineNumberFromPosition(start(token));
    }
}