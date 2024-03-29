///<reference path='references.ts' />

module TypeScript {
    export interface SourceUnitSyntax extends ISyntaxNode {
        syntaxTree: SyntaxTree;
        moduleElements: IModuleElementSyntax[];
        endOfFileToken: ISyntaxToken;
    }
    export interface SourceUnitConstructor { new (data: number, moduleElements: IModuleElementSyntax[], endOfFileToken: ISyntaxToken): SourceUnitSyntax }

    export interface QualifiedNameSyntax extends ISyntaxNode, INameSyntax {
        left: INameSyntax;
        dotToken: ISyntaxToken;
        right: ISyntaxToken;
    }
    export interface QualifiedNameConstructor { new (data: number, left: INameSyntax, dotToken: ISyntaxToken, right: ISyntaxToken): QualifiedNameSyntax }

    export interface ObjectTypeSyntax extends ISyntaxNode, ITypeSyntax {
        openBraceToken: ISyntaxToken;
        typeMembers: ISeparatedSyntaxList<ITypeMemberSyntax>;
        closeBraceToken: ISyntaxToken;
    }
    export interface ObjectTypeConstructor { new (data: number, openBraceToken: ISyntaxToken, typeMembers: ISeparatedSyntaxList<ITypeMemberSyntax>, closeBraceToken: ISyntaxToken): ObjectTypeSyntax }

    export interface FunctionTypeSyntax extends ISyntaxNode, ITypeSyntax {
        typeParameterList: TypeParameterListSyntax;
        parameterList: ParameterListSyntax;
        equalsGreaterThanToken: ISyntaxToken;
        type: ITypeSyntax;
    }
    export interface FunctionTypeConstructor { new (data: number, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): FunctionTypeSyntax }

    export interface ArrayTypeSyntax extends ISyntaxNode, ITypeSyntax {
        type: ITypeSyntax;
        openBracketToken: ISyntaxToken;
        closeBracketToken: ISyntaxToken;
    }
    export interface ArrayTypeConstructor { new (data: number, type: ITypeSyntax, openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken): ArrayTypeSyntax }

    export interface ConstructorTypeSyntax extends ISyntaxNode, ITypeSyntax {
        newKeyword: ISyntaxToken;
        typeParameterList: TypeParameterListSyntax;
        parameterList: ParameterListSyntax;
        equalsGreaterThanToken: ISyntaxToken;
        type: ITypeSyntax;
    }
    export interface ConstructorTypeConstructor { new (data: number, newKeyword: ISyntaxToken, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax): ConstructorTypeSyntax }

    export interface GenericTypeSyntax extends ISyntaxNode, ITypeSyntax {
        name: INameSyntax;
        typeArgumentList: TypeArgumentListSyntax;
    }
    export interface GenericTypeConstructor { new (data: number, name: INameSyntax, typeArgumentList: TypeArgumentListSyntax): GenericTypeSyntax }

    export interface TypeQuerySyntax extends ISyntaxNode, ITypeSyntax {
        typeOfKeyword: ISyntaxToken;
        name: INameSyntax;
    }
    export interface TypeQueryConstructor { new (data: number, typeOfKeyword: ISyntaxToken, name: INameSyntax): TypeQuerySyntax }

    export interface TupleTypeSyntax extends ISyntaxNode, ITypeSyntax {
        openBracketToken: ISyntaxToken;
        types: ISeparatedSyntaxList<ITypeSyntax>;
        closeBracketToken: ISyntaxToken;
    }
    export interface TupleTypeConstructor { new (data: number, openBracketToken: ISyntaxToken, types: ISeparatedSyntaxList<ITypeSyntax>, closeBracketToken: ISyntaxToken): TupleTypeSyntax }

    export interface UnionTypeSyntax extends ISyntaxNode, ITypeSyntax {
        left: ITypeSyntax;
        barToken: ISyntaxToken;
        right: ITypeSyntax;
    }
    export interface UnionTypeConstructor { new (data: number, left: ITypeSyntax, barToken: ISyntaxToken, right: ITypeSyntax): UnionTypeSyntax }

    export interface ParenthesizedTypeSyntax extends ISyntaxNode, ITypeSyntax {
        openParenToken: ISyntaxToken;
        type: ITypeSyntax;
        closeParenToken: ISyntaxToken;
    }
    export interface ParenthesizedTypeConstructor { new (data: number, openParenToken: ISyntaxToken, type: ITypeSyntax, closeParenToken: ISyntaxToken): ParenthesizedTypeSyntax }

    export interface InterfaceDeclarationSyntax extends ISyntaxNode, IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        interfaceKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        typeParameterList: TypeParameterListSyntax;
        heritageClauses: HeritageClauseSyntax[];
        body: ObjectTypeSyntax;
    }
    export interface InterfaceDeclarationConstructor { new (data: number, modifiers: ISyntaxToken[], interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: HeritageClauseSyntax[], body: ObjectTypeSyntax): InterfaceDeclarationSyntax }

    export interface FunctionDeclarationSyntax extends ISyntaxNode, IStatementSyntax {
        modifiers: ISyntaxToken[];
        functionKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
        semicolonToken: ISyntaxToken;
    }
    export interface FunctionDeclarationConstructor { new (data: number, modifiers: ISyntaxToken[], functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): FunctionDeclarationSyntax }

    export interface ModuleDeclarationSyntax extends ISyntaxNode, IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        moduleKeyword: ISyntaxToken;
        name: INameSyntax;
        stringLiteral: ISyntaxToken;
        openBraceToken: ISyntaxToken;
        moduleElements: IModuleElementSyntax[];
        closeBraceToken: ISyntaxToken;
    }
    export interface ModuleDeclarationConstructor { new (data: number, modifiers: ISyntaxToken[], moduleKeyword: ISyntaxToken, name: INameSyntax, stringLiteral: ISyntaxToken, openBraceToken: ISyntaxToken, moduleElements: IModuleElementSyntax[], closeBraceToken: ISyntaxToken): ModuleDeclarationSyntax }

    export interface ClassDeclarationSyntax extends ISyntaxNode, IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        classKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        typeParameterList: TypeParameterListSyntax;
        heritageClauses: HeritageClauseSyntax[];
        openBraceToken: ISyntaxToken;
        classElements: IClassElementSyntax[];
        closeBraceToken: ISyntaxToken;
    }
    export interface ClassDeclarationConstructor { new (data: number, modifiers: ISyntaxToken[], classKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: HeritageClauseSyntax[], openBraceToken: ISyntaxToken, classElements: IClassElementSyntax[], closeBraceToken: ISyntaxToken): ClassDeclarationSyntax }

    export interface EnumDeclarationSyntax extends ISyntaxNode, IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        enumKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        openBraceToken: ISyntaxToken;
        enumElements: ISeparatedSyntaxList<EnumElementSyntax>;
        closeBraceToken: ISyntaxToken;
    }
    export interface EnumDeclarationConstructor { new (data: number, modifiers: ISyntaxToken[], enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, enumElements: ISeparatedSyntaxList<EnumElementSyntax>, closeBraceToken: ISyntaxToken): EnumDeclarationSyntax }

    export interface ImportDeclarationSyntax extends ISyntaxNode, IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        importKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        equalsToken: ISyntaxToken;
        moduleReference: IModuleReferenceSyntax;
        semicolonToken: ISyntaxToken;
    }
    export interface ImportDeclarationConstructor { new (data: number, modifiers: ISyntaxToken[], importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken): ImportDeclarationSyntax }

    export interface ExportAssignmentSyntax extends ISyntaxNode, IModuleElementSyntax {
        exportKeyword: ISyntaxToken;
        equalsToken: ISyntaxToken;
        identifier: ISyntaxToken;
        semicolonToken: ISyntaxToken;
    }
    export interface ExportAssignmentConstructor { new (data: number, exportKeyword: ISyntaxToken, equalsToken: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ExportAssignmentSyntax }

    export interface MemberFunctionDeclarationSyntax extends ISyntaxNode, IMemberDeclarationSyntax {
        modifiers: ISyntaxToken[];
        propertyName: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
        semicolonToken: ISyntaxToken;
    }
    export interface MemberFunctionDeclarationConstructor { new (data: number, modifiers: ISyntaxToken[], propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): MemberFunctionDeclarationSyntax }

    export interface MemberVariableDeclarationSyntax extends ISyntaxNode, IMemberDeclarationSyntax {
        modifiers: ISyntaxToken[];
        variableDeclarator: VariableDeclaratorSyntax;
        semicolonToken: ISyntaxToken;
    }
    export interface MemberVariableDeclarationConstructor { new (data: number, modifiers: ISyntaxToken[], variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken): MemberVariableDeclarationSyntax }

    export interface ConstructorDeclarationSyntax extends ISyntaxNode, IClassElementSyntax {
        modifiers: ISyntaxToken[];
        constructorKeyword: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
        semicolonToken: ISyntaxToken;
    }
    export interface ConstructorDeclarationConstructor { new (data: number, modifiers: ISyntaxToken[], constructorKeyword: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken): ConstructorDeclarationSyntax }

    export interface IndexMemberDeclarationSyntax extends ISyntaxNode, IClassElementSyntax {
        modifiers: ISyntaxToken[];
        indexSignature: IndexSignatureSyntax;
        semicolonToken: ISyntaxToken;
    }
    export interface IndexMemberDeclarationConstructor { new (data: number, modifiers: ISyntaxToken[], indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken): IndexMemberDeclarationSyntax }

    export interface GetAccessorSyntax extends ISyntaxNode, IMemberDeclarationSyntax, IPropertyAssignmentSyntax {
        modifiers: ISyntaxToken[];
        getKeyword: ISyntaxToken;
        propertyName: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
    }
    export interface GetAccessorConstructor { new (data: number, modifiers: ISyntaxToken[], getKeyword: ISyntaxToken, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): GetAccessorSyntax }

    export interface SetAccessorSyntax extends ISyntaxNode, IMemberDeclarationSyntax, IPropertyAssignmentSyntax {
        modifiers: ISyntaxToken[];
        setKeyword: ISyntaxToken;
        propertyName: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
    }
    export interface SetAccessorConstructor { new (data: number, modifiers: ISyntaxToken[], setKeyword: ISyntaxToken, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): SetAccessorSyntax }

    export interface PropertySignatureSyntax extends ISyntaxNode, ITypeMemberSyntax {
        propertyName: ISyntaxToken;
        questionToken: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
    }
    export interface PropertySignatureConstructor { new (data: number, propertyName: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): PropertySignatureSyntax }

    export interface CallSignatureSyntax extends ISyntaxNode, ITypeMemberSyntax {
        typeParameterList: TypeParameterListSyntax;
        parameterList: ParameterListSyntax;
        typeAnnotation: TypeAnnotationSyntax;
    }
    export interface CallSignatureConstructor { new (data: number, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax): CallSignatureSyntax }

    export interface ConstructSignatureSyntax extends ISyntaxNode, ITypeMemberSyntax {
        newKeyword: ISyntaxToken;
        callSignature: CallSignatureSyntax;
    }
    export interface ConstructSignatureConstructor { new (data: number, newKeyword: ISyntaxToken, callSignature: CallSignatureSyntax): ConstructSignatureSyntax }

    export interface IndexSignatureSyntax extends ISyntaxNode, ITypeMemberSyntax {
        openBracketToken: ISyntaxToken;
        parameters: ISeparatedSyntaxList<ParameterSyntax>;
        closeBracketToken: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
    }
    export interface IndexSignatureConstructor { new (data: number, openBracketToken: ISyntaxToken, parameters: ISeparatedSyntaxList<ParameterSyntax>, closeBracketToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax): IndexSignatureSyntax }

    export interface MethodSignatureSyntax extends ISyntaxNode, ITypeMemberSyntax {
        propertyName: ISyntaxToken;
        questionToken: ISyntaxToken;
        callSignature: CallSignatureSyntax;
    }
    export interface MethodSignatureConstructor { new (data: number, propertyName: ISyntaxToken, questionToken: ISyntaxToken, callSignature: CallSignatureSyntax): MethodSignatureSyntax }

    export interface BlockSyntax extends ISyntaxNode, IStatementSyntax {
        openBraceToken: ISyntaxToken;
        statements: IStatementSyntax[];
        closeBraceToken: ISyntaxToken;
    }
    export interface BlockConstructor { new (data: number, openBraceToken: ISyntaxToken, statements: IStatementSyntax[], closeBraceToken: ISyntaxToken): BlockSyntax }

    export interface IfStatementSyntax extends ISyntaxNode, IStatementSyntax {
        ifKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        condition: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
        elseClause: ElseClauseSyntax;
    }
    export interface IfStatementConstructor { new (data: number, ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, elseClause: ElseClauseSyntax): IfStatementSyntax }

    export interface VariableStatementSyntax extends ISyntaxNode, IStatementSyntax {
        modifiers: ISyntaxToken[];
        variableDeclaration: VariableDeclarationSyntax;
        semicolonToken: ISyntaxToken;
    }
    export interface VariableStatementConstructor { new (data: number, modifiers: ISyntaxToken[], variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken): VariableStatementSyntax }

    export interface ExpressionStatementSyntax extends ISyntaxNode, IStatementSyntax {
        expression: IExpressionSyntax;
        semicolonToken: ISyntaxToken;
    }
    export interface ExpressionStatementConstructor { new (data: number, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ExpressionStatementSyntax }

    export interface ReturnStatementSyntax extends ISyntaxNode, IStatementSyntax {
        returnKeyword: ISyntaxToken;
        expression: IExpressionSyntax;
        semicolonToken: ISyntaxToken;
    }
    export interface ReturnStatementConstructor { new (data: number, returnKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ReturnStatementSyntax }

    export interface SwitchStatementSyntax extends ISyntaxNode, IStatementSyntax {
        switchKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        expression: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        openBraceToken: ISyntaxToken;
        switchClauses: ISwitchClauseSyntax[];
        closeBraceToken: ISyntaxToken;
    }
    export interface SwitchStatementConstructor { new (data: number, switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, switchClauses: ISwitchClauseSyntax[], closeBraceToken: ISyntaxToken): SwitchStatementSyntax }

    export interface BreakStatementSyntax extends ISyntaxNode, IStatementSyntax {
        breakKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        semicolonToken: ISyntaxToken;
    }
    export interface BreakStatementConstructor { new (data: number, breakKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): BreakStatementSyntax }

    export interface ContinueStatementSyntax extends ISyntaxNode, IStatementSyntax {
        continueKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        semicolonToken: ISyntaxToken;
    }
    export interface ContinueStatementConstructor { new (data: number, continueKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken): ContinueStatementSyntax }

    export interface ForStatementSyntax extends ISyntaxNode, IStatementSyntax {
        forKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        variableDeclaration: VariableDeclarationSyntax;
        initializer: IExpressionSyntax;
        firstSemicolonToken: ISyntaxToken;
        condition: IExpressionSyntax;
        secondSemicolonToken: ISyntaxToken;
        incrementor: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
    }
    export interface ForStatementConstructor { new (data: number, forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, initializer: IExpressionSyntax, firstSemicolonToken: ISyntaxToken, condition: IExpressionSyntax, secondSemicolonToken: ISyntaxToken, incrementor: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForStatementSyntax }

    export interface ForInStatementSyntax extends ISyntaxNode, IStatementSyntax {
        forKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        variableDeclaration: VariableDeclarationSyntax;
        left: IExpressionSyntax;
        inKeyword: ISyntaxToken;
        expression: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
    }
    export interface ForInStatementConstructor { new (data: number, forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, left: IExpressionSyntax, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): ForInStatementSyntax }

    export interface EmptyStatementSyntax extends ISyntaxNode, IStatementSyntax {
        semicolonToken: ISyntaxToken;
    }
    export interface EmptyStatementConstructor { new (data: number, semicolonToken: ISyntaxToken): EmptyStatementSyntax }

    export interface ThrowStatementSyntax extends ISyntaxNode, IStatementSyntax {
        throwKeyword: ISyntaxToken;
        expression: IExpressionSyntax;
        semicolonToken: ISyntaxToken;
    }
    export interface ThrowStatementConstructor { new (data: number, throwKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken): ThrowStatementSyntax }

    export interface WhileStatementSyntax extends ISyntaxNode, IStatementSyntax {
        whileKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        condition: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
    }
    export interface WhileStatementConstructor { new (data: number, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WhileStatementSyntax }

    export interface TryStatementSyntax extends ISyntaxNode, IStatementSyntax {
        tryKeyword: ISyntaxToken;
        block: BlockSyntax;
        catchClause: CatchClauseSyntax;
        finallyClause: FinallyClauseSyntax;
    }
    export interface TryStatementConstructor { new (data: number, tryKeyword: ISyntaxToken, block: BlockSyntax, catchClause: CatchClauseSyntax, finallyClause: FinallyClauseSyntax): TryStatementSyntax }

    export interface LabeledStatementSyntax extends ISyntaxNode, IStatementSyntax {
        identifier: ISyntaxToken;
        colonToken: ISyntaxToken;
        statement: IStatementSyntax;
    }
    export interface LabeledStatementConstructor { new (data: number, identifier: ISyntaxToken, colonToken: ISyntaxToken, statement: IStatementSyntax): LabeledStatementSyntax }

    export interface DoStatementSyntax extends ISyntaxNode, IStatementSyntax {
        doKeyword: ISyntaxToken;
        statement: IStatementSyntax;
        whileKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        condition: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        semicolonToken: ISyntaxToken;
    }
    export interface DoStatementConstructor { new (data: number, doKeyword: ISyntaxToken, statement: IStatementSyntax, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, semicolonToken: ISyntaxToken): DoStatementSyntax }

    export interface DebuggerStatementSyntax extends ISyntaxNode, IStatementSyntax {
        debuggerKeyword: ISyntaxToken;
        semicolonToken: ISyntaxToken;
    }
    export interface DebuggerStatementConstructor { new (data: number, debuggerKeyword: ISyntaxToken, semicolonToken: ISyntaxToken): DebuggerStatementSyntax }

    export interface WithStatementSyntax extends ISyntaxNode, IStatementSyntax {
        withKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        condition: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
    }
    export interface WithStatementConstructor { new (data: number, withKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax): WithStatementSyntax }

    export interface PrefixUnaryExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        operatorToken: ISyntaxToken;
        operand: IUnaryExpressionSyntax;
    }
    export interface PrefixUnaryExpressionConstructor { new (data: number, operatorToken: ISyntaxToken, operand: IUnaryExpressionSyntax): PrefixUnaryExpressionSyntax }

    export interface DeleteExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        deleteKeyword: ISyntaxToken;
        expression: IUnaryExpressionSyntax;
    }
    export interface DeleteExpressionConstructor { new (data: number, deleteKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): DeleteExpressionSyntax }

    export interface TypeOfExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        typeOfKeyword: ISyntaxToken;
        expression: IUnaryExpressionSyntax;
    }
    export interface TypeOfExpressionConstructor { new (data: number, typeOfKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): TypeOfExpressionSyntax }

    export interface VoidExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        voidKeyword: ISyntaxToken;
        expression: IUnaryExpressionSyntax;
    }
    export interface VoidExpressionConstructor { new (data: number, voidKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax): VoidExpressionSyntax }

    export interface ConditionalExpressionSyntax extends ISyntaxNode, IExpressionSyntax {
        condition: IExpressionSyntax;
        questionToken: ISyntaxToken;
        whenTrue: IExpressionSyntax;
        colonToken: ISyntaxToken;
        whenFalse: IExpressionSyntax;
    }
    export interface ConditionalExpressionConstructor { new (data: number, condition: IExpressionSyntax, questionToken: ISyntaxToken, whenTrue: IExpressionSyntax, colonToken: ISyntaxToken, whenFalse: IExpressionSyntax): ConditionalExpressionSyntax }

    export interface BinaryExpressionSyntax extends ISyntaxNode, IExpressionSyntax {
        left: IExpressionSyntax;
        operatorToken: ISyntaxToken;
        right: IExpressionSyntax;
    }
    export interface BinaryExpressionConstructor { new (data: number, left: IExpressionSyntax, operatorToken: ISyntaxToken, right: IExpressionSyntax): BinaryExpressionSyntax }

    export interface PostfixUnaryExpressionSyntax extends ISyntaxNode, IPostfixExpressionSyntax {
        operand: ILeftHandSideExpressionSyntax;
        operatorToken: ISyntaxToken;
    }
    export interface PostfixUnaryExpressionConstructor { new (data: number, operand: ILeftHandSideExpressionSyntax, operatorToken: ISyntaxToken): PostfixUnaryExpressionSyntax }

    export interface MemberAccessExpressionSyntax extends ISyntaxNode, IMemberExpressionSyntax, ICallExpressionSyntax {
        expression: ILeftHandSideExpressionSyntax;
        dotToken: ISyntaxToken;
        name: ISyntaxToken;
    }
    export interface MemberAccessExpressionConstructor { new (data: number, expression: ILeftHandSideExpressionSyntax, dotToken: ISyntaxToken, name: ISyntaxToken): MemberAccessExpressionSyntax }

    export interface InvocationExpressionSyntax extends ISyntaxNode, ICallExpressionSyntax {
        expression: ILeftHandSideExpressionSyntax;
        argumentList: ArgumentListSyntax;
    }
    export interface InvocationExpressionConstructor { new (data: number, expression: ILeftHandSideExpressionSyntax, argumentList: ArgumentListSyntax): InvocationExpressionSyntax }

    export interface ArrayLiteralExpressionSyntax extends ISyntaxNode, IPrimaryExpressionSyntax {
        openBracketToken: ISyntaxToken;
        expressions: ISeparatedSyntaxList<IExpressionSyntax>;
        closeBracketToken: ISyntaxToken;
    }
    export interface ArrayLiteralExpressionConstructor { new (data: number, openBracketToken: ISyntaxToken, expressions: ISeparatedSyntaxList<IExpressionSyntax>, closeBracketToken: ISyntaxToken): ArrayLiteralExpressionSyntax }

    export interface ObjectLiteralExpressionSyntax extends ISyntaxNode, IPrimaryExpressionSyntax {
        openBraceToken: ISyntaxToken;
        propertyAssignments: ISeparatedSyntaxList<IPropertyAssignmentSyntax>;
        closeBraceToken: ISyntaxToken;
    }
    export interface ObjectLiteralExpressionConstructor { new (data: number, openBraceToken: ISyntaxToken, propertyAssignments: ISeparatedSyntaxList<IPropertyAssignmentSyntax>, closeBraceToken: ISyntaxToken): ObjectLiteralExpressionSyntax }

    export interface ObjectCreationExpressionSyntax extends ISyntaxNode, IPrimaryExpressionSyntax {
        newKeyword: ISyntaxToken;
        expression: IMemberExpressionSyntax;
        argumentList: ArgumentListSyntax;
    }
    export interface ObjectCreationExpressionConstructor { new (data: number, newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax): ObjectCreationExpressionSyntax }

    export interface ParenthesizedExpressionSyntax extends ISyntaxNode, IPrimaryExpressionSyntax {
        openParenToken: ISyntaxToken;
        expression: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
    }
    export interface ParenthesizedExpressionConstructor { new (data: number, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken): ParenthesizedExpressionSyntax }

    export interface ParenthesizedArrowFunctionExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        callSignature: CallSignatureSyntax;
        equalsGreaterThanToken: ISyntaxToken;
        block: BlockSyntax;
        expression: IExpressionSyntax;
    }
    export interface ParenthesizedArrowFunctionExpressionConstructor { new (data: number, callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): ParenthesizedArrowFunctionExpressionSyntax }

    export interface SimpleArrowFunctionExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        parameter: ParameterSyntax;
        equalsGreaterThanToken: ISyntaxToken;
        block: BlockSyntax;
        expression: IExpressionSyntax;
    }
    export interface SimpleArrowFunctionExpressionConstructor { new (data: number, parameter: ParameterSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax): SimpleArrowFunctionExpressionSyntax }

    export interface CastExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        lessThanToken: ISyntaxToken;
        type: ITypeSyntax;
        greaterThanToken: ISyntaxToken;
        expression: IUnaryExpressionSyntax;
    }
    export interface CastExpressionConstructor { new (data: number, lessThanToken: ISyntaxToken, type: ITypeSyntax, greaterThanToken: ISyntaxToken, expression: IUnaryExpressionSyntax): CastExpressionSyntax }

    export interface ElementAccessExpressionSyntax extends ISyntaxNode, IMemberExpressionSyntax, ICallExpressionSyntax {
        expression: ILeftHandSideExpressionSyntax;
        openBracketToken: ISyntaxToken;
        argumentExpression: IExpressionSyntax;
        closeBracketToken: ISyntaxToken;
    }
    export interface ElementAccessExpressionConstructor { new (data: number, expression: ILeftHandSideExpressionSyntax, openBracketToken: ISyntaxToken, argumentExpression: IExpressionSyntax, closeBracketToken: ISyntaxToken): ElementAccessExpressionSyntax }

    export interface FunctionExpressionSyntax extends ISyntaxNode, IPrimaryExpressionSyntax {
        functionKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
    }
    export interface FunctionExpressionConstructor { new (data: number, functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionExpressionSyntax }

    export interface OmittedExpressionSyntax extends ISyntaxNode, IExpressionSyntax {
    }
    export interface OmittedExpressionConstructor { new (data: number): OmittedExpressionSyntax }

    export interface TemplateExpressionSyntax extends ISyntaxNode, IPrimaryExpressionSyntax {
        templateStartToken: ISyntaxToken;
        templateClauses: TemplateClauseSyntax[];
    }
    export interface TemplateExpressionConstructor { new (data: number, templateStartToken: ISyntaxToken, templateClauses: TemplateClauseSyntax[]): TemplateExpressionSyntax }

    export interface TemplateAccessExpressionSyntax extends ISyntaxNode, IMemberExpressionSyntax, ICallExpressionSyntax {
        expression: ILeftHandSideExpressionSyntax;
        templateExpression: IPrimaryExpressionSyntax;
    }
    export interface TemplateAccessExpressionConstructor { new (data: number, expression: ILeftHandSideExpressionSyntax, templateExpression: IPrimaryExpressionSyntax): TemplateAccessExpressionSyntax }

    export interface VariableDeclarationSyntax extends ISyntaxNode {
        varKeyword: ISyntaxToken;
        variableDeclarators: ISeparatedSyntaxList<VariableDeclaratorSyntax>;
    }
    export interface VariableDeclarationConstructor { new (data: number, varKeyword: ISyntaxToken, variableDeclarators: ISeparatedSyntaxList<VariableDeclaratorSyntax>): VariableDeclarationSyntax }

    export interface VariableDeclaratorSyntax extends ISyntaxNode {
        propertyName: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
        equalsValueClause: EqualsValueClauseSyntax;
    }
    export interface VariableDeclaratorConstructor { new (data: number, propertyName: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): VariableDeclaratorSyntax }

    export interface ArgumentListSyntax extends ISyntaxNode {
        typeArgumentList: TypeArgumentListSyntax;
        openParenToken: ISyntaxToken;
        arguments: ISeparatedSyntaxList<IExpressionSyntax>;
        closeParenToken: ISyntaxToken;
    }
    export interface ArgumentListConstructor { new (data: number, typeArgumentList: TypeArgumentListSyntax, openParenToken: ISyntaxToken, _arguments: ISeparatedSyntaxList<IExpressionSyntax>, closeParenToken: ISyntaxToken): ArgumentListSyntax }

    export interface ParameterListSyntax extends ISyntaxNode {
        openParenToken: ISyntaxToken;
        parameters: ISeparatedSyntaxList<ParameterSyntax>;
        closeParenToken: ISyntaxToken;
    }
    export interface ParameterListConstructor { new (data: number, openParenToken: ISyntaxToken, parameters: ISeparatedSyntaxList<ParameterSyntax>, closeParenToken: ISyntaxToken): ParameterListSyntax }

    export interface TypeArgumentListSyntax extends ISyntaxNode {
        lessThanToken: ISyntaxToken;
        typeArguments: ISeparatedSyntaxList<ITypeSyntax>;
        greaterThanToken: ISyntaxToken;
    }
    export interface TypeArgumentListConstructor { new (data: number, lessThanToken: ISyntaxToken, typeArguments: ISeparatedSyntaxList<ITypeSyntax>, greaterThanToken: ISyntaxToken): TypeArgumentListSyntax }

    export interface TypeParameterListSyntax extends ISyntaxNode {
        lessThanToken: ISyntaxToken;
        typeParameters: ISeparatedSyntaxList<TypeParameterSyntax>;
        greaterThanToken: ISyntaxToken;
    }
    export interface TypeParameterListConstructor { new (data: number, lessThanToken: ISyntaxToken, typeParameters: ISeparatedSyntaxList<TypeParameterSyntax>, greaterThanToken: ISyntaxToken): TypeParameterListSyntax }

    export interface HeritageClauseSyntax extends ISyntaxNode {
        extendsOrImplementsKeyword: ISyntaxToken;
        typeNames: ISeparatedSyntaxList<INameSyntax>;
    }
    export interface HeritageClauseConstructor { new (data: number, extendsOrImplementsKeyword: ISyntaxToken, typeNames: ISeparatedSyntaxList<INameSyntax>): HeritageClauseSyntax }

    export interface EqualsValueClauseSyntax extends ISyntaxNode {
        equalsToken: ISyntaxToken;
        value: IExpressionSyntax;
    }
    export interface EqualsValueClauseConstructor { new (data: number, equalsToken: ISyntaxToken, value: IExpressionSyntax): EqualsValueClauseSyntax }

    export interface CaseSwitchClauseSyntax extends ISyntaxNode, ISwitchClauseSyntax {
        caseKeyword: ISyntaxToken;
        expression: IExpressionSyntax;
        colonToken: ISyntaxToken;
        statements: IStatementSyntax[];
    }
    export interface CaseSwitchClauseConstructor { new (data: number, caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken, statements: IStatementSyntax[]): CaseSwitchClauseSyntax }

    export interface DefaultSwitchClauseSyntax extends ISyntaxNode, ISwitchClauseSyntax {
        defaultKeyword: ISyntaxToken;
        colonToken: ISyntaxToken;
        statements: IStatementSyntax[];
    }
    export interface DefaultSwitchClauseConstructor { new (data: number, defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken, statements: IStatementSyntax[]): DefaultSwitchClauseSyntax }

    export interface ElseClauseSyntax extends ISyntaxNode {
        elseKeyword: ISyntaxToken;
        statement: IStatementSyntax;
    }
    export interface ElseClauseConstructor { new (data: number, elseKeyword: ISyntaxToken, statement: IStatementSyntax): ElseClauseSyntax }

    export interface CatchClauseSyntax extends ISyntaxNode {
        catchKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        identifier: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
        closeParenToken: ISyntaxToken;
        block: BlockSyntax;
    }
    export interface CatchClauseConstructor { new (data: number, catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, closeParenToken: ISyntaxToken, block: BlockSyntax): CatchClauseSyntax }

    export interface FinallyClauseSyntax extends ISyntaxNode {
        finallyKeyword: ISyntaxToken;
        block: BlockSyntax;
    }
    export interface FinallyClauseConstructor { new (data: number, finallyKeyword: ISyntaxToken, block: BlockSyntax): FinallyClauseSyntax }

    export interface TemplateClauseSyntax extends ISyntaxNode {
        expression: IExpressionSyntax;
        templateMiddleOrEndToken: ISyntaxToken;
    }
    export interface TemplateClauseConstructor { new (data: number, expression: IExpressionSyntax, templateMiddleOrEndToken: ISyntaxToken): TemplateClauseSyntax }

    export interface TypeParameterSyntax extends ISyntaxNode {
        identifier: ISyntaxToken;
        constraint: ConstraintSyntax;
    }
    export interface TypeParameterConstructor { new (data: number, identifier: ISyntaxToken, constraint: ConstraintSyntax): TypeParameterSyntax }

    export interface ConstraintSyntax extends ISyntaxNode {
        extendsKeyword: ISyntaxToken;
        typeOrExpression: ISyntaxNodeOrToken;
    }
    export interface ConstraintConstructor { new (data: number, extendsKeyword: ISyntaxToken, typeOrExpression: ISyntaxNodeOrToken): ConstraintSyntax }

    export interface SimplePropertyAssignmentSyntax extends ISyntaxNode, IPropertyAssignmentSyntax {
        propertyName: ISyntaxToken;
        colonToken: ISyntaxToken;
        expression: IExpressionSyntax;
    }
    export interface SimplePropertyAssignmentConstructor { new (data: number, propertyName: ISyntaxToken, colonToken: ISyntaxToken, expression: IExpressionSyntax): SimplePropertyAssignmentSyntax }

    export interface FunctionPropertyAssignmentSyntax extends ISyntaxNode, IPropertyAssignmentSyntax {
        propertyName: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
    }
    export interface FunctionPropertyAssignmentConstructor { new (data: number, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax): FunctionPropertyAssignmentSyntax }

    export interface ParameterSyntax extends ISyntaxNode {
        dotDotDotToken: ISyntaxToken;
        modifiers: ISyntaxToken[];
        identifier: ISyntaxToken;
        questionToken: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
        equalsValueClause: EqualsValueClauseSyntax;
    }
    export interface ParameterConstructor { new (data: number, dotDotDotToken: ISyntaxToken, modifiers: ISyntaxToken[], identifier: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax): ParameterSyntax }

    export interface EnumElementSyntax extends ISyntaxNode {
        propertyName: ISyntaxToken;
        equalsValueClause: EqualsValueClauseSyntax;
    }
    export interface EnumElementConstructor { new (data: number, propertyName: ISyntaxToken, equalsValueClause: EqualsValueClauseSyntax): EnumElementSyntax }

    export interface TypeAnnotationSyntax extends ISyntaxNode {
        colonToken: ISyntaxToken;
        type: ITypeSyntax;
    }
    export interface TypeAnnotationConstructor { new (data: number, colonToken: ISyntaxToken, type: ITypeSyntax): TypeAnnotationSyntax }

    export interface ExternalModuleReferenceSyntax extends ISyntaxNode, IModuleReferenceSyntax {
        requireKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        stringLiteral: ISyntaxToken;
        closeParenToken: ISyntaxToken;
    }
    export interface ExternalModuleReferenceConstructor { new (data: number, requireKeyword: ISyntaxToken, openParenToken: ISyntaxToken, stringLiteral: ISyntaxToken, closeParenToken: ISyntaxToken): ExternalModuleReferenceSyntax }

    export interface ModuleNameModuleReferenceSyntax extends ISyntaxNode, IModuleReferenceSyntax {
        moduleName: INameSyntax;
    }
    export interface ModuleNameModuleReferenceConstructor { new (data: number, moduleName: INameSyntax): ModuleNameModuleReferenceSyntax }
}