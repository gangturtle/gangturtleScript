/// <reference path="core.ts"/>
/// <reference path="scanner.ts"/>

module ts {

    export interface TextRange {
        pos: number;
        end: number;
    }

    // token > SyntaxKind.Identifer => token is a keyword
    export enum SyntaxKind {
        Unknown,
        EndOfFileToken,
        SingleLineCommentTrivia,
        MultiLineCommentTrivia,
        NewLineTrivia,
        WhitespaceTrivia,
        // Literals
        NumericLiteral,
        StringLiteral,
        RegularExpressionLiteral,
        NoSubstitutionTemplateLiteral,
        // Pseudo-literals
        TemplateHead,
        TemplateMiddle,
        TemplateTail,
        // Punctuation
        OpenBraceToken,
        CloseBraceToken,
        OpenParenToken,
        CloseParenToken,
        OpenBracketToken,
        CloseBracketToken,
        DotToken,
        DotDotDotToken,
        SemicolonToken,
        CommaToken,
        LessThanToken,
        GreaterThanToken,
        LessThanEqualsToken,
        GreaterThanEqualsToken,
        EqualsEqualsToken,
        ExclamationEqualsToken,
        EqualsEqualsEqualsToken,
        ExclamationEqualsEqualsToken,
        EqualsGreaterThanToken,
        PlusToken,
        MinusToken,
        AsteriskToken,
        SlashToken,
        PercentToken,
        PlusPlusToken,
        MinusMinusToken,
        LessThanLessThanToken,
        GreaterThanGreaterThanToken,
        GreaterThanGreaterThanGreaterThanToken,
        AmpersandToken,
        BarToken,
        CaretToken,
        ExclamationToken,
        TildeToken,
        AmpersandAmpersandToken,
        BarBarToken,
        QuestionToken,
        ColonToken,
        // Assignments
        EqualsToken,
        PlusEqualsToken,
        MinusEqualsToken,
        AsteriskEqualsToken,
        SlashEqualsToken,
        PercentEqualsToken,
        LessThanLessThanEqualsToken,
        GreaterThanGreaterThanEqualsToken,
        GreaterThanGreaterThanGreaterThanEqualsToken,
        AmpersandEqualsToken,
        BarEqualsToken,
        CaretEqualsToken,
        // Identifiers
        Identifier,
        // Reserved words
        BreakKeyword,
        CaseKeyword,
        CatchKeyword,
        ClassKeyword,
        ConstKeyword,
        ContinueKeyword,
        DebuggerKeyword,
        DefaultKeyword,
        DeleteKeyword,
        DoKeyword,
        ElseKeyword,
        EnumKeyword,
        ExportKeyword,
        ExtendsKeyword,
        FalseKeyword,
        FinallyKeyword,
        ForKeyword,
        FunctionKeyword,
        IfKeyword,
        ImportKeyword,
        InKeyword,
        InstanceOfKeyword,
        NewKeyword,
        NullKeyword,
        ReturnKeyword,
        SuperKeyword,
        SwitchKeyword,
        ThisKeyword,
        ThrowKeyword,
        TrueKeyword,
        TryKeyword,
        TypeOfKeyword,
        VarKeyword,
        VoidKeyword,
        WhileKeyword,
        WithKeyword,
        // Strict mode reserved words
        ImplementsKeyword,
        InterfaceKeyword,
        LetKeyword,
        PackageKeyword,
        PrivateKeyword,
        ProtectedKeyword,
        PublicKeyword,
        StaticKeyword,
        YieldKeyword,
        // TypeScript keywords
        AnyKeyword,
        BooleanKeyword,
        ConstructorKeyword,
        DeclareKeyword,
        GetKeyword,
        ModuleKeyword,
        RequireKeyword,
        NumberKeyword,
        SetKeyword,
        StringKeyword,
        TypeKeyword,
        // Parse tree nodes
        Missing,
        // Names
        QualifiedName,
        // Signature elements
        TypeParameter,
        Parameter,
        // TypeMember
        Property,
        Method,
        Constructor,
        GetAccessor,
        SetAccessor,
        CallSignature,
        ConstructSignature,
        IndexSignature,
        // Type
        TypeReference,
        TypeQuery,
        TypeLiteral,
        ArrayType,
        TupleType,
        UnionType,
        ParenType,
        // Expression
        ArrayLiteral,
        ObjectLiteral,
        PropertyAssignment,
        PropertyAccess,
        IndexedAccess,
        CallExpression,
        NewExpression,
        TaggedTemplateExpression,
        TypeAssertion,
        ParenExpression,
        FunctionExpression,
        ArrowFunction,
        PrefixOperator,
        PostfixOperator,
        BinaryExpression,
        ConditionalExpression,
        TemplateExpression,
        TemplateSpan,
        OmittedExpression,
        // Element
        Block,
        VariableStatement,
        EmptyStatement,
        ExpressionStatement,
        IfStatement,
        DoStatement,
        WhileStatement,
        ForStatement,
        ForInStatement,
        ContinueStatement,
        BreakStatement,
        ReturnStatement,
        WithStatement,
        SwitchStatement,
        CaseClause,
        DefaultClause,
        LabeledStatement,
        ThrowStatement,
        TryStatement,
        TryBlock,
        CatchBlock,
        FinallyBlock,
        DebuggerStatement,
        VariableDeclaration,
        FunctionDeclaration,
        FunctionBlock,
        ClassDeclaration,
        InterfaceDeclaration,
        TypeAliasDeclaration,
        EnumDeclaration,
        ModuleDeclaration,
        ModuleBlock,
        ImportDeclaration,
        ExportAssignment,
        // Enum
        EnumMember,
        // Top-level nodes
        SourceFile,
        Program,
        // Synthesized list
        SyntaxList,
        // Enum value count
        Count,
        // Markers
        FirstAssignment = EqualsToken,
        LastAssignment = CaretEqualsToken,
        FirstReservedWord = BreakKeyword,
        LastReservedWord = WithKeyword,
        FirstKeyword = BreakKeyword,
        LastKeyword = TypeKeyword,
        FirstFutureReservedWord = ImplementsKeyword,
        LastFutureReservedWord = YieldKeyword,
        FirstTypeNode = TypeReference,
        LastTypeNode = ParenType,
        FirstPunctuation = OpenBraceToken,
        LastPunctuation = CaretEqualsToken,
        FirstToken = EndOfFileToken,
        LastToken = TypeKeyword,
        FirstTriviaToken = SingleLineCommentTrivia,
        LastTriviaToken = WhitespaceTrivia,
        FirstLiteralToken = NumericLiteral,
        LastLiteralToken = NoSubstitutionTemplateLiteral,
        FirstTemplateToken = NoSubstitutionTemplateLiteral,
        LastTemplateToken = TemplateTail
    }

    export enum NodeFlags {
        Export           = 0x00000001,  // Declarations
        Ambient          = 0x00000002,  // Declarations
        QuestionMark     = 0x00000004,  // Parameter/Property/Method
        Rest             = 0x00000008,  // Parameter
        Public           = 0x00000010,  // Property/Method
        Private          = 0x00000020,  // Property/Method
        Protected        = 0x00000040,  // Property/Method
        Static           = 0x00000080,  // Property/Method
        MultiLine        = 0x00000100,  // Multi-line array or object literal
        Synthetic        = 0x00000200,  // Synthetic node (for full fidelity)
        DeclarationFile  = 0x00000400,  // Node is a .d.ts file
        Let              = 0x00000800,  // Variable declaration
        Const            = 0x00001000,  // Variable declaration

        Modifier = Export | Ambient | Public | Private | Protected | Static,
        AccessibilityModifier = Public | Private | Protected,
        BlockScoped = Let | Const
    }

    export interface Node extends TextRange {
        kind: SyntaxKind;
        flags: NodeFlags;
        id?: number;                  // Unique id (used to look up NodeLinks)
        parent?: Node;                // Parent node (initialized by binding)
        symbol?: Symbol;              // Symbol declared by node (initialized by binding)
        locals?: SymbolTable;         // Locals associated with node (initialized by binding)
        nextContainer?: Node;         // Next container in declaration order (initialized by binding)
        localSymbol?: Symbol;         // Local symbol declared by node (initialized by binding only for exported nodes)
    }

    export interface NodeArray<T> extends Array<T>, TextRange {
        hasTrailingComma?: boolean;
    }

    export interface Identifier extends Node {
        text: string;                 // Text of identifier (with escapes converted to characters)
    }

    export interface QualifiedName extends Node {
        // Must have same layout as PropertyAccess
        left: EntityName;
        right: Identifier;
    }

    export type EntityName = Identifier | QualifiedName;

    export interface ParsedSignature {
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        parameters: NodeArray<ParameterDeclaration>;
        type?: TypeNode;
    }

    export interface Declaration extends Node {
        name?: Identifier;
    }

    export interface TypeParameterDeclaration extends Declaration {
        constraint?: TypeNode;
    }

    export interface SignatureDeclaration extends Declaration, ParsedSignature { }

    export interface VariableDeclaration extends Declaration {
        type?: TypeNode;
        initializer?: Expression;
    }

    export interface PropertyDeclaration extends VariableDeclaration { }

    export interface ParameterDeclaration extends VariableDeclaration { }

    export interface FunctionDeclaration extends Declaration, ParsedSignature {
        body?: Block | Expression;
    }

    export interface MethodDeclaration extends FunctionDeclaration { }

    export interface ConstructorDeclaration extends FunctionDeclaration { }

    export interface AccessorDeclaration extends FunctionDeclaration { }

    export interface TypeNode extends Node { }

    export interface TypeReferenceNode extends TypeNode {
        typeName: EntityName;
        typeArguments?: NodeArray<TypeNode>;
    }

    export interface TypeQueryNode extends TypeNode {
        exprName: EntityName;
    }

    export interface TypeLiteralNode extends TypeNode {
        members: NodeArray<Node>;
    }

    export interface ArrayTypeNode extends TypeNode {
        elementType: TypeNode;
    }

    export interface TupleTypeNode extends TypeNode {
        elementTypes: NodeArray<TypeNode>;
    }

    export interface UnionTypeNode extends TypeNode {
        types: NodeArray<TypeNode>;
    }

    export interface ParenTypeNode extends TypeNode {
        type: TypeNode;
    }

    export interface StringLiteralTypeNode extends TypeNode {
        text: string;
    }

    export interface Expression extends Node {
        contextualType?: Type;  // Used to temporarily assign a contextual type during overload resolution
    }

    export interface UnaryExpression extends Expression {
        operator: SyntaxKind;
        operand: Expression;
    }

    export interface BinaryExpression extends Expression {
        left: Expression;
        operator: SyntaxKind;
        right: Expression;
    }

    export interface ConditionalExpression extends Expression {
        condition: Expression;
        whenTrue: Expression;
        whenFalse: Expression;
    }

    export interface FunctionExpression extends Expression, FunctionDeclaration {
        body: Block | Expression;  // Required, whereas the member inherited from FunctionDeclaration is optional
    }

    // The text property of a LiteralExpression stores the interpreted value of the literal in text form. For a StringLiteral,
    // or any literal of a template, this means quotes have been removed and escapes have been converted to actual characters.
    // For a NumericLiteral, the stored value is the toString() representation of the number. For example 1, 1.00, and 1e0 are all stored as just "1".
    export interface LiteralExpression extends Expression {
        text: string;
    }

    export interface TemplateExpression extends Expression {
        head: LiteralExpression;
        templateSpans: NodeArray<TemplateSpan>;
    }

    // Each of these corresponds to a substitution expression and a template literal, in that order.
    // The template literal must have kind TemplateMiddleLiteral or TemplateTailLiteral.
    export interface TemplateSpan extends Node {
        expression: Expression;
        literal: LiteralExpression;
    }

    export interface ParenExpression extends Expression {
        expression: Expression;
    }

    export interface ArrayLiteral extends Expression {
        elements: NodeArray<Expression>;
    }

    export interface ObjectLiteral extends Expression {
        properties: NodeArray<Node>;
    }

    export interface PropertyAccess extends Expression {
        left: Expression;
        right: Identifier;
    }

    export interface IndexedAccess extends Expression {
        object: Expression;
        index: Expression;
    }

    export interface CallExpression extends Expression {
        func: Expression;
        typeArguments?: NodeArray<TypeNode>;
        arguments: NodeArray<Expression>;
    }

    export interface NewExpression extends CallExpression { }

    export interface TaggedTemplateExpression extends Expression {
        tag: Expression;
        template: LiteralExpression | TemplateExpression;
    }

    export interface TypeAssertion extends Expression {
        type: TypeNode;
        operand: Expression;
    }

    export interface Statement extends Node { }

    export interface Block extends Statement {
        statements: NodeArray<Statement>;
    }

    export interface VariableStatement extends Statement {
        declarations: NodeArray<VariableDeclaration>;
    }

    export interface ExpressionStatement extends Statement {
        expression: Expression;
    }

    export interface IfStatement extends Statement {
        expression: Expression;
        thenStatement: Statement;
        elseStatement?: Statement;
    }

    export interface IterationStatement extends Statement {
        statement: Statement;
    }

    export interface DoStatement extends IterationStatement {
        expression: Expression;
    }

    export interface WhileStatement extends IterationStatement {
        expression: Expression;
    }

    export interface ForStatement extends IterationStatement {
        declarations?: NodeArray<VariableDeclaration>;
        initializer?: Expression;
        condition?: Expression;
        iterator?: Expression;
    }

    export interface ForInStatement extends IterationStatement {
        declaration?: VariableDeclaration;
        variable?: Expression;
        expression: Expression;
    }

    export interface BreakOrContinueStatement extends Statement {
        label?: Identifier;
    }

    export interface ReturnStatement extends Statement {
        expression?: Expression;
    }

    export interface WithStatement extends Statement {
        expression: Expression;
        statement: Statement;
    }

    export interface SwitchStatement extends Statement {
        expression: Expression;
        clauses: NodeArray<CaseOrDefaultClause>;
    }

    export interface CaseOrDefaultClause extends Node {
        expression?: Expression;
        statements: NodeArray<Statement>;
    }

    export interface LabeledStatement extends Statement {
        label: Identifier;
        statement: Statement;
    }

    export interface ThrowStatement extends Statement {
        expression: Expression;
    }

    export interface TryStatement extends Statement {
        tryBlock: Block;
        catchBlock?: CatchBlock;
        finallyBlock?: Block;
    }

    export interface CatchBlock extends Block {
        variable: Identifier;
    }

    export interface ClassDeclaration extends Declaration {
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        baseType?: TypeReferenceNode;
        implementedTypes?: NodeArray<TypeReferenceNode>;
        members: NodeArray<Node>;
    }

    export interface InterfaceDeclaration extends Declaration {
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        baseTypes?: NodeArray<TypeReferenceNode>;
        members: NodeArray<Node>;
    }

    export interface TypeAliasDeclaration extends Declaration {
        type: TypeNode;
    }

    export interface EnumMember extends Declaration {
        initializer?: Expression;
    }

    export interface EnumDeclaration extends Declaration {
        members: NodeArray<EnumMember>;
    }

    export interface ModuleDeclaration extends Declaration {
        body: Block | ModuleDeclaration;
    }

    export interface ImportDeclaration extends Declaration {
        entityName?: EntityName;
        externalModuleName?: LiteralExpression;
    }

    export interface ExportAssignment extends Statement {
        exportName: Identifier;
    }

    export interface FileReference extends TextRange {
        filename: string;
    }

    export interface CommentRange extends TextRange {
        hasTrailingNewLine?: boolean;
    }

    export interface SourceFile extends Block {
        filename: string;
        text: string;
        getLineAndCharacterFromPosition(position: number): { line: number; character: number };
        getPositionFromLineAndCharacter(line: number, character: number): number;
        amdDependencies: string[];
        referencedFiles: FileReference[];
        syntacticErrors: Diagnostic[];
        semanticErrors: Diagnostic[];
        hasNoDefaultLib: boolean;
        externalModuleIndicator: Node; // The first node that causes this file to be an external module
        nodeCount: number;
        identifierCount: number;
        symbolCount: number;
        isOpen: boolean;
        version: string;
        languageVersion: ScriptTarget;
        identifiers: Map<string>;
    }

    export interface Program {
        getSourceFile(filename: string): SourceFile;
        getSourceFiles(): SourceFile[];
        getCompilerOptions(): CompilerOptions;
        getCompilerHost(): CompilerHost;
        getDiagnostics(sourceFile?: SourceFile): Diagnostic[];
        getGlobalDiagnostics(): Diagnostic[];
        getTypeChecker(fullTypeCheckMode: boolean): TypeChecker;
        getCommonSourceDirectory(): string;
    }

    export interface SourceMapSpan {
        emittedLine: number;    // Line number in the .js file
        emittedColumn: number;  // Column number in the .js file
        sourceLine: number;     // Line number in the .ts file
        sourceColumn: number;   // Column number in the .ts file
        nameIndex?: number;     // Optional name (index into names array) associated with this span
        sourceIndex: number;    // .ts file (index into sources array) associated with this span*/
    }

    export interface SourceMapData {
        sourceMapFilePath: string;       // Where the sourcemap file is written
        jsSourceMappingURL: string;      // source map URL written in the .js file
        sourceMapFile: string;           // Source map's file field - .js file name
        sourceMapSourceRoot: string;     // Source map's sourceRoot field - location where the sources will be present if not ""
        sourceMapSources: string[];      // Source map's sources field - list of sources that can be indexed in this source map
        inputSourceFileNames: string[];  // Input source file (which one can use on program to get the file), 1:1 mapping with the sourceMapSources list
        sourceMapNames?: string[];       // Source map's names field - list of names that can be indexed in this source map
        sourceMapMappings: string;       // Source map's mapping field - encoded source map spans
        sourceMapDecodedMappings: SourceMapSpan[];  // Raw source map spans that were encoded into the sourceMapMappings
    }

    // Return code used by getEmitOutput function to indicate status of the function
    export enum EmitReturnStatus {
        Succeeded = 0,                      // All outputs generated as requested (.js, .map, .d.ts), no errors reported
        AllOutputGenerationSkipped = 1,     // No .js generated because of syntax errors, nothing generated
        JSGeneratedWithSemanticErrors = 2,  // .js and .map generated with semantic errors
        DeclarationGenerationSkipped = 3,   // .d.ts generation skipped because of semantic errors or declaration emitter specific errors; Output .js with semantic errors
        EmitErrorsEncountered = 4,          // Emitter errors occurred during emitting process
        CompilerOptionsErrors = 5,          // Errors occurred in parsing compiler options, nothing generated
    }

    export interface EmitResult {
        emitResultStatus: EmitReturnStatus;
        errors: Diagnostic[];
        sourceMaps: SourceMapData[];  // Array of sourceMapData if compiler emitted sourcemaps
    }

    export interface TypeChecker {
        getProgram(): Program;
        getDiagnostics(sourceFile?: SourceFile): Diagnostic[];
        getGlobalDiagnostics(): Diagnostic[];
        getNodeCount(): number;
        getIdentifierCount(): number;
        getSymbolCount(): number;
        getTypeCount(): number;
        checkProgram(): void;
        emitFiles(targetSourceFile?: SourceFile): EmitResult;
        getParentOfSymbol(symbol: Symbol): Symbol;
        getTypeOfSymbol(symbol: Symbol): Type;
        getDeclaredTypeOfSymbol(symbol: Symbol): Type;
        getPropertiesOfType(type: Type): Symbol[];
        getPropertyOfType(type: Type, propertyName: string): Symbol;
        getSignaturesOfType(type: Type, kind: SignatureKind): Signature[];
        getIndexTypeOfType(type: Type, kind: IndexKind): Type;
        getReturnTypeOfSignature(signature: Signature): Type;
        getSymbolsInScope(location: Node, meaning: SymbolFlags): Symbol[];
        getSymbolInfo(node: Node): Symbol;
        getTypeOfNode(node: Node): Type;
        typeToString(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
        symbolToString(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): string;
        getSymbolDisplayBuilder(): SymbolDisplayBuilder;
        getFullyQualifiedName(symbol: Symbol): string;
        getAugmentedPropertiesOfType(type: Type): Symbol[];
        getRootSymbols(symbol: Symbol): Symbol[];
        getContextualType(node: Node): Type;
        getResolvedSignature(node: CallExpression, candidatesOutArray?: Signature[]): Signature;
        getSignatureFromDeclaration(declaration: SignatureDeclaration): Signature;
        isImplementationOfOverload(node: FunctionDeclaration): boolean;
        isUndefinedSymbol(symbol: Symbol): boolean;
        isArgumentsSymbol(symbol: Symbol): boolean;
        hasEarlyErrors(sourceFile?: SourceFile): boolean;
        // Returns the constant value of this enum member, or 'undefined' if the enum member has a computed value.
        getEnumMemberValue(node: EnumMember): number;
        isValidPropertyAccess(node: PropertyAccess, propertyName: string): boolean;
        getAliasedSymbol(symbol: Symbol): Symbol;
    }

    export interface SymbolDisplayBuilder {
        buildTypeDisplay(type: Type, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildSymbolDisplay(symbol: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): void;
        buildSignatureDisplay(signatures: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildParameterDisplay(parameter: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypeParameterDisplay(tp: TypeParameter, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypeParameterDisplayFromSymbol(symbol: Symbol, writer: SymbolWriter, enclosingDeclaraiton?: Node, flags?: TypeFormatFlags): void;
        buildDisplayForParametersAndDelimiters(parameters: Symbol[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildDisplayForTypeParametersAndDelimiters(typeParameters: TypeParameter[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildReturnTypeDisplay(signature: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
    }

    export interface SymbolWriter {
        writeKeyword(text: string): void;
        writeOperator(text: string): void;
        writePunctuation(text: string): void;
        writeSpace(text: string): void;
        writeStringLiteral(text: string): void;
        writeParameter(text: string): void;
        writeSymbol(text: string, symbol: Symbol): void;
        writeLine(): void;
        increaseIndent(): void;
        decreaseIndent(): void;
        clear(): void;

        // Called when the symbol writer encounters a symbol to write.  Currently only used by the
        // declaration emitter to help determine if it should patch up the final declaration file
        // with import statements it previously saw (but chose not to emit).
        trackSymbol(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): void;
    }

    export enum TypeFormatFlags {
        None                            = 0x00000000, 
        WriteArrayAsGenericType         = 0x00000001,  // Write Array<T> instead T[]
        UseTypeOfFunction               = 0x00000002,  // Write typeof instead of function type literal
        NoTruncation                    = 0x00000004,  // Don't truncate typeToString result
        WriteArrowStyleSignature        = 0x00000008,  // Write arrow style signature
        WriteOwnNameForAnyLike          = 0x00000010,  // Write symbol's own name instead of 'any' for any like types (eg. unknown, __resolving__ etc)
        WriteTypeArgumentsOfSignature   = 0x00000020,  // Write the type arguments instead of type parameters of the signature
        InElementType                   = 0x00000040,  // Writing an array or union element type
    }

    export enum SymbolFormatFlags {
        None                            = 0x00000000,
        WriteTypeParametersOrArguments  = 0x00000001,  // Write symbols's type argument if it is instantiated symbol
                                                       // eg. class C<T> { p: T }   <-- Show p as C<T>.p here
                                                       //     var a: C<number>; 
                                                       //     var p = a.p;  <--- Here p is property of C<number> so show it as C<number>.p instead of just C.p
        UseOnlyExternalAliasing         = 0x00000002,  // Use only external alias information to get the symbol name in the given context
                                                       // eg.  module m { export class c { } } import x = m.c; 
                                                       // When this flag is specified m.c will be used to refer to the class instead of alias symbol x
    }

    export enum SymbolAccessibility {
        Accessible,
        NotAccessible,
        CannotBeNamed
    }

    export interface SymbolAccessiblityResult {
        accessibility: SymbolAccessibility;
        errorSymbolName?: string // Optional symbol name that results in error
        errorModuleName?: string // If the symbol is not visible from module, module's name
        aliasesToMakeVisible?: ImportDeclaration[]; // aliases that need to have this symbol visible
    }

    export interface EmitResolver {
        getProgram(): Program;
        getLocalNameOfContainer(container: Declaration): string;
        getExpressionNamePrefix(node: Identifier): string;
        getExportAssignmentName(node: SourceFile): string;
        isReferencedImportDeclaration(node: ImportDeclaration): boolean;
        isTopLevelValueImportWithEntityName(node: ImportDeclaration): boolean;
        getNodeCheckFlags(node: Node): NodeCheckFlags;
        getEnumMemberValue(node: EnumMember): number;
        hasSemanticErrors(): boolean;
        isDeclarationVisible(node: Declaration): boolean;
        isImplementationOfOverload(node: FunctionDeclaration): boolean;
        writeTypeAtLocation(location: Node, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        writeReturnTypeOfSignatureDeclaration(signatureDeclaration: SignatureDeclaration, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        isSymbolAccessible(symbol: Symbol, enclosingDeclaration: Node, meaning: SymbolFlags): SymbolAccessiblityResult;
        isImportDeclarationEntityNameReferenceDeclarationVisibile(entityName: EntityName): SymbolAccessiblityResult;
        // Returns the constant value this property access resolves to, or 'undefined' for a non-constant
        getConstantValue(node: PropertyAccess | IndexedAccess): number;
        hasEarlyErrors(sourceFile?: SourceFile): boolean;
    }

    export enum SymbolFlags {
        FunctionScopedVariable = 0x00000001,  // Variable (var) or parameter
        BlockScopedVariable    = 0x00000002,  // A block-scoped variable (let or const)
        Property               = 0x00000004,  // Property or enum member
        EnumMember             = 0x00000008,  // Enum member
        Function               = 0x00000010,  // Function
        Class                  = 0x00000020,  // Class
        Interface              = 0x00000040,  // Interface
        ConstEnum              = 0x00000080,  // Const enum
        RegularEnum            = 0x00000100,  // Enum
        ValueModule            = 0x00000200,  // Instantiated module
        NamespaceModule        = 0x00000400,  // Uninstantiated module
        TypeLiteral            = 0x00000800,  // Type Literal
        ObjectLiteral          = 0x00001000,  // Object Literal
        Method                 = 0x00002000,  // Method
        Constructor            = 0x00004000,  // Constructor
        GetAccessor            = 0x00008000,  // Get accessor
        SetAccessor            = 0x00010000,  // Set accessor
        CallSignature          = 0x00020000,  // Call signature
        ConstructSignature     = 0x00040000,  // Construct signature
        IndexSignature         = 0x00080000,  // Index signature
        TypeParameter          = 0x00100000,  // Type parameter
        TypeAlias              = 0x00200000,  // Type alias

        // Export markers (see comment in declareModuleMember in binder)
        ExportValue            = 0x00400000,  // Exported value marker
        ExportType             = 0x00800000,  // Exported type marker
        ExportNamespace        = 0x01000000,  // Exported namespace marker
        Import                 = 0x02000000,  // Import
        Instantiated           = 0x04000000,  // Instantiated symbol
        Merged                 = 0x08000000,  // Merged symbol (created during program binding)
        Transient              = 0x10000000,  // Transient symbol (created during type check)
        Prototype              = 0x20000000,  // Prototype property (no source representation)
        UnionProperty          = 0x40000000,  // Property in union type

        Enum                   = RegularEnum | ConstEnum,
        Variable  = FunctionScopedVariable | BlockScopedVariable,
        Value     = Variable | Property | EnumMember | Function | Class | Enum | ValueModule | Method | GetAccessor | SetAccessor,
        Type      = Class | Interface | Enum | TypeLiteral | ObjectLiteral | TypeParameter | TypeAlias,
        Namespace = ValueModule | NamespaceModule,
        Module    = ValueModule | NamespaceModule,
        Accessor  = GetAccessor | SetAccessor,
        Signature = CallSignature | ConstructSignature | IndexSignature,

        // Variables can be redeclared, but can not redeclare a block-scoped declaration with the 
        // same name, or any other value that is not a variable, e.g. ValueModule or Class
        FunctionScopedVariableExcludes = Value & ~FunctionScopedVariable,   

        // Block-scoped declarations are not allowed to be re-declared
        // they can not merge with anything in the value space
        BlockScopedVariableExcludes = Value,

        ParameterExcludes       = Value,
        PropertyExcludes        = Value,
        EnumMemberExcludes      = Value,
        FunctionExcludes        = Value & ~(Function | ValueModule),
        ClassExcludes           = (Value | Type) & ~ValueModule,
        InterfaceExcludes       = Type & ~Interface,
        RegularEnumExcludes     = (Value | Type) & ~(RegularEnum | ValueModule), // regular enums merge only with regular enums and modules
        ConstEnumExcludes       = (Value | Type) & ~ConstEnum, // const enums merge only with const enums
        ValueModuleExcludes     = Value & ~(Function | Class | RegularEnum | ValueModule),
        NamespaceModuleExcludes = 0,
        MethodExcludes          = Value & ~Method,
        GetAccessorExcludes     = Value & ~SetAccessor,
        SetAccessorExcludes     = Value & ~GetAccessor,
        TypeParameterExcludes   = Type & ~TypeParameter,
        TypeAliasExcludes       = Type,
        ImportExcludes          = Import,  // Imports collide with all other imports with the same name

        ModuleMember = Variable | Function | Class | Interface | Enum | Module | TypeAlias | Import,

        ExportHasLocal = Function | Class | Enum | ValueModule,

        HasLocals  = Function | Module | Method | Constructor | Accessor | Signature,
        HasExports = Class | Enum | Module,
        HasMembers = Class | Interface | TypeLiteral | ObjectLiteral,

        IsContainer        = HasLocals | HasExports | HasMembers,
        PropertyOrAccessor = Property | Accessor,
        Export             = ExportNamespace | ExportType | ExportValue,
    }

    export interface Symbol {
        flags: SymbolFlags;            // Symbol flags
        name: string;                  // Name of symbol
        id?: number;                   // Unique id (used to look up SymbolLinks)
        mergeId?: number;              // Merge id (used to look up merged symbol)
        declarations?: Declaration[];  // Declarations associated with this symbol
        parent?: Symbol;               // Parent symbol
        members?: SymbolTable;         // Class, interface or literal instance members
        exports?: SymbolTable;         // Module exports
        exportSymbol?: Symbol;         // Exported symbol associated with this symbol
        valueDeclaration?: Declaration // First value declaration of the symbol,
        constEnumOnlyModule?: boolean // For modules - if true - module contains only const enums or other modules with only const enums.
    }

    export interface SymbolLinks {
        target?: Symbol;               // Resolved (non-alias) target of an alias
        type?: Type;                   // Type of value symbol
        declaredType?: Type;           // Type of class, interface, enum, or type parameter
        mapper?: TypeMapper;           // Type mapper for instantiation alias
        referenced?: boolean;          // True if alias symbol has been referenced as a value
        exportAssignSymbol?: Symbol;   // Symbol exported from external module
        unionType?: UnionType;         // Containing union type for union property
    }

    export interface TransientSymbol extends Symbol, SymbolLinks { }

    export interface SymbolTable {
        [index: string]: Symbol;
    }

    export enum NodeCheckFlags {
        TypeChecked        = 0x00000001,  // Node has been type checked
        LexicalThis        = 0x00000002,  // Lexical 'this' reference
        CaptureThis        = 0x00000004,  // Lexical 'this' used in body
        EmitExtends        = 0x00000008,  // Emit __extends
        SuperInstance      = 0x00000010,  // Instance 'super' reference
        SuperStatic        = 0x00000020,  // Static 'super' reference
        ContextChecked     = 0x00000040,  // Contextual types have been assigned

        // Values for enum members have been computed, and any errors have been reported for them.
        EnumValuesComputed = 0x00000080,
    }

    export interface NodeLinks {
        resolvedType?: Type;              // Cached type of type node
        resolvedSignature?: Signature;    // Cached signature of signature node or call expression
        resolvedSymbol?: Symbol;          // Cached name resolution result
        flags?: NodeCheckFlags;           // Set of flags specific to Node
        enumMemberValue?: number;         // Constant value of enum member
        isIllegalTypeReferenceInConstraint?: boolean; // Is type reference in constraint refers to the type parameter from the same list
        isVisible?: boolean;              // Is this node visible
        localModuleName?: string;         // Local name for module instance
        assignmentChecks?: Map<boolean>;  // Cache of assignment checks
    }

    export enum TypeFlags {
        Any                = 0x00000001,
        String             = 0x00000002,
        Number             = 0x00000004,
        Boolean            = 0x00000008,
        Void               = 0x00000010,
        Undefined          = 0x00000020,
        Null               = 0x00000040,
        Enum               = 0x00000080,  // Enum type
        StringLiteral      = 0x00000100,  // String literal type
        TypeParameter      = 0x00000200,  // Type parameter
        Class              = 0x00000400,  // Class
        Interface          = 0x00000800,  // Interface
        Reference          = 0x00001000,  // Generic type reference
        Tuple              = 0x00002000,  // Tuple
        Union              = 0x00004000,  // Union
        Anonymous          = 0x00008000,  // Anonymous
        FromSignature      = 0x00010000,  // Created for signature assignment check

        Intrinsic  = Any | String | Number | Boolean | Void | Undefined | Null,
        StringLike = String | StringLiteral,
        NumberLike = Number | Enum,
        ObjectType = Class | Interface | Reference | Tuple | Anonymous,
        Structured = Any | ObjectType | Union | TypeParameter
    }

    // Properties common to all types
    export interface Type {
        flags: TypeFlags;  // Flags
        id: number;        // Unique ID
        symbol?: Symbol;   // Symbol associated with type (if any)
    }

    // Intrinsic types (TypeFlags.Intrinsic)
    export interface IntrinsicType extends Type {
        intrinsicName: string;  // Name of intrinsic type
    }

    // String literal types (TypeFlags.StringLiteral)
    export interface StringLiteralType extends Type {
        text: string;  // Text of string literal
    }

    // Object types (TypeFlags.ObjectType)
    export interface ObjectType extends Type { }

    // Class and interface types (TypeFlags.Class and TypeFlags.Interface)
    export interface InterfaceType extends ObjectType {
        typeParameters: TypeParameter[];           // Type parameters (undefined if non-generic)
        baseTypes: ObjectType[];                   // Base types
        declaredProperties: Symbol[];              // Declared members
        declaredCallSignatures: Signature[];       // Declared call signatures
        declaredConstructSignatures: Signature[];  // Declared construct signatures
        declaredStringIndexType: Type;             // Declared string index type
        declaredNumberIndexType: Type;             // Declared numeric index type
    }

    // Type references (TypeFlags.Reference)
    export interface TypeReference extends ObjectType {
        target: GenericType;    // Type reference target
        typeArguments: Type[];  // Type reference type arguments
    }

    // Generic class and interface types
    export interface GenericType extends InterfaceType, TypeReference {
        instantiations: Map<TypeReference>;   // Generic instantiation cache
        openReferenceTargets: GenericType[];  // Open type reference targets
        openReferenceChecks: Map<boolean>;    // Open type reference check cache
    }

    export interface TupleType extends ObjectType {
        elementTypes: Type[];          // Element types
        baseArrayType: TypeReference;  // Array<T> where T is best common type of element types
    }

    export interface UnionType extends Type {
        types: Type[];                    // Constituent types
        resolvedProperties: SymbolTable;  // Cache of resolved properties
    }

    // Resolved object or union type
    export interface ResolvedType extends ObjectType, UnionType {
        members: SymbolTable;              // Properties by name
        properties: Symbol[];              // Properties
        callSignatures: Signature[];       // Call signatures of type
        constructSignatures: Signature[];  // Construct signatures of type
        stringIndexType: Type;             // String index type
        numberIndexType: Type;             // Numeric index type
    }

    // Type parameters (TypeFlags.TypeParameter)
    export interface TypeParameter extends Type {
        constraint: Type;        // Constraint
        target?: TypeParameter;  // Instantiation target
        mapper?: TypeMapper;     // Instantiation mapper
    }

    export enum SignatureKind {
        Call,
        Construct,
    }

    export interface Signature {
        declaration: SignatureDeclaration;  // Originating declaration
        typeParameters: TypeParameter[];    // Type parameters (undefined if non-generic)
        parameters: Symbol[];               // Parameters
        resolvedReturnType: Type;           // Resolved return type
        minArgumentCount: number;           // Number of non-optional parameters
        hasRestParameter: boolean;          // True if last parameter is rest parameter
        hasStringLiterals: boolean;         // True if specialized
        target?: Signature;                 // Instantiation target
        mapper?: TypeMapper;                // Instantiation mapper
        unionSignatures?: Signature[];      // Underlying signatures of a union signature
        erasedSignatureCache?: Signature;   // Erased version of signature (deferred)
        isolatedSignatureType?: ObjectType; // A manufactured type that just contains the signature for purposes of signature comparison
    }

    export enum IndexKind {
        String,
        Number,
    }

    export interface TypeMapper {
        (t: Type): Type;
    }

    export interface InferenceContext {
        typeParameters: TypeParameter[];  // Type parameters for which inferences are made
        inferUnionTypes: boolean;         // Infer union types for disjoint candidates (otherwise undefinedType)
        inferenceCount: number;           // Incremented for every inference made (whether new or not)
        inferences: Type[][];             // Inferences made for each type parameter
        inferredTypes: Type[];            // Inferred type for each type parameter
        failedTypeParameterIndex?: number;            // Index of type parameter for which inference failed
                                          // It is optional because in contextual signature instantiation, nothing fails
    }

    export interface DiagnosticMessage {
        key: string;
        category: DiagnosticCategory;
        code: number;
        isEarly?: boolean;
    }

    // A linked list of formatted diagnostic messages to be used as part of a multiline message.
    // It is built from the bottom up, leaving the head to be the "main" diagnostic.
    // While it seems that DiagnosticMessageChain is structurally similar to DiagnosticMessage,
    // the difference is that messages are all preformatted in DMC.
    export interface DiagnosticMessageChain {
        messageText: string;
        category: DiagnosticCategory;
        code: number;
        next?: DiagnosticMessageChain;
    }

    export interface Diagnostic {
        file: SourceFile;
        start: number;
        length: number;
        messageText: string;
        category: DiagnosticCategory;
        code: number;
        isEarly?: boolean;
    }

    export enum DiagnosticCategory {
        Warning,
        Error,
        Message,
    }

    export interface CompilerOptions {
        charset?: string;
        codepage?: number;
        declaration?: boolean;
        diagnostics?: boolean;
        emitBOM?: boolean;
        help?: boolean;
        locale?: string;
        mapRoot?: string;
        module?: ModuleKind;
        noErrorTruncation?: boolean;
        noImplicitAny?: boolean;
        noLib?: boolean;
        noLibCheck?: boolean;
        noResolve?: boolean;
        out?: string;
        outDir?: string;
        removeComments?: boolean;
        sourceMap?: boolean;
        sourceRoot?: string;
        target?: ScriptTarget;
        version?: boolean;
        watch?: boolean;
        preserveConstEnums?: boolean;
        [option: string]: string | number | boolean;
    }

    export enum ModuleKind {
        None,
        CommonJS,
        AMD,
    }

    export interface LineAndCharacter {
        line: number;
        /*
         * This value denotes the character position in line and is different from the 'column' because of tab characters.
         */
        character: number;
    }


    export enum ScriptTarget {
        ES3,
        ES5,
        ES6,
        Latest = ES6,
    }

    export interface ParsedCommandLine {
        options: CompilerOptions;
        filenames: string[];
        errors: Diagnostic[];
    }

    export interface CommandLineOption {
        name: string;
        type: string | Map<number>;         // "string", "number", "boolean", or an object literal mapping named values to actual values
        shortName?: string;                 // A short pneumonic for convenience - for instance, 'h' can be used in place of 'help'.
        description?: DiagnosticMessage;    // The message describing what the command line switch does
        paramName?: DiagnosticMessage;      // The name to be used for a non-boolean option's parameter.
        error?: DiagnosticMessage;          // The error given when the argument does not fit a customized 'type'.
    }

    export enum CharacterCodes {
        nullCharacter = 0,
        maxAsciiCharacter = 0x7F,

        lineFeed = 0x0A,              // \n
        carriageReturn = 0x0D,        // \r
        lineSeparator = 0x2028,
        paragraphSeparator = 0x2029,
        nextLine = 0x0085,

        // Unicode 3.0 space characters
        space = 0x0020,   // " "
        nonBreakingSpace = 0x00A0,   //
        enQuad = 0x2000,
        emQuad = 0x2001,
        enSpace = 0x2002,
        emSpace = 0x2003,
        threePerEmSpace = 0x2004,
        fourPerEmSpace = 0x2005,
        sixPerEmSpace = 0x2006,
        figureSpace = 0x2007,
        punctuationSpace = 0x2008,
        thinSpace = 0x2009,
        hairSpace = 0x200A,
        zeroWidthSpace = 0x200B,
        narrowNoBreakSpace = 0x202F,
        ideographicSpace = 0x3000,
        mathematicalSpace = 0x205F,
        ogham = 0x1680, 

        _ = 0x5F,
        $ = 0x24,

        _0 = 0x30,
        _1 = 0x31,
        _2 = 0x32,
        _3 = 0x33,
        _4 = 0x34,
        _5 = 0x35,
        _6 = 0x36,
        _7 = 0x37,
        _8 = 0x38,
        _9 = 0x39,

        a = 0x61,
        b = 0x62,
        c = 0x63,
        d = 0x64,
        e = 0x65,
        f = 0x66,
        g = 0x67,
        h = 0x68,
        i = 0x69,
        j = 0x6A,
        k = 0x6B,
        l = 0x6C,
        m = 0x6D,
        n = 0x6E,
        o = 0x6F,
        p = 0x70,
        q = 0x71,
        r = 0x72,
        s = 0x73,
        t = 0x74,
        u = 0x75,
        v = 0x76,
        w = 0x77,
        x = 0x78,
        y = 0x79,
        z = 0x7A,

        A = 0x41,
        B = 0x42,
        C = 0x43,
        D = 0x44,
        E = 0x45,
        F = 0x46,
        G = 0x47,
        H = 0x48,
        I = 0x49,
        J = 0x4A,
        K = 0x4B,
        L = 0x4C,
        M = 0x4D,
        N = 0x4E,
        O = 0x4F,
        P = 0x50,
        Q = 0x51,
        R = 0x52,
        S = 0x53,
        T = 0x54,
        U = 0x55,
        V = 0x56,
        W = 0x57,
        X = 0x58,
        Y = 0x59,
        Z = 0x5a,

        ampersand = 0x26,             // &
        asterisk = 0x2A,              // *
        at = 0x40,                    // @
        backslash = 0x5C,             // \
        backtick = 0x60,              // `
        bar = 0x7C,                   // |
        caret = 0x5E,                 // ^
        closeBrace = 0x7D,            // }
        closeBracket = 0x5D,          // ]
        closeParen = 0x29,            // )
        colon = 0x3A,                 // :
        comma = 0x2C,                 // ,
        dot = 0x2E,                   // .
        doubleQuote = 0x22,           // "
        equals = 0x3D,                // =
        exclamation = 0x21,           // !
        greaterThan = 0x3E,           // >
        lessThan = 0x3C,              // <
        minus = 0x2D,                 // -
        openBrace = 0x7B,             // {
        openBracket = 0x5B,           // [
        openParen = 0x28,             // (
        percent = 0x25,               // %
        plus = 0x2B,                  // +
        question = 0x3F,              // ?
        semicolon = 0x3B,             // ;
        singleQuote = 0x27,           // '
        slash = 0x2F,                 // /
        tilde = 0x7E,                 // ~

        backspace = 0x08,             // \b
        formFeed = 0x0C,              // \f
        byteOrderMark = 0xFEFF,
        tab = 0x09,                   // \t
        verticalTab = 0x0B,           // \v
    }
    
    export interface CancellationToken {
        isCancellationRequested(): boolean;
    }

    export interface CompilerHost {
        getSourceFile(filename: string, languageVersion: ScriptTarget, onError?: (message: string) => void): SourceFile;
        getDefaultLibFilename(): string;
        getCancellationToken? (): CancellationToken;
        writeFile(filename: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void): void;
        getCurrentDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        useCaseSensitiveFileNames(): boolean;
        getNewLine(): string;
    }
}
