///<reference path='references.ts' />

interface Array<T> {
    __data: number;

    kind(): TypeScript.SyntaxKind;
    parent: TypeScript.ISyntaxElement;
}

module TypeScript {
    export interface ISeparatedSyntaxList<T extends ISyntaxNodeOrToken> extends Array<ISyntaxNodeOrToken> {
        //separatorCount(): number;
        //separatorAt(index: number): TypeScript.ISyntaxToken;

        //nonSeparatorCount(): number;
        //nonSeparatorAt(index: number): T;
    }
}

module TypeScript {
    export function separatorCount(list: ISeparatedSyntaxList<ISyntaxNodeOrToken>) {
        return list.length >> 1;
    }

    export function nonSeparatorCount(list: ISeparatedSyntaxList<ISyntaxNodeOrToken>) {
        return (list.length + 1) >> 1;
    }

    export function separatorAt(list: ISeparatedSyntaxList<ISyntaxNodeOrToken>, index: number): ISyntaxToken {
        return <ISyntaxToken>list[(index << 1) + 1];
    }

    export function nonSeparatorAt<T extends ISyntaxNodeOrToken>(list: ISeparatedSyntaxList<T>, index: number): T {
        return <T>list[index << 1];
    }
}

module TypeScript.Syntax {
    function addArrayFunction(name: string, func: Function) {
        if (Object.defineProperty) {
            Object.defineProperty(Array.prototype, name, { value: func, writable: true });
        }
        else {
            (<any>Array.prototype)[name] = func;
        }
    }

    addArrayFunction("kind", function () {
        return SyntaxKind.List;
    });

    export function list<T extends ISyntaxNodeOrToken>(nodes: T[]): T[] {
        for (var i = 0, n = nodes.length; i < n; i++) {
            nodes[i].parent = nodes;
        }

        return nodes;
    }

    export function separatedList<T extends ISyntaxNodeOrToken>(nodesAndTokens: ISyntaxNodeOrToken[]): ISeparatedSyntaxList<T> {
        for (var i = 0, n = nodesAndTokens.length; i < n; i++) {
            nodesAndTokens[i].parent = nodesAndTokens;
        }

        return <ISeparatedSyntaxList<T>>nodesAndTokens;
    }
}