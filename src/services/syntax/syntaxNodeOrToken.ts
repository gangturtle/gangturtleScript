///<reference path='references.ts' />

module TypeScript {
    export interface ISyntaxNodeOrToken extends ISyntaxElement {
        _syntaxNodeOrTokenBrand: any;
    }
}