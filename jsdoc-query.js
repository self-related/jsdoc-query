class ElementBuilder {
    constructor(id) {
        /**@type {HTMLElement}*/
        this.element = document.getElementById(id);

        /**@type {HTMLElement} - alias*/
        this.el = this.element;

        if (!this.element) {
            throw `Element [${id}] not found`;
        }
    }
    
    get a()		        	{ return /**@type {HTMLAnchorElement}*/ (this.element); }
    get anchor()			{ return /**@type {HTMLAnchorElement}*/ (this.element); }
    get area()				{ return /**@type {HTMLAreaElement}*/ (this.element); }
    get audio()				{ return /**@type {HTMLAudioElement}*/ (this.element); }
    get br()				{ return /**@type {HTMLBRElement}*/ (this.element); }
    get base()				{ return /**@type {HTMLBaseElement}*/ (this.element); }
    get body()				{ return /**@type {HTMLBodyElement}*/ (this.element); }
    get button()			{ return /**@type {HTMLButtonElement}*/ (this.element); }
    get canvas()			{ return /**@type {HTMLCanvasElement}*/ (this.element); }
    get dlist()				{ return /**@type {HTMLDListElement}*/ (this.element); }
    get data()				{ return /**@type {HTMLDataElement}*/ (this.element); }
    get datalist()			{ return /**@type {HTMLDataListElement}*/ (this.element); }
    get details()			{ return /**@type {HTMLDetailsElement}*/ (this.element); }
    get dialog()			{ return /**@type {HTMLDialogElement}*/ (this.element); }
    get directory()			{ return /**@type {HTMLDirectoryElement}*/ (this.element); }
    get div()				{ return /**@type {HTMLDivElement}*/ (this.element); }
    get embed()				{ return /**@type {HTMLEmbedElement}*/ (this.element); }
    get fieldset()			{ return /**@type {HTMLFieldSetElement}*/ (this.element); }
    get font()				{ return /**@type {HTMLFontElement}*/ (this.element); }
    get form()				{ return /**@type {HTMLFormElement}*/ (this.element); }
    get frame()				{ return /**@type {HTMLFrameElement}*/ (this.element); }
    get frameset()			{ return /**@type {HTMLFrameSetElement}*/ (this.element); }
    get hr()				{ return /**@type {HTMLHRElement}*/ (this.element); }
    get head()				{ return /**@type {HTMLHeadElement}*/ (this.element); }
    get heading()			{ return /**@type {HTMLHeadingElement}*/ (this.element); }
    get h()			        { return /**@type {HTMLHeadingElement}*/ (this.element); }
    get html()				{ return /**@type {HTMLHtmlElement}*/ (this.element); }
    get iframe()			{ return /**@type {HTMLIFrameElement}*/ (this.element); }
    get image()				{ return /**@type {HTMLImageElement}*/ (this.element); }
    get input()				{ return /**@type {HTMLInputElement}*/ (this.element); }
    get li()				{ return /**@type {HTMLLIElement}*/ (this.element); }
    get label()				{ return /**@type {HTMLLabelElement}*/ (this.element); }
    get legend()			{ return /**@type {HTMLLegendElement}*/ (this.element); }
    get link()				{ return /**@type {HTMLLinkElement}*/ (this.element); }
    get map()				{ return /**@type {HTMLMapElement}*/ (this.element); }
    get marquee()			{ return /**@type {HTMLMarqueeElement}*/ (this.element); }
    get media()				{ return /**@type {HTMLMediaElement}*/ (this.element); }
    get menu()				{ return /**@type {HTMLMenuElement}*/ (this.element); }
    get meta()				{ return /**@type {HTMLMetaElement}*/ (this.element); }
    get meter()				{ return /**@type {HTMLMeterElement}*/ (this.element); }
    get mod()				{ return /**@type {HTMLModElement}*/ (this.element); }
    get olist()				{ return /**@type {HTMLOListElement}*/ (this.element); }
    get object()			{ return /**@type {HTMLObjectElement}*/ (this.element); }
    get optgroup()			{ return /**@type {HTMLOptGroupElement}*/ (this.element); }
    get option()			{ return /**@type {HTMLOptionElement}*/ (this.element); }
    get orsvg()				{ return /**@type {HTMLOrSVGElement}*/ (this.element); }
    get output()			{ return /**@type {HTMLOutputElement}*/ (this.element); }
    get p()			        { return /**@type {HTMLParagraphElement}*/ (this.element); }
    get paragraph()			{ return /**@type {HTMLParagraphElement}*/ (this.element); }
    get param()				{ return /**@type {HTMLParamElement}*/ (this.element); }
    get picture()			{ return /**@type {HTMLPictureElement}*/ (this.element); }
    get pre()				{ return /**@type {HTMLPreElement}*/ (this.element); }
    get progress()			{ return /**@type {HTMLProgressElement}*/ (this.element); }
    get quote()				{ return /**@type {HTMLQuoteElement}*/ (this.element); }
    get script()			{ return /**@type {HTMLScriptElement}*/ (this.element); }
    get select()			{ return /**@type {HTMLSelectElement}*/ (this.element); }
    get slot()				{ return /**@type {HTMLSlotElement}*/ (this.element); }
    get source()			{ return /**@type {HTMLSourceElement}*/ (this.element); }
    get span()				{ return /**@type {HTMLSpanElement}*/ (this.element); }
    get style()				{ return /**@type {HTMLStyleElement}*/ (this.element); }
    get tablecaption()		{ return /**@type {HTMLTableCaptionElement}*/ (this.element); }
    get tablecell()			{ return /**@type {HTMLTableCellElement}*/ (this.element); }
    get tablecol()			{ return /**@type {HTMLTableColElement}*/ (this.element); }
    get tabledatacell()		{ return /**@type {HTMLTableDataCellElement}*/ (this.element); }
    get table()				{ return /**@type {HTMLTableElement}*/ (this.element); }
    get tableheadercell()	{ return /**@type {HTMLTableHeaderCellElement}*/ (this.element); }
    get tablerow()			{ return /**@type {HTMLTableRowElement}*/ (this.element); }
    get tablesection()		{ return /**@type {HTMLTableSectionElement}*/ (this.element); }
    get template()			{ return /**@type {HTMLTemplateElement}*/ (this.element); }
    get textarea()			{ return /**@type {HTMLTextAreaElement}*/ (this.element); }
    get time()				{ return /**@type {HTMLTimeElement}*/ (this.element); }
    get title()				{ return /**@type {HTMLTitleElement}*/ (this.element); }
    get track()				{ return /**@type {HTMLTrackElement}*/ (this.element); }
    get ulist()				{ return /**@type {HTMLUListElement}*/ (this.element); }
    get unknown()			{ return /**@type {HTMLUnknownElement}*/ (this.element); }
    get video()				{ return /**@type {HTMLVideoElement}*/ (this.element); }
}

export function $(id) {
    return new ElementBuilder(id);
}