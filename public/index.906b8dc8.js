/* Tabulator v5.4.1 (c) Oliver Folkerd 2022 */ !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Tabulator = t();
}(this, function() {
    "use strict";
    class e {
        reloadData(e, t, i) {
            return this.table.dataLoader.load(e, void 0, void 0, void 0, t, i);
        }
        langText() {
            return this.table.modules.localize.getText(...arguments);
        }
        langBind() {
            return this.table.modules.localize.bind(...arguments);
        }
        langLocale() {
            return this.table.modules.localize.getLocale(...arguments);
        }
        commsConnections() {
            return this.table.modules.comms.getConnections(...arguments);
        }
        commsSend() {
            return this.table.modules.comms.send(...arguments);
        }
        layoutMode() {
            return this.table.modules.layout.getMode();
        }
        layoutRefresh(e) {
            return this.table.modules.layout.layout(e);
        }
        subscribe() {
            return this.table.eventBus.subscribe(...arguments);
        }
        unsubscribe() {
            return this.table.eventBus.unsubscribe(...arguments);
        }
        subscribed(e) {
            return this.table.eventBus.subscribed(e);
        }
        subscriptionChange() {
            return this.table.eventBus.subscriptionChange(...arguments);
        }
        dispatch() {
            return this.table.eventBus.dispatch(...arguments);
        }
        chain() {
            return this.table.eventBus.chain(...arguments);
        }
        confirm() {
            return this.table.eventBus.confirm(...arguments);
        }
        dispatchExternal() {
            return this.table.externalEvents.dispatch(...arguments);
        }
        subscribedExternal(e) {
            return this.table.externalEvents.subscribed(e);
        }
        subscriptionChangeExternal() {
            return this.table.externalEvents.subscriptionChange(...arguments);
        }
        options(e) {
            return this.table.options[e];
        }
        setOption(e, t) {
            return void 0 !== t && (this.table.options[e] = t), this.table.options[e];
        }
        deprecationCheck(e, t) {
            return this.table.deprecationAdvisor.check(e, t);
        }
        deprecationCheckMsg(e, t) {
            return this.table.deprecationAdvisor.checkMsg(e, t);
        }
        deprecationMsg(e) {
            return this.table.deprecationAdvisor.msg(e);
        }
        module(e) {
            return this.table.module(e);
        }
        constructor(e){
            this.table = e;
        }
    }
    class t {
        getElement() {
            return this._column.getElement();
        }
        getDefinition() {
            return this._column.getDefinition();
        }
        getField() {
            return this._column.getField();
        }
        getTitleDownload() {
            return this._column.getTitleDownload();
        }
        getCells() {
            var e = [];
            return this._column.cells.forEach(function(t) {
                e.push(t.getComponent());
            }), e;
        }
        isVisible() {
            return this._column.visible;
        }
        show() {
            this._column.isGroup ? this._column.columns.forEach(function(e) {
                e.show();
            }) : this._column.show();
        }
        hide() {
            this._column.isGroup ? this._column.columns.forEach(function(e) {
                e.hide();
            }) : this._column.hide();
        }
        toggle() {
            this._column.visible ? this.hide() : this.show();
        }
        delete() {
            return this._column.delete();
        }
        getSubColumns() {
            var e = [];
            return this._column.columns.length && this._column.columns.forEach(function(t) {
                e.push(t.getComponent());
            }), e;
        }
        getParentColumn() {
            return this._column.parent instanceof n && this._column.parent.getComponent();
        }
        _getSelf() {
            return this._column;
        }
        scrollTo() {
            return this._column.table.columnManager.scrollToColumn(this._column);
        }
        getTable() {
            return this._column.table;
        }
        move(e, t) {
            var i = this._column.table.columnManager.findColumn(e);
            i ? this._column.table.columnManager.moveColumn(this._column, i, t) : console.warn("Move Error - No matching column found:", i);
        }
        getNextColumn() {
            var e = this._column.nextColumn();
            return !!e && e.getComponent();
        }
        getPrevColumn() {
            var e = this._column.prevColumn();
            return !!e && e.getComponent();
        }
        updateDefinition(e) {
            return this._column.updateDefinition(e);
        }
        getWidth() {
            return this._column.getWidth();
        }
        setWidth(e) {
            var t;
            return t = !0 === e ? this._column.reinitializeWidth(!0) : this._column.setWidth(e), this._column.table.columnManager.rerenderColumns(!0), t;
        }
        constructor(e){
            return this._column = e, this.type = "ColumnComponent", new Proxy(this, {
                get: function(e, t, i) {
                    return void 0 !== e[t] ? e[t] : e._column.table.componentFunctionBinder.handle("column", e._column, t);
                }
            });
        }
    }
    var i = {
        title: void 0,
        field: void 0,
        columns: void 0,
        visible: void 0,
        hozAlign: void 0,
        vertAlign: void 0,
        width: void 0,
        minWidth: 40,
        maxWidth: void 0,
        maxInitialWidth: void 0,
        cssClass: void 0,
        variableHeight: void 0,
        headerVertical: void 0,
        headerHozAlign: void 0,
        headerWordWrap: !1,
        editableTitle: void 0
    };
    class s {
        getValue() {
            return this._cell.getValue();
        }
        getOldValue() {
            return this._cell.getOldValue();
        }
        getInitialValue() {
            return this._cell.initialValue;
        }
        getElement() {
            return this._cell.getElement();
        }
        getRow() {
            return this._cell.row.getComponent();
        }
        getData() {
            return this._cell.row.getData();
        }
        getField() {
            return this._cell.column.getField();
        }
        getColumn() {
            return this._cell.column.getComponent();
        }
        setValue(e, t) {
            void 0 === t && (t = !0), this._cell.setValue(e, t);
        }
        restoreOldValue() {
            this._cell.setValueActual(this._cell.getOldValue());
        }
        restoreInitialValue() {
            this._cell.setValueActual(this._cell.initialValue);
        }
        checkHeight() {
            this._cell.checkHeight();
        }
        getTable() {
            return this._cell.table;
        }
        _getSelf() {
            return this._cell;
        }
        constructor(e){
            return this._cell = e, new Proxy(this, {
                get: function(e, t, i) {
                    return void 0 !== e[t] ? e[t] : e._cell.table.componentFunctionBinder.handle("cell", e._cell, t);
                }
            });
        }
    }
    class o extends e {
        build() {
            this.generateElement(), this.setWidth(), this._configureCell(), this.setValueActual(this.column.getFieldValue(this.row.data)), this.initialValue = this.value;
        }
        generateElement() {
            this.element = document.createElement("div"), this.element.className = "tabulator-cell", this.element.setAttribute("role", "gridcell");
        }
        _configureCell() {
            var e = this.element, t = this.column.getField();
            (e.style.textAlign = this.column.hozAlign, this.column.vertAlign && (e.style.display = "inline-flex", e.style.alignItems = ({
                top: "flex-start",
                bottom: "flex-end",
                middle: "center"
            })[this.column.vertAlign] || "", this.column.hozAlign && (e.style.justifyContent = ({
                left: "flex-start",
                right: "flex-end",
                center: "center"
            })[this.column.hozAlign] || "")), t && e.setAttribute("tabulator-field", t), this.column.definition.cssClass) && this.column.definition.cssClass.split(" ").forEach((t)=>{
                e.classList.add(t);
            });
            this.dispatch("cell-init", this), this.column.visible || this.hide();
        }
        _generateContents() {
            var e;
            switch(typeof (e = this.chain("cell-format", this, null, ()=>this.element.innerHTML = this.value))){
                case "object":
                    if (e instanceof Node) {
                        for(; this.element.firstChild;)this.element.removeChild(this.element.firstChild);
                        this.element.appendChild(e);
                    } else this.element.innerHTML = "", null != e && console.warn("Format Error - Formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", e);
                    break;
                case "undefined":
                    this.element.innerHTML = "";
                    break;
                default:
                    this.element.innerHTML = e;
            }
        }
        cellRendered() {
            this.dispatch("cell-rendered", this);
        }
        getElement(e) {
            return this.loaded || (this.loaded = !0, e || this.layoutElement()), this.element;
        }
        getValue() {
            return this.value;
        }
        getOldValue() {
            return this.oldValue;
        }
        setValue(e, t, i) {
            this.setValueProcessData(e, t, i) && (this.dispatch("cell-value-updated", this), this.cellRendered(), this.column.definition.cellEdited && this.column.definition.cellEdited.call(this.table, this.getComponent()), this.dispatchExternal("cellEdited", this.getComponent()), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.table.rowManager.getData()));
        }
        setValueProcessData(e, t, i) {
            var s = !1;
            return (this.value !== e || i) && (s = !0, t && (e = this.chain("cell-value-changing", [
                this,
                e
            ], null, e))), this.setValueActual(e), s && this.dispatch("cell-value-changed", this), s;
        }
        setValueActual(e) {
            this.oldValue = this.value, this.value = e, this.dispatch("cell-value-save-before", this), this.column.setFieldValue(this.row.data, e), this.dispatch("cell-value-save-after", this), this.loaded && this.layoutElement();
        }
        layoutElement() {
            this._generateContents(), this.dispatch("cell-layout", this);
        }
        setWidth() {
            this.width = this.column.width, this.element.style.width = this.column.widthStyled;
        }
        clearWidth() {
            this.width = "", this.element.style.width = "";
        }
        getWidth() {
            return this.width || this.element.offsetWidth;
        }
        setMinWidth() {
            this.minWidth = this.column.minWidth, this.element.style.minWidth = this.column.minWidthStyled;
        }
        setMaxWidth() {
            this.maxWidth = this.column.maxWidth, this.element.style.maxWidth = this.column.maxWidthStyled;
        }
        checkHeight() {
            this.row.reinitializeHeight();
        }
        clearHeight() {
            this.element.style.height = "", this.height = null, this.dispatch("cell-height", this, "");
        }
        setHeight() {
            this.height = this.row.height, this.element.style.height = this.row.heightStyled, this.dispatch("cell-height", this, this.row.heightStyled);
        }
        getHeight() {
            return this.height || this.element.offsetHeight;
        }
        show() {
            this.element.style.display = this.column.vertAlign ? "inline-flex" : "";
        }
        hide() {
            this.element.style.display = "none";
        }
        delete() {
            this.dispatch("cell-delete", this), !this.table.rowManager.redrawBlock && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = !1, this.column.deleteCell(this), this.row.deleteCell(this), this.calcs = {};
        }
        getIndex() {
            return this.row.getCellIndex(this);
        }
        getComponent() {
            return this.component || (this.component = new s(this)), this.component;
        }
        constructor(e, t){
            super(e.table), this.table = e.table, this.column = e, this.row = t, this.element = null, this.value = null, this.initialValue, this.oldValue = null, this.modules = {}, this.height = null, this.width = null, this.minWidth = null, this.component = null, this.loaded = !1, this.build();
        }
    }
    class n extends e {
        createElement() {
            var e = document.createElement("div");
            switch(e.classList.add("tabulator-col"), e.setAttribute("role", "columnheader"), e.setAttribute("aria-sort", "none"), this.table.options.columnHeaderVertAlign){
                case "middle":
                    e.style.justifyContent = "center";
                    break;
                case "bottom":
                    e.style.justifyContent = "flex-end";
            }
            return e;
        }
        createGroupElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-col-group-cols"), e;
        }
        mapDefinitions() {
            var e = this.table.options.columnDefaults;
            if (e) for(let t in e)void 0 === this.definition[t] && (this.definition[t] = e[t]);
            this.definition = this.table.columnManager.optionsList.generate(n.defaultOptionList, this.definition);
        }
        checkDefinition() {
            Object.keys(this.definition).forEach((e)=>{
                -1 === n.defaultOptionList.indexOf(e) && console.warn("Invalid column definition option in '" + (this.field || this.definition.title) + "' column:", e);
            });
        }
        setField(e) {
            this.field = e, this.fieldStructure = e ? this.table.options.nestedFieldSeparator ? e.split(this.table.options.nestedFieldSeparator) : [
                e
            ] : [], this.getFieldValue = this.fieldStructure.length > 1 ? this._getNestedData : this._getFlatData, this.setFieldValue = this.fieldStructure.length > 1 ? this._setNestedData : this._setFlatData;
        }
        registerColumnPosition(e) {
            this.parent.registerColumnPosition(e);
        }
        registerColumnField(e) {
            this.parent.registerColumnField(e);
        }
        reRegisterPosition() {
            this.isGroup ? this.columns.forEach(function(e) {
                e.reRegisterPosition();
            }) : this.registerColumnPosition(this);
        }
        _initialize() {
            for(var e = this.definition; this.element.firstChild;)this.element.removeChild(this.element.firstChild);
            e.headerVertical && (this.element.classList.add("tabulator-col-vertical"), "flip" === e.headerVertical && this.element.classList.add("tabulator-col-vertical-flip")), this.contentElement = this._buildColumnHeaderContent(), this.element.appendChild(this.contentElement), this.isGroup ? this._buildGroupHeader() : this._buildColumnHeader(), this.dispatch("column-init", this);
        }
        _buildColumnHeader() {
            var e = this.definition;
            (this.dispatch("column-layout", this), void 0 !== e.visible && (e.visible ? this.show(!0) : this.hide(!0)), e.cssClass) && e.cssClass.split(" ").forEach((e)=>{
                this.element.classList.add(e);
            });
            e.field && this.element.setAttribute("tabulator-field", e.field), this.setMinWidth(parseInt(e.minWidth)), e.maxInitialWidth && (this.maxInitialWidth = parseInt(e.maxInitialWidth)), e.maxWidth && this.setMaxWidth(parseInt(e.maxWidth)), this.reinitializeWidth(), this.hozAlign = this.definition.hozAlign, this.vertAlign = this.definition.vertAlign, this.titleElement.style.textAlign = this.definition.headerHozAlign;
        }
        _buildColumnHeaderContent() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-col-content"), this.titleHolderElement = document.createElement("div"), this.titleHolderElement.classList.add("tabulator-col-title-holder"), e.appendChild(this.titleHolderElement), this.titleElement = this._buildColumnHeaderTitle(), this.titleHolderElement.appendChild(this.titleElement), e;
        }
        _buildColumnHeaderTitle() {
            var e = this.definition, t = document.createElement("div");
            if (t.classList.add("tabulator-col-title"), e.headerWordWrap && t.classList.add("tabulator-col-title-wrap"), e.editableTitle) {
                var i = document.createElement("input");
                i.classList.add("tabulator-title-editor"), i.addEventListener("click", (e)=>{
                    e.stopPropagation(), i.focus();
                }), i.addEventListener("change", ()=>{
                    e.title = i.value, this.dispatchExternal("columnTitleChanged", this.getComponent());
                }), t.appendChild(i), e.field ? this.langBind("columns|" + e.field, (t)=>{
                    i.value = t || e.title || "&nbsp;";
                }) : i.value = e.title || "&nbsp;";
            } else e.field ? this.langBind("columns|" + e.field, (i)=>{
                this._formatColumnHeaderTitle(t, i || e.title || "&nbsp;");
            }) : this._formatColumnHeaderTitle(t, e.title || "&nbsp;");
            return t;
        }
        _formatColumnHeaderTitle(e, t) {
            var i = this.chain("column-format", [
                this,
                t,
                e
            ], null, ()=>t);
            switch(typeof i){
                case "object":
                    i instanceof Node ? e.appendChild(i) : (e.innerHTML = "", console.warn("Format Error - Title formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", i));
                    break;
                case "undefined":
                    e.innerHTML = "";
                    break;
                default:
                    e.innerHTML = i;
            }
        }
        _buildGroupHeader() {
            (this.element.classList.add("tabulator-col-group"), this.element.setAttribute("role", "columngroup"), this.element.setAttribute("aria-title", this.definition.title), this.definition.cssClass) && this.definition.cssClass.split(" ").forEach((e)=>{
                this.element.classList.add(e);
            });
            this.titleElement.style.textAlign = this.definition.headerHozAlign, this.element.appendChild(this.groupElement);
        }
        _getFlatData(e) {
            return e[this.field];
        }
        _getNestedData(e) {
            var t, i = e, s = this.fieldStructure, o = s.length;
            for(let e1 = 0; e1 < o && (t = i = i[s[e1]], i); e1++);
            return t;
        }
        _setFlatData(e, t) {
            this.field && (e[this.field] = t);
        }
        _setNestedData(e, t) {
            var i = e, s = this.fieldStructure, o = s.length;
            for(let e1 = 0; e1 < o; e1++)if (e1 == o - 1) i[s[e1]] = t;
            else {
                if (!i[s[e1]]) {
                    if (void 0 === t) break;
                    i[s[e1]] = {};
                }
                i = i[s[e1]];
            }
        }
        attachColumn(e) {
            this.groupElement ? (this.columns.push(e), this.groupElement.appendChild(e.getElement()), e.columnRendered()) : console.warn("Column Warning - Column being attached to another column instead of column group");
        }
        verticalAlign(e, t) {
            var i = this.parent.isGroup ? this.parent.getGroupElement().clientHeight : t || this.parent.getHeadersElement().clientHeight;
            this.element.style.height = i + "px", this.dispatch("column-height", this, this.element.style.height), this.isGroup && (this.groupElement.style.minHeight = i - this.contentElement.offsetHeight + "px"), this.columns.forEach(function(t) {
                t.verticalAlign(e);
            });
        }
        clearVerticalAlign() {
            this.element.style.paddingTop = "", this.element.style.height = "", this.element.style.minHeight = "", this.groupElement.style.minHeight = "", this.columns.forEach(function(e) {
                e.clearVerticalAlign();
            }), this.dispatch("column-height", this, "");
        }
        getElement() {
            return this.element;
        }
        getGroupElement() {
            return this.groupElement;
        }
        getField() {
            return this.field;
        }
        getTitleDownload() {
            return this.titleDownload;
        }
        getFirstColumn() {
            return this.isGroup ? !!this.columns.length && this.columns[0].getFirstColumn() : this;
        }
        getLastColumn() {
            return this.isGroup ? !!this.columns.length && this.columns[this.columns.length - 1].getLastColumn() : this;
        }
        getColumns(e) {
            var t = [];
            return e ? this.columns.forEach((e)=>{
                t.push(e), t = t.concat(e.getColumns(!0));
            }) : t = this.columns, t;
        }
        getCells() {
            return this.cells;
        }
        getTopColumn() {
            return this.parent.isGroup ? this.parent.getTopColumn() : this;
        }
        getDefinition(e) {
            var t = [];
            return this.isGroup && e && (this.columns.forEach(function(e) {
                t.push(e.getDefinition(!0));
            }), this.definition.columns = t), this.definition;
        }
        checkColumnVisibility() {
            var e = !1;
            this.columns.forEach(function(t) {
                t.visible && (e = !0);
            }), e ? (this.show(), this.dispatchExternal("columnVisibilityChanged", this.getComponent(), !1)) : this.hide();
        }
        show(e, t) {
            this.visible || (this.visible = !0, this.element.style.display = "", this.parent.isGroup && this.parent.checkColumnVisibility(), this.cells.forEach(function(e) {
                e.show();
            }), this.isGroup || null !== this.width || this.reinitializeWidth(), this.table.columnManager.verticalAlignHeaders(), this.dispatch("column-show", this, t), e || this.dispatchExternal("columnVisibilityChanged", this.getComponent(), !0), this.parent.isGroup && this.parent.matchChildWidths(), this.silent || this.table.columnManager.rerenderColumns());
        }
        hide(e, t) {
            this.visible && (this.visible = !1, this.element.style.display = "none", this.table.columnManager.verticalAlignHeaders(), this.parent.isGroup && this.parent.checkColumnVisibility(), this.cells.forEach(function(e) {
                e.hide();
            }), this.dispatch("column-hide", this, t), e || this.dispatchExternal("columnVisibilityChanged", this.getComponent(), !1), this.parent.isGroup && this.parent.matchChildWidths(), this.silent || this.table.columnManager.rerenderColumns());
        }
        matchChildWidths() {
            var e = 0;
            this.contentElement && this.columns.length && (this.columns.forEach(function(t) {
                t.visible && (e += t.getWidth());
            }), this.contentElement.style.maxWidth = e - 1 + "px", this.parent.isGroup && this.parent.matchChildWidths());
        }
        removeChild(e) {
            var t = this.columns.indexOf(e);
            t > -1 && this.columns.splice(t, 1), this.columns.length || this.delete();
        }
        setWidth(e) {
            this.widthFixed = !0, this.setWidthActual(e);
        }
        setWidthActual(e) {
            isNaN(e) && (e = Math.floor(this.table.element.clientWidth / 100 * parseInt(e))), e = Math.max(this.minWidth, e), this.maxWidth && (e = Math.min(this.maxWidth, e)), this.width = e, this.widthStyled = e ? e + "px" : "", this.element.style.width = this.widthStyled, this.isGroup || this.cells.forEach(function(e) {
                e.setWidth();
            }), this.parent.isGroup && this.parent.matchChildWidths(), this.dispatch("column-width", this);
        }
        checkCellHeights() {
            var e = [];
            this.cells.forEach(function(t) {
                t.row.heightInitialized && (null !== t.row.getElement().offsetParent ? (e.push(t.row), t.row.clearCellHeight()) : t.row.heightInitialized = !1);
            }), e.forEach(function(e) {
                e.calcHeight();
            }), e.forEach(function(e) {
                e.setCellHeight();
            });
        }
        getWidth() {
            var e = 0;
            return this.isGroup ? this.columns.forEach(function(t) {
                t.visible && (e += t.getWidth());
            }) : e = this.width, e;
        }
        getHeight() {
            return Math.ceil(this.element.getBoundingClientRect().height);
        }
        setMinWidth(e) {
            this.maxWidth && e > this.maxWidth && (e = this.maxWidth, console.warn("the minWidth (" + e + "px) for column '" + this.field + "' cannot be bigger that its maxWidth (" + this.maxWidthStyled + ")")), this.minWidth = e, this.minWidthStyled = e ? e + "px" : "", this.element.style.minWidth = this.minWidthStyled, this.cells.forEach(function(e) {
                e.setMinWidth();
            });
        }
        setMaxWidth(e) {
            this.minWidth && e < this.minWidth && (e = this.minWidth, console.warn("the maxWidth (" + e + "px) for column '" + this.field + "' cannot be smaller that its minWidth (" + this.minWidthStyled + ")")), this.maxWidth = e, this.maxWidthStyled = e ? e + "px" : "", this.element.style.maxWidth = this.maxWidthStyled, this.cells.forEach(function(e) {
                e.setMaxWidth();
            });
        }
        delete() {
            return new Promise((e, t)=>{
                this.isGroup && this.columns.forEach(function(e) {
                    e.delete();
                }), this.dispatch("column-delete", this);
                var i = this.cells.length;
                for(let e1 = 0; e1 < i; e1++)this.cells[0].delete();
                this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = !1, this.contentElement = !1, this.titleElement = !1, this.groupElement = !1, this.parent.isGroup && this.parent.removeChild(this), this.table.columnManager.deregisterColumn(this), this.table.columnManager.rerenderColumns(!0), e();
            });
        }
        columnRendered() {
            this.titleFormatterRendered && this.titleFormatterRendered(), this.dispatch("column-rendered", this);
        }
        generateCell(e) {
            var t = new o(this, e);
            return this.cells.push(t), t;
        }
        nextColumn() {
            var e = this.table.columnManager.findColumnIndex(this);
            return e > -1 && this._nextVisibleColumn(e + 1);
        }
        _nextVisibleColumn(e) {
            var t = this.table.columnManager.getColumnByIndex(e);
            return !t || t.visible ? t : this._nextVisibleColumn(e + 1);
        }
        prevColumn() {
            var e = this.table.columnManager.findColumnIndex(this);
            return e > -1 && this._prevVisibleColumn(e - 1);
        }
        _prevVisibleColumn(e) {
            var t = this.table.columnManager.getColumnByIndex(e);
            return !t || t.visible ? t : this._prevVisibleColumn(e - 1);
        }
        reinitializeWidth(e) {
            this.widthFixed = !1, void 0 === this.definition.width || e || this.setWidth(this.definition.width), this.dispatch("column-width-fit-before", this), this.fitToData(e), this.dispatch("column-width-fit-after", this);
        }
        fitToData(e) {
            if (!this.isGroup) {
                this.widthFixed || (this.element.style.width = "", this.cells.forEach((e)=>{
                    e.clearWidth();
                }));
                var t = this.element.offsetWidth;
                if ((!this.width || !this.widthFixed) && (this.cells.forEach((e)=>{
                    var i = e.getWidth();
                    i > t && (t = i);
                }), t)) {
                    var i = t + 1;
                    this.maxInitialWidth && !e && (i = Math.min(i, this.maxInitialWidth)), this.setWidthActual(i);
                }
            }
        }
        updateDefinition(e) {
            var t;
            return this.isGroup || this.parent.isGroup ? (console.error("Column Update Error - The updateDefinition function is only available on ungrouped columns"), Promise.reject("Column Update Error - The updateDefinition function is only available on columns, not column groups")) : (t = Object.assign({}, this.getDefinition()), t = Object.assign(t, e), this.table.columnManager.addColumn(t, !1, this).then((e)=>(t.field == this.field && (this.field = !1), this.delete().then(()=>e.getComponent()))));
        }
        deleteCell(e) {
            var t = this.cells.indexOf(e);
            t > -1 && this.cells.splice(t, 1);
        }
        getComponent() {
            return this.component || (this.component = new t(this)), this.component;
        }
        constructor(e, t){
            super(t.table), this.definition = e, this.parent = t, this.type = "column", this.columns = [], this.cells = [], this.element = this.createElement(), this.contentElement = !1, this.titleHolderElement = !1, this.titleElement = !1, this.groupElement = this.createGroupElement(), this.isGroup = !1, this.hozAlign = "", this.vertAlign = "", this.field = "", this.fieldStructure = "", this.getFieldValue = "", this.setFieldValue = "", this.titleDownload = null, this.titleFormatterRendered = !1, this.mapDefinitions(), this.setField(this.definition.field), this.modules = {}, this.width = null, this.widthStyled = "", this.maxWidth = null, this.maxWidthStyled = "", this.maxInitialWidth = null, this.minWidth = null, this.minWidthStyled = "", this.widthFixed = !1, this.visible = !0, this.component = null, this.definition.columns ? (this.isGroup = !0, this.definition.columns.forEach((e, t)=>{
                var i = new n(e, this);
                this.attachColumn(i);
            }), this.checkColumnVisibility()) : t.registerColumnField(this), this._initialize();
        }
    }
    n.defaultOptionList = i;
    class r {
        static elVisible(e) {
            return !(e.offsetWidth <= 0 && e.offsetHeight <= 0);
        }
        static elOffset(e) {
            var t = e.getBoundingClientRect();
            return {
                top: t.top + window.pageYOffset - document.documentElement.clientTop,
                left: t.left + window.pageXOffset - document.documentElement.clientLeft
            };
        }
        static deepClone(e, t, i = []) {
            var s = {}.__proto__, o = [].__proto__;
            for(var n in t || (t = Object.assign(Array.isArray(e) ? [] : {}, e)), e){
                let r, a, l = e[n];
                null == l || "object" != typeof l || l.__proto__ !== s && l.__proto__ !== o || (r = i.findIndex((e)=>e.subject === l), r > -1 ? t[n] = i[r].copy : (a = Object.assign(Array.isArray(l) ? [] : {}, l), i.unshift({
                    subject: l,
                    copy: a
                }), t[n] = this.deepClone(l, a, i)));
            }
            return t;
        }
    }
    class a {
        register(e, t) {
            this.registeredDefaults[e] = t;
        }
        generate(e, t = {}) {
            var i = Object.assign({}, this.registeredDefaults);
            if (Object.assign(i, e), !1 !== t.debugInvalidOptions || this.table.options.debugInvalidOptions) for(let e1 in t)i.hasOwnProperty(e1) || console.warn("Invalid " + this.msgType + " option:", e1);
            for(let e2 in i)e2 in t ? i[e2] = t[e2] : Array.isArray(i[e2]) ? i[e2] = Object.assign([], i[e2]) : "object" == typeof i[e2] && null !== i[e2] ? i[e2] = Object.assign({}, i[e2]) : void 0 === i[e2] && delete i[e2];
            return i;
        }
        constructor(e, t, i = {}){
            this.table = e, this.msgType = t, this.registeredDefaults = Object.assign({}, i);
        }
    }
    class l extends e {
        initialize() {}
        clearRows() {}
        clearColumns() {}
        reinitializeColumnWidths(e) {}
        renderRows() {}
        renderColumns() {}
        rerenderRows(e) {
            e && e();
        }
        rerenderColumns(e, t) {}
        renderRowCells(e) {}
        rerenderRowCells(e, t) {}
        scrollColumns(e, t) {}
        scrollRows(e, t) {}
        resize() {}
        scrollToRow(e) {}
        scrollToRowNearestTop(e) {}
        visibleRows(e) {
            return [];
        }
        rows() {
            return this.table.rowManager.getDisplayRows();
        }
        styleRow(e, t) {
            var i = e.getElement();
            t % 2 ? (i.classList.add("tabulator-row-even"), i.classList.remove("tabulator-row-odd")) : (i.classList.add("tabulator-row-odd"), i.classList.remove("tabulator-row-even"));
        }
        clear() {
            this.clearRows(), this.clearColumns();
        }
        render() {
            this.renderRows(), this.renderColumns();
        }
        rerender(e) {
            this.rerenderRows(), this.rerenderColumns();
        }
        scrollToRowPosition(e, t, i) {
            var s = this.rows().indexOf(e), o = e.getElement(), n = 0;
            return new Promise((a, l)=>{
                if (s > -1) {
                    if (void 0 === i && (i = this.table.options.scrollToRowIfVisible), !i && r.elVisible(o) && (n = r.elOffset(o).top - r.elOffset(this.elementVertical).top) > 0 && n < this.elementVertical.clientHeight - o.offsetHeight) return a(), !1;
                    switch(void 0 === t && (t = this.table.options.scrollToRowPosition), "nearest" === t && (t = this.scrollToRowNearestTop(e) ? "top" : "bottom"), this.scrollToRow(e), t){
                        case "middle":
                        case "center":
                            this.elementVertical.scrollHeight - this.elementVertical.scrollTop == this.elementVertical.clientHeight ? this.elementVertical.scrollTop = this.elementVertical.scrollTop + (o.offsetTop - this.elementVertical.scrollTop) - (this.elementVertical.scrollHeight - o.offsetTop) / 2 : this.elementVertical.scrollTop = this.elementVertical.scrollTop - this.elementVertical.clientHeight / 2;
                            break;
                        case "bottom":
                            this.elementVertical.scrollHeight - this.elementVertical.scrollTop == this.elementVertical.clientHeight ? this.elementVertical.scrollTop = this.elementVertical.scrollTop - (this.elementVertical.scrollHeight - o.offsetTop) + o.offsetHeight : this.elementVertical.scrollTop = this.elementVertical.scrollTop - this.elementVertical.clientHeight + o.offsetHeight;
                            break;
                        case "top":
                            this.elementVertical.scrollTop = o.offsetTop;
                    }
                    a();
                } else console.warn("Scroll Error - Row not visible"), l("Scroll Error - Row not visible");
            });
        }
        constructor(e){
            super(e), this.elementVertical = e.rowManager.element, this.elementHorizontal = e.columnManager.element, this.tableElement = e.rowManager.tableElement, this.verticalFillMode = "fit";
        }
    }
    class h extends l {
        renderRowCells(e) {
            e.cells.forEach((t)=>{
                e.element.appendChild(t.getElement()), t.cellRendered();
            });
        }
        reinitializeColumnWidths(e) {
            e.forEach(function(e) {
                e.reinitializeWidth();
            });
        }
        constructor(e){
            super(e);
        }
    }
    class d extends l {
        initialize() {
            this.compatibilityCheck(), this.layoutCheck(), this.vertScrollListen();
        }
        compatibilityCheck() {
            "fitDataTable" == this.options("layout") && console.warn("Horizontal Virtual DOM is not compatible with fitDataTable layout mode"), this.options("responsiveLayout") && console.warn("Horizontal Virtual DOM is not compatible with responsive columns"), this.options("rtl") && console.warn("Horizontal Virtual DOM is not currently compatible with RTL text direction");
        }
        layoutCheck() {
            this.isFitData = this.options("layout").startsWith("fitData");
        }
        vertScrollListen() {
            this.subscribe("scroll-vertical", this.clearVisRowCache.bind(this)), this.subscribe("data-refreshed", this.clearVisRowCache.bind(this));
        }
        clearVisRowCache() {
            this.visibleRows = null;
        }
        renderColumns(e, t) {
            this.dataChange();
        }
        scrollColumns(e, t) {
            this.scrollLeft != e && (this.scrollLeft = e, this.scroll(e - (this.vDomScrollPosLeft + this.windowBuffer)));
        }
        calcWindowBuffer() {
            var e = this.elementVertical.clientWidth;
            this.table.columnManager.columnsByIndex.forEach((t)=>{
                if (t.visible) {
                    var i = t.getWidth();
                    i > e && (e = i);
                }
            }), this.windowBuffer = 2 * e;
        }
        rerenderColumns(e, t) {
            var i = {
                cols: this.columns,
                leftCol: this.leftCol,
                rightCol: this.rightCol
            }, s = 0;
            e && !this.initialized || (this.clear(), this.calcWindowBuffer(), this.scrollLeft = this.elementVertical.scrollLeft, this.vDomScrollPosLeft = this.scrollLeft - this.windowBuffer, this.vDomScrollPosRight = this.scrollLeft + this.elementVertical.clientWidth + this.windowBuffer, this.table.columnManager.columnsByIndex.forEach((e)=>{
                var t, i = {};
                e.visible && (e.modules.frozen || (t = e.getWidth(), i.leftPos = s, i.rightPos = s + t, i.width = t, this.isFitData && (i.fitDataCheck = !e.modules.vdomHoz || e.modules.vdomHoz.fitDataCheck), s + t > this.vDomScrollPosLeft && s < this.vDomScrollPosRight ? (-1 == this.leftCol && (this.leftCol = this.columns.length, this.vDomPadLeft = s), this.rightCol = this.columns.length) : -1 !== this.leftCol && (this.vDomPadRight += t), this.columns.push(e), e.modules.vdomHoz = i, s += t));
            }), this.tableElement.style.paddingLeft = this.vDomPadLeft + "px", this.tableElement.style.paddingRight = this.vDomPadRight + "px", this.initialized = !0, t || e && !this.reinitChanged(i) || this.reinitializeRows(), this.elementVertical.scrollLeft = this.scrollLeft);
        }
        renderRowCells(e) {
            this.initialized ? this.initializeRow(e) : e.cells.forEach((t)=>{
                e.element.appendChild(t.getElement()), t.cellRendered();
            });
        }
        rerenderRowCells(e, t) {
            this.reinitializeRow(e, t);
        }
        reinitializeColumnWidths(e) {
            for(let e1 = this.leftCol; e1 <= this.rightCol; e1++)this.columns[e1].reinitializeWidth();
        }
        deinitialize() {
            this.initialized = !1;
        }
        clear() {
            this.columns = [], this.leftCol = -1, this.rightCol = 0, this.vDomScrollPosLeft = 0, this.vDomScrollPosRight = 0, this.vDomPadLeft = 0, this.vDomPadRight = 0;
        }
        dataChange() {
            var e, t, i = !1;
            if (this.isFitData) {
                if (this.table.columnManager.columnsByIndex.forEach((e)=>{
                    !e.definition.width && e.visible && (i = !0);
                }), i && this.table.rowManager.getDisplayRows().length && (this.vDomScrollPosRight = this.scrollLeft + this.elementVertical.clientWidth + this.windowBuffer, e = this.chain("rows-sample", [
                    1
                ], [], ()=>this.table.rowManager.getDisplayRows())[0])) {
                    t = e.getElement(), e.generateCells(), this.tableElement.appendChild(t);
                    for(let i1 = 0; i1 < e.cells.length; i1++){
                        let s = e.cells[i1];
                        t.appendChild(s.getElement()), s.column.reinitializeWidth();
                    }
                    t.parentNode.removeChild(t), this.rerenderColumns(!1, !0);
                }
            } else "fitColumns" === this.options("layout") && (this.layoutRefresh(), this.rerenderColumns(!1, !0));
        }
        reinitChanged(e) {
            var t = !0;
            return e.cols.length !== this.columns.length || e.leftCol !== this.leftCol || e.rightCol !== this.rightCol || (e.cols.forEach((e, i)=>{
                e !== this.columns[i] && (t = !1);
            }), !t);
        }
        reinitializeRows() {
            var e = this.getVisibleRows(), t = this.table.rowManager.getRows().filter((t)=>!e.includes(t));
            e.forEach((e)=>{
                this.reinitializeRow(e, !0);
            }), t.forEach((e)=>{
                e.deinitialize();
            });
        }
        getVisibleRows() {
            return this.visibleRows || (this.visibleRows = this.table.rowManager.getVisibleRows()), this.visibleRows;
        }
        scroll(e) {
            this.vDomScrollPosLeft += e, this.vDomScrollPosRight += e, Math.abs(e) > this.windowBuffer / 2 ? this.rerenderColumns() : e > 0 ? (this.addColRight(), this.removeColLeft()) : (this.addColLeft(), this.removeColRight());
        }
        colPositionAdjust(e, t, i) {
            for(let s = e; s < t; s++){
                let e1 = this.columns[s];
                e1.modules.vdomHoz.leftPos += i, e1.modules.vdomHoz.rightPos += i;
            }
        }
        addColRight() {
            for(var e = !1, t = !0; t;){
                let i = this.columns[this.rightCol + 1];
                i && i.modules.vdomHoz.leftPos <= this.vDomScrollPosRight ? (e = !0, this.getVisibleRows().forEach((e)=>{
                    if ("group" !== e.type) {
                        var t = e.getCell(i);
                        e.getElement().insertBefore(t.getElement(), e.getCell(this.columns[this.rightCol]).getElement().nextSibling), t.cellRendered();
                    }
                }), this.fitDataColActualWidthCheck(i), this.rightCol++, this.getVisibleRows().forEach((e)=>{
                    "group" !== e.type && (e.modules.vdomHoz.rightCol = this.rightCol);
                }), this.rightCol >= this.columns.length - 1 ? this.vDomPadRight = 0 : this.vDomPadRight -= i.getWidth()) : t = !1;
            }
            e && (this.tableElement.style.paddingRight = this.vDomPadRight + "px");
        }
        addColLeft() {
            for(var e = !1, t = !0; t;){
                let i = this.columns[this.leftCol - 1];
                if (i) {
                    if (i.modules.vdomHoz.rightPos >= this.vDomScrollPosLeft) {
                        e = !0, this.getVisibleRows().forEach((e)=>{
                            if ("group" !== e.type) {
                                var t = e.getCell(i);
                                e.getElement().insertBefore(t.getElement(), e.getCell(this.columns[this.leftCol]).getElement()), t.cellRendered();
                            }
                        }), this.leftCol--, this.getVisibleRows().forEach((e)=>{
                            "group" !== e.type && (e.modules.vdomHoz.leftCol = this.leftCol);
                        }), this.leftCol <= 0 ? this.vDomPadLeft = 0 : this.vDomPadLeft -= i.getWidth();
                        let t1 = this.fitDataColActualWidthCheck(i);
                        t1 && (this.scrollLeft = this.elementVertical.scrollLeft = this.elementVertical.scrollLeft + t1, this.vDomPadRight -= t1);
                    } else t = !1;
                } else t = !1;
            }
            e && (this.tableElement.style.paddingLeft = this.vDomPadLeft + "px");
        }
        removeColRight() {
            for(var e = !1, t = !0; t;){
                let i = this.columns[this.rightCol];
                i && i.modules.vdomHoz.leftPos > this.vDomScrollPosRight ? (e = !0, this.getVisibleRows().forEach((e)=>{
                    if ("group" !== e.type) {
                        var t = e.getCell(i);
                        try {
                            e.getElement().removeChild(t.getElement());
                        } catch (e1) {
                            console.warn("Could not removeColRight", e1.message);
                        }
                    }
                }), this.vDomPadRight += i.getWidth(), this.rightCol--, this.getVisibleRows().forEach((e)=>{
                    "group" !== e.type && (e.modules.vdomHoz.rightCol = this.rightCol);
                })) : t = !1;
            }
            e && (this.tableElement.style.paddingRight = this.vDomPadRight + "px");
        }
        removeColLeft() {
            for(var e = !1, t = !0; t;){
                let i = this.columns[this.leftCol];
                i && i.modules.vdomHoz.rightPos < this.vDomScrollPosLeft ? (e = !0, this.getVisibleRows().forEach((e)=>{
                    if ("group" !== e.type) {
                        var t = e.getCell(i);
                        try {
                            e.getElement().removeChild(t.getElement());
                        } catch (e1) {
                            console.warn("Could not removeColLeft", e1.message);
                        }
                    }
                }), this.vDomPadLeft += i.getWidth(), this.leftCol++, this.getVisibleRows().forEach((e)=>{
                    "group" !== e.type && (e.modules.vdomHoz.leftCol = this.leftCol);
                })) : t = !1;
            }
            e && (this.tableElement.style.paddingLeft = this.vDomPadLeft + "px");
        }
        fitDataColActualWidthCheck(e) {
            var t, i;
            return e.modules.vdomHoz.fitDataCheck && (e.reinitializeWidth(), (i = (t = e.getWidth()) - e.modules.vdomHoz.width) && (e.modules.vdomHoz.rightPos += i, e.modules.vdomHoz.width = t, this.colPositionAdjust(this.columns.indexOf(e) + 1, this.columns.length, i)), e.modules.vdomHoz.fitDataCheck = !1), i;
        }
        initializeRow(e) {
            if ("group" !== e.type) {
                e.modules.vdomHoz = {
                    leftCol: this.leftCol,
                    rightCol: this.rightCol
                }, this.table.modules.frozenColumns && this.table.modules.frozenColumns.leftColumns.forEach((t)=>{
                    this.appendCell(e, t);
                });
                for(let t = this.leftCol; t <= this.rightCol; t++)this.appendCell(e, this.columns[t]);
                this.table.modules.frozenColumns && this.table.modules.frozenColumns.rightColumns.forEach((t)=>{
                    this.appendCell(e, t);
                });
            }
        }
        appendCell(e, t) {
            if (t && t.visible) {
                let i = e.getCell(t);
                e.getElement().appendChild(i.getElement()), i.cellRendered();
            }
        }
        reinitializeRow(e, t) {
            if ("group" !== e.type && (t || !e.modules.vdomHoz || e.modules.vdomHoz.leftCol !== this.leftCol || e.modules.vdomHoz.rightCol !== this.rightCol)) {
                for(var i = e.getElement(); i.firstChild;)i.removeChild(i.firstChild);
                this.initializeRow(e);
            }
        }
        constructor(e){
            super(e), this.leftCol = 0, this.rightCol = 0, this.scrollLeft = 0, this.vDomScrollPosLeft = 0, this.vDomScrollPosRight = 0, this.vDomPadLeft = 0, this.vDomPadRight = 0, this.fitDataColAvg = 0, this.windowBuffer = 200, this.visibleRows = null, this.initialized = !1, this.isFitData = !1, this.columns = [];
        }
    }
    class c extends e {
        initialize() {
            this.initializeRenderer(), this.headersElement = this.createHeadersElement(), this.contentsElement = this.createHeaderContentsElement(), this.element = this.createHeaderElement(), this.contentsElement.insertBefore(this.headersElement, this.contentsElement.firstChild), this.element.insertBefore(this.contentsElement, this.element.firstChild), this.subscribe("scroll-horizontal", this.scrollHorizontal.bind(this)), this.subscribe("scrollbar-vertical", this.padVerticalScrollbar.bind(this));
        }
        padVerticalScrollbar(e) {
            this.table.rtl ? this.headersElement.style.marginLeft = e + "px" : this.headersElement.style.marginRight = e + "px";
        }
        initializeRenderer() {
            var e, t = {
                virtual: d,
                basic: h
            };
            (e = "string" == typeof this.table.options.renderHorizontal ? t[this.table.options.renderHorizontal] : this.table.options.renderHorizontal) ? (this.renderer = new e(this.table, this.element, this.tableElement), this.renderer.initialize()) : console.error("Unable to find matching renderer:", this.table.options.renderHorizontal);
        }
        createHeadersElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-headers"), e.setAttribute("role", "row"), e;
        }
        createHeaderContentsElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-header-contents"), e.setAttribute("role", "rowgroup"), e;
        }
        createHeaderElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-header"), e.setAttribute("role", "rowgroup"), this.table.options.headerVisible || e.classList.add("tabulator-header-hidden"), e;
        }
        getElement() {
            return this.element;
        }
        getContentsElement() {
            return this.contentsElement;
        }
        getHeadersElement() {
            return this.headersElement;
        }
        scrollHorizontal(e) {
            this.contentsElement.scrollLeft = e, this.scrollLeft = e, this.renderer.scrollColumns(e);
        }
        generateColumnsFromRowData(e) {
            var t, i, s = [], o = this.table.options.autoColumnsDefinitions;
            if (e && e.length) {
                for(var n in t = e[0]){
                    let e1 = {
                        field: n,
                        title: n
                    }, o1 = t[n];
                    switch(typeof o1){
                        case "undefined":
                            i = "string";
                            break;
                        case "boolean":
                            i = "boolean";
                            break;
                        case "object":
                            i = Array.isArray(o1) ? "array" : "string";
                            break;
                        default:
                            i = isNaN(o1) || "" === o1 ? o1.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i) ? "alphanum" : "string" : "number";
                    }
                    e1.sorter = i, s.push(e1);
                }
                if (o) switch(typeof o){
                    case "function":
                        this.table.options.columns = o.call(this.table, s);
                        break;
                    case "object":
                        Array.isArray(o) ? s.forEach((e)=>{
                            var t = o.find((t)=>t.field === e.field);
                            t && Object.assign(e, t);
                        }) : s.forEach((e)=>{
                            o[e.field] && Object.assign(e, o[e.field]);
                        }), this.table.options.columns = s;
                }
                else this.table.options.columns = s;
                this.setColumns(this.table.options.columns);
            }
        }
        setColumns(e, t) {
            for(; this.headersElement.firstChild;)this.headersElement.removeChild(this.headersElement.firstChild);
            this.columns = [], this.columnsByIndex = [], this.columnsByField = {}, this.dispatch("columns-loading"), e.forEach((e, t)=>{
                this._addColumn(e);
            }), this._reIndexColumns(), this.dispatch("columns-loaded"), this.rerenderColumns(!1, !0), this.redraw(!0);
        }
        _addColumn(e, t, i) {
            var s = new n(e, this), o = s.getElement(), r = i ? this.findColumnIndex(i) : i;
            if (i && r > -1) {
                var a = i.getTopColumn(), l = this.columns.indexOf(a), h = a.getElement();
                t ? (this.columns.splice(l, 0, s), h.parentNode.insertBefore(o, h)) : (this.columns.splice(l + 1, 0, s), h.parentNode.insertBefore(o, h.nextSibling));
            } else t ? (this.columns.unshift(s), this.headersElement.insertBefore(s.getElement(), this.headersElement.firstChild)) : (this.columns.push(s), this.headersElement.appendChild(s.getElement()));
            return s.columnRendered(), s;
        }
        registerColumnField(e) {
            e.definition.field && (this.columnsByField[e.definition.field] = e);
        }
        registerColumnPosition(e) {
            this.columnsByIndex.push(e);
        }
        _reIndexColumns() {
            this.columnsByIndex = [], this.columns.forEach(function(e) {
                e.reRegisterPosition();
            });
        }
        verticalAlignHeaders() {
            var e = 0;
            this.redrawBlock || (this.headersElement.style.height = "", this.columns.forEach((e)=>{
                e.clearVerticalAlign();
            }), this.columns.forEach((t)=>{
                var i = t.getHeight();
                i > e && (e = i);
            }), this.headersElement.style.height = e + "px", this.columns.forEach((t)=>{
                t.verticalAlign(this.table.options.columnHeaderVertAlign, e);
            }), this.table.rowManager.adjustTableSize());
        }
        findColumn(e) {
            var i;
            if ("object" != typeof e) return this.columnsByField[e] || !1;
            if (e instanceof n) return e;
            if (e instanceof t) return e._getSelf() || !1;
            if ("undefined" != typeof HTMLElement && e instanceof HTMLElement) return i = [], this.columns.forEach((e)=>{
                i.push(e), i = i.concat(e.getColumns(!0));
            }), i.find((t)=>t.element === e) || !1;
            return !1;
        }
        getColumnByField(e) {
            return this.columnsByField[e];
        }
        getColumnsByFieldRoot(e) {
            var t = [];
            return Object.keys(this.columnsByField).forEach((i)=>{
                i.split(".")[0] === e && t.push(this.columnsByField[i]);
            }), t;
        }
        getColumnByIndex(e) {
            return this.columnsByIndex[e];
        }
        getFirstVisibleColumn() {
            var e = this.columnsByIndex.findIndex((e)=>e.visible);
            return e > -1 && this.columnsByIndex[e];
        }
        getColumns() {
            return this.columns;
        }
        findColumnIndex(e) {
            return this.columnsByIndex.findIndex((t)=>e === t);
        }
        getRealColumns() {
            return this.columnsByIndex;
        }
        traverse(e) {
            this.columnsByIndex.forEach((t, i)=>{
                e(t, i);
            });
        }
        getDefinitions(e) {
            var t = [];
            return this.columnsByIndex.forEach((i)=>{
                (!e || e && i.visible) && t.push(i.getDefinition());
            }), t;
        }
        getDefinitionTree() {
            var e = [];
            return this.columns.forEach((t)=>{
                e.push(t.getDefinition(!0));
            }), e;
        }
        getComponents(e) {
            var t = [];
            return (e ? this.columns : this.columnsByIndex).forEach((e)=>{
                t.push(e.getComponent());
            }), t;
        }
        getWidth() {
            var e = 0;
            return this.columnsByIndex.forEach((t)=>{
                t.visible && (e += t.getWidth());
            }), e;
        }
        moveColumn(e, t, i) {
            t.element.parentNode.insertBefore(e.element, t.element), i && t.element.parentNode.insertBefore(t.element, e.element), this.moveColumnActual(e, t, i), this.verticalAlignHeaders(), this.table.rowManager.reinitialize();
        }
        moveColumnActual(e, t, i) {
            e.parent.isGroup ? this._moveColumnInArray(e.parent.columns, e, t, i) : this._moveColumnInArray(this.columns, e, t, i), this._moveColumnInArray(this.columnsByIndex, e, t, i, !0), this.rerenderColumns(!0), this.dispatch("column-moved", e, t, i), this.subscribedExternal("columnMoved") && this.dispatchExternal("columnMoved", e.getComponent(), this.table.columnManager.getComponents());
        }
        _moveColumnInArray(e, t, i, s, o) {
            var n, r = e.indexOf(t);
            r > -1 && (e.splice(r, 1), (n = e.indexOf(i)) > -1 ? s && (n += 1) : n = r, e.splice(n, 0, t), o && (this.chain("column-moving-rows", [
                t,
                i,
                s
            ], null, []) || []).concat(this.table.rowManager.rows).forEach(function(e) {
                if (e.cells.length) {
                    var t = e.cells.splice(r, 1)[0];
                    e.cells.splice(n, 0, t);
                }
            }));
        }
        scrollToColumn(e, t, i) {
            var s = 0, o = 0, n = 0, r = e.getElement();
            return new Promise((a, l)=>{
                if (void 0 === t && (t = this.table.options.scrollToColumnPosition), void 0 === i && (i = this.table.options.scrollToColumnIfVisible), e.visible) {
                    switch(t){
                        case "middle":
                        case "center":
                            n = -this.element.clientWidth / 2;
                            break;
                        case "right":
                            n = r.clientWidth - this.headersElement.clientWidth;
                    }
                    if (!i && (o = r.offsetLeft) > 0 && o + r.offsetWidth < this.element.clientWidth) return !1;
                    s = r.offsetLeft + n, s = Math.max(Math.min(s, this.table.rowManager.element.scrollWidth - this.table.rowManager.element.clientWidth), 0), this.table.rowManager.scrollHorizontal(s), this.scrollHorizontal(s), a();
                } else console.warn("Scroll Error - Column not visible"), l("Scroll Error - Column not visible");
            });
        }
        generateCells(e) {
            var t = [];
            return this.columnsByIndex.forEach((i)=>{
                t.push(i.generateCell(e));
            }), t;
        }
        getFlexBaseWidth() {
            var e = this.table.element.clientWidth, t = 0;
            return this.table.rowManager.element.scrollHeight > this.table.rowManager.element.clientHeight && (e -= this.table.rowManager.element.offsetWidth - this.table.rowManager.element.clientWidth), this.columnsByIndex.forEach(function(i) {
                var s, o, n;
                i.visible && (s = i.definition.width || 0, o = parseInt(i.minWidth), n = "string" == typeof s ? s.indexOf("%") > -1 ? e / 100 * parseInt(s) : parseInt(s) : s, t += n > o ? n : o);
            }), t;
        }
        addColumn(e, t, i) {
            return new Promise((s, o)=>{
                var n = this._addColumn(e, t, i);
                this._reIndexColumns(), this.dispatch("column-add", e, t, i), "fitColumns" != this.layoutMode() && n.reinitializeWidth(), this.redraw(!0), this.table.rowManager.reinitialize(), this.rerenderColumns(), s(n);
            });
        }
        deregisterColumn(e) {
            var t, i = e.getField();
            i && delete this.columnsByField[i], (t = this.columnsByIndex.indexOf(e)) > -1 && this.columnsByIndex.splice(t, 1), (t = this.columns.indexOf(e)) > -1 && this.columns.splice(t, 1), this.verticalAlignHeaders(), this.redraw();
        }
        rerenderColumns(e, t) {
            this.redrawBlock ? (!1 === e || !0 === e && null === this.redrawBlockUpdate) && (this.redrawBlockUpdate = e) : this.renderer.rerenderColumns(e, t);
        }
        blockRedraw() {
            this.redrawBlock = !0, this.redrawBlockUpdate = null;
        }
        restoreRedraw() {
            this.redrawBlock = !1, this.verticalAlignHeaders(), this.renderer.rerenderColumns(this.redrawBlockUpdate);
        }
        redraw(e) {
            r.elVisible(this.element) && this.verticalAlignHeaders(), e && (this.table.rowManager.resetScroll(), this.table.rowManager.reinitialize()), this.confirm("table-redrawing", e) || this.layoutRefresh(e), this.dispatch("table-redraw", e), this.table.footerManager.redraw();
        }
        constructor(e){
            super(e), this.blockHozScrollEvent = !1, this.headersElement = null, this.contentsElement = null, this.element = null, this.columns = [], this.columnsByIndex = [], this.columnsByField = {}, this.scrollLeft = 0, this.optionsList = new a(this.table, "column definition", i), this.redrawBlock = !1, this.redrawBlockUpdate = null, this.renderer = null;
        }
    }
    class u {
        getData(e) {
            return this._row.getData(e);
        }
        getElement() {
            return this._row.getElement();
        }
        getCells() {
            var e = [];
            return this._row.getCells().forEach(function(t) {
                e.push(t.getComponent());
            }), e;
        }
        getCell(e) {
            var t = this._row.getCell(e);
            return !!t && t.getComponent();
        }
        getIndex() {
            return this._row.getData("data")[this._row.table.options.index];
        }
        getPosition() {
            return this._row.getPosition();
        }
        watchPosition(e) {
            return this._row.watchPosition(e);
        }
        delete() {
            return this._row.delete();
        }
        scrollTo() {
            return this._row.table.rowManager.scrollToRow(this._row);
        }
        move(e, t) {
            this._row.moveToRow(e, t);
        }
        update(e) {
            return this._row.updateData(e);
        }
        normalizeHeight() {
            this._row.normalizeHeight(!0);
        }
        _getSelf() {
            return this._row;
        }
        reformat() {
            return this._row.reinitialize();
        }
        getTable() {
            return this._row.table;
        }
        getNextRow() {
            var e = this._row.nextRow();
            return e ? e.getComponent() : e;
        }
        getPrevRow() {
            var e = this._row.prevRow();
            return e ? e.getComponent() : e;
        }
        constructor(e){
            return this._row = e, new Proxy(this, {
                get: function(e, t, i) {
                    return void 0 !== e[t] ? e[t] : e._row.table.componentFunctionBinder.handle("row", e._row, t);
                }
            });
        }
    }
    class p extends e {
        create() {
            this.created || (this.created = !0, this.generateElement());
        }
        createElement() {
            var e = document.createElement("div");
            e.classList.add("tabulator-row"), e.setAttribute("role", "row"), this.element = e;
        }
        getElement() {
            return this.create(), this.element;
        }
        detachElement() {
            this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element);
        }
        generateElement() {
            this.createElement(), this.dispatch("row-init", this);
        }
        generateCells() {
            this.cells = this.table.columnManager.generateCells(this);
        }
        initialize(e) {
            if (this.create(), !this.initialized || e) {
                for(this.deleteCells(); this.element.firstChild;)this.element.removeChild(this.element.firstChild);
                this.dispatch("row-layout-before", this), this.generateCells(), this.initialized = !0, this.table.columnManager.renderer.renderRowCells(this), e && this.normalizeHeight(), this.dispatch("row-layout", this), this.table.options.rowFormatter && this.table.options.rowFormatter(this.getComponent()), this.dispatch("row-layout-after", this);
            } else this.table.columnManager.renderer.rerenderRowCells(this);
        }
        reinitializeHeight() {
            this.heightInitialized = !1, this.element && null !== this.element.offsetParent && this.normalizeHeight(!0);
        }
        deinitialize() {
            this.initialized = !1;
        }
        deinitializeHeight() {
            this.heightInitialized = !1;
        }
        reinitialize(e) {
            this.initialized = !1, this.heightInitialized = !1, this.manualHeight || (this.height = 0, this.heightStyled = ""), this.element && null !== this.element.offsetParent && this.initialize(!0), this.dispatch("row-relayout", this);
        }
        calcHeight(e) {
            var t, i = 0;
            this.table.options.rowHeight ? this.height = this.table.options.rowHeight : (t = this.table.options.resizableRows ? this.element.clientHeight : 0, this.cells.forEach(function(e) {
                var t = e.getHeight();
                t > i && (i = t);
            }), this.height = e ? Math.max(i, t) : this.manualHeight ? this.height : Math.max(i, t)), this.heightStyled = this.height ? this.height + "px" : "", this.outerHeight = this.element.offsetHeight;
        }
        setCellHeight() {
            this.cells.forEach(function(e) {
                e.setHeight();
            }), this.heightInitialized = !0;
        }
        clearCellHeight() {
            this.cells.forEach(function(e) {
                e.clearHeight();
            });
        }
        normalizeHeight(e) {
            e && !this.table.options.rowHeight && this.clearCellHeight(), this.calcHeight(e), this.setCellHeight();
        }
        setHeight(e, t) {
            (this.height != e || t) && (this.manualHeight = !0, this.height = e, this.heightStyled = e ? e + "px" : "", this.setCellHeight(), this.outerHeight = this.element.offsetHeight);
        }
        getHeight() {
            return this.outerHeight;
        }
        getWidth() {
            return this.element.offsetWidth;
        }
        deleteCell(e) {
            var t = this.cells.indexOf(e);
            t > -1 && this.cells.splice(t, 1);
        }
        setData(e) {
            this.data = this.chain("row-data-init-before", [
                this,
                e
            ], void 0, e), this.dispatch("row-data-init-after", this);
        }
        updateData(e) {
            var t, i = this.element && r.elVisible(this.element), s = {};
            return new Promise((o, n)=>{
                "string" == typeof e && (e = JSON.parse(e)), this.dispatch("row-data-save-before", this), this.subscribed("row-data-changing") && (s = Object.assign(s, this.data), s = Object.assign(s, e)), t = this.chain("row-data-changing", [
                    this,
                    s,
                    e
                ], null, e);
                for(let e1 in t)this.data[e1] = t[e1];
                this.dispatch("row-data-save-after", this);
                for(let s1 in e)this.table.columnManager.getColumnsByFieldRoot(s1).forEach((e)=>{
                    let s = this.getCell(e.getField());
                    if (s) {
                        let o = e.getFieldValue(t);
                        s.getValue() !== o && (s.setValueProcessData(o), i && s.cellRendered());
                    }
                });
                i ? (this.normalizeHeight(!0), this.table.options.rowFormatter && this.table.options.rowFormatter(this.getComponent())) : (this.initialized = !1, this.height = 0, this.heightStyled = ""), this.dispatch("row-data-changed", this, i, e), this.dispatchExternal("rowUpdated", this.getComponent()), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.table.rowManager.getData()), o();
            });
        }
        getData(e) {
            return e ? this.chain("row-data-retrieve", [
                this,
                e
            ], null, this.data) : this.data;
        }
        getCell(e) {
            return e = this.table.columnManager.findColumn(e), this.initialized || this.generateCells(), this.cells.find(function(t) {
                return t.column === e;
            });
        }
        getCellIndex(e) {
            return this.cells.findIndex(function(t) {
                return t === e;
            });
        }
        findCell(e) {
            return this.cells.find((t)=>t.element === e);
        }
        getCells() {
            return this.initialized || this.generateCells(), this.cells;
        }
        nextRow() {
            return this.table.rowManager.nextDisplayRow(this, !0) || !1;
        }
        prevRow() {
            return this.table.rowManager.prevDisplayRow(this, !0) || !1;
        }
        moveToRow(e, t) {
            var i = this.table.rowManager.findRow(e);
            i ? (this.table.rowManager.moveRowActual(this, i, !t), this.table.rowManager.refreshActiveData("display", !1, !0)) : console.warn("Move Error - No matching row found:", e);
        }
        delete() {
            return this.dispatch("row-delete", this), this.deleteActual(), Promise.resolve();
        }
        deleteActual(e) {
            this.detachModules(), this.table.rowManager.deleteRow(this, e), this.deleteCells(), this.initialized = !1, this.heightInitialized = !1, this.element = !1, this.dispatch("row-deleted", this);
        }
        detachModules() {
            this.dispatch("row-deleting", this);
        }
        deleteCells() {
            var e = this.cells.length;
            for(let t = 0; t < e; t++)this.cells[0].delete();
        }
        wipe() {
            if (this.detachModules(), this.deleteCells(), this.element) {
                for(; this.element.firstChild;)this.element.removeChild(this.element.firstChild);
                this.element.parentNode && this.element.parentNode.removeChild(this.element);
            }
            this.element = !1, this.modules = {};
        }
        isDisplayed() {
            return this.table.rowManager.getDisplayRows().includes(this);
        }
        getPosition() {
            return !!this.isDisplayed() && this.position;
        }
        setPosition(e) {
            e != this.position && (this.position = e, this.positionWatchers.forEach((e)=>{
                e(this.position);
            }));
        }
        watchPosition(e) {
            this.positionWatchers.push(e), e(this.position);
        }
        getGroup() {
            return this.modules.group || !1;
        }
        getComponent() {
            return this.component || (this.component = new u(this)), this.component;
        }
        constructor(e, t, i = "row"){
            super(t.table), this.parent = t, this.data = {}, this.type = i, this.element = !1, this.modules = {}, this.cells = [], this.height = 0, this.heightStyled = "", this.manualHeight = !1, this.outerHeight = 0, this.initialized = !1, this.heightInitialized = !1, this.position = 0, this.positionWatchers = [], this.component = null, this.created = !1, this.setData(e);
        }
    }
    class m extends l {
        clearRows() {
            for(var e = this.tableElement; e.firstChild;)e.removeChild(e.firstChild);
            e.scrollTop = 0, e.scrollLeft = 0, e.style.minWidth = "", e.style.minHeight = "", e.style.display = "", e.style.visibility = "";
        }
        renderRows() {
            var e = this.tableElement, t = !0;
            this.rows().forEach((i, s)=>{
                this.styleRow(i, s), e.appendChild(i.getElement()), i.initialize(!0), "group" !== i.type && (t = !1);
            }), e.style.minWidth = t ? this.table.columnManager.getWidth() + "px" : "";
        }
        rerenderRows(e) {
            this.clearRows(), this.renderRows(), e && e();
        }
        scrollToRowNearestTop(e) {
            var t = r.elOffset(e.getElement()).top;
            return !(Math.abs(this.elementVertical.scrollTop - t) > Math.abs(this.elementVertical.scrollTop + this.elementVertical.clientHeight - t));
        }
        scrollToRow(e) {
            var t = e.getElement();
            this.elementVertical.scrollTop = r.elOffset(t).top - r.elOffset(this.elementVertical).top + this.elementVertical.scrollTop;
        }
        visibleRows(e) {
            return this.rows();
        }
        constructor(e){
            super(e), this.verticalFillMode = "fill", this.scrollTop = 0, this.scrollLeft = 0, this.scrollTop = 0, this.scrollLeft = 0;
        }
    }
    class g extends l {
        clearRows() {
            for(var e = this.tableElement; e.firstChild;)e.removeChild(e.firstChild);
            e.style.paddingTop = "", e.style.paddingBottom = "", e.style.minHeight = "", e.style.display = "", e.style.visibility = "", this.elementVertical.scrollTop = 0, this.elementVertical.scrollLeft = 0, this.scrollTop = 0, this.scrollLeft = 0, this.vDomTop = 0, this.vDomBottom = 0, this.vDomTopPad = 0, this.vDomBottomPad = 0, this.vDomScrollPosTop = 0, this.vDomScrollPosBottom = 0;
        }
        renderRows() {
            this._virtualRenderFill();
        }
        rerenderRows(e) {
            for(var t = this.elementVertical.scrollTop, i = !1, s = !1, o = this.table.rowManager.scrollLeft, n = this.rows(), r = this.vDomTop; r <= this.vDomBottom; r++)if (n[r]) {
                var a = t - n[r].getElement().offsetTop;
                if (!(!1 === s || Math.abs(a) < s)) break;
                s = a, i = r;
            }
            n.forEach((e)=>{
                e.deinitializeHeight();
            }), e && e(), this.rows().length ? this._virtualRenderFill(!1 === i ? this.rows.length - 1 : i, !0, s || 0) : (this.clear(), this.table.rowManager._showPlaceholder()), this.scrollColumns(o);
        }
        scrollColumns(e) {
            this.table.rowManager.scrollHorizontal(e);
        }
        scrollRows(e, t) {
            var i = e - this.vDomScrollPosTop, s = e - this.vDomScrollPosBottom, o = 2 * this.vDomWindowBuffer, n = this.rows();
            if (this.scrollTop = e, -i > o || s > o) {
                var r = this.table.rowManager.scrollLeft;
                this._virtualRenderFill(Math.floor(this.elementVertical.scrollTop / this.elementVertical.scrollHeight * n.length)), this.scrollColumns(r);
            } else t ? (i < 0 && this._addTopRow(n, -i), s < 0 && (this.vDomScrollHeight - this.scrollTop > this.vDomWindowBuffer ? this._removeBottomRow(n, -s) : this.vDomScrollPosBottom = this.scrollTop)) : (s >= 0 && this._addBottomRow(n, s), i >= 0 && (this.scrollTop > this.vDomWindowBuffer ? this._removeTopRow(n, i) : this.vDomScrollPosTop = this.scrollTop));
        }
        resize() {
            this.vDomWindowBuffer = this.table.options.renderVerticalBuffer || this.elementVertical.clientHeight;
        }
        scrollToRowNearestTop(e) {
            var t = this.rows().indexOf(e);
            return !(Math.abs(this.vDomTop - t) > Math.abs(this.vDomBottom - t));
        }
        scrollToRow(e) {
            var t = this.rows().indexOf(e);
            t > -1 && this._virtualRenderFill(t, !0);
        }
        visibleRows(e) {
            var t = this.elementVertical.scrollTop, i = this.elementVertical.clientHeight + t, s = !1, o = 0, n = 0, r = this.rows();
            if (e) o = this.vDomTop, n = this.vDomBottom;
            else for(var a = this.vDomTop; a <= this.vDomBottom; a++)if (r[a]) {
                if (s) {
                    if (!(i - r[a].getElement().offsetTop >= 0)) break;
                    n = a;
                } else if (t - r[a].getElement().offsetTop >= 0) o = a;
                else {
                    if (s = !0, !(i - r[a].getElement().offsetTop >= 0)) break;
                    n = a;
                }
            }
            return r.slice(o, n + 1);
        }
        _virtualRenderFill(e, t, i) {
            var s = this.tableElement, o = this.elementVertical, n = 0, a = 0, l = 0, h = 0, d = 0, c = this.rows(), u = c.length, p = this.elementVertical.clientHeight;
            if (i = i || 0, e = e || 0) {
                for(; s.firstChild;)s.removeChild(s.firstChild);
                (l = (u - e + 1) * this.vDomRowHeight) < p && (e -= Math.ceil((p - l) / this.vDomRowHeight)) < 0 && (e = 0), e -= n = Math.min(Math.max(Math.floor(this.vDomWindowBuffer / this.vDomRowHeight), this.vDomWindowMinMarginRows), e);
            } else this.clear();
            if (u && r.elVisible(this.elementVertical)) {
                for(this.vDomTop = e, this.vDomBottom = e - 1; (a <= p + this.vDomWindowBuffer || d < this.vDomWindowMinTotalRows) && this.vDomBottom < u - 1;){
                    var m, g = this.vDomBottom + 1, b = c[g];
                    this.styleRow(b, g), s.appendChild(b.getElement()), b.initialize(), b.heightInitialized || b.normalizeHeight(!0), m = b.getHeight(), d < n ? h += m : a += m, m > this.vDomWindowBuffer && (this.vDomWindowBuffer = 2 * m), this.vDomBottom++, d++;
                }
                e ? (this.vDomTopPad = t ? this.vDomRowHeight * this.vDomTop + i : this.scrollTop - h, this.vDomBottomPad = this.vDomBottom == u - 1 ? 0 : Math.max(this.vDomScrollHeight - this.vDomTopPad - a - h, 0)) : (this.vDomTopPad = 0, this.vDomRowHeight = Math.floor((a + h) / d), this.vDomBottomPad = this.vDomRowHeight * (u - this.vDomBottom - 1), this.vDomScrollHeight = h + a + this.vDomBottomPad - p), s.style.paddingTop = this.vDomTopPad + "px", s.style.paddingBottom = this.vDomBottomPad + "px", t && (this.scrollTop = this.vDomTopPad + h + i - (this.elementVertical.scrollWidth > this.elementVertical.clientWidth ? this.elementVertical.offsetHeight - p : 0)), this.scrollTop = Math.min(this.scrollTop, this.elementVertical.scrollHeight - p), this.elementVertical.scrollWidth > this.elementVertical.offsetWidth && t && (this.scrollTop += this.elementVertical.offsetHeight - p), this.vDomScrollPosTop = this.scrollTop, this.vDomScrollPosBottom = this.scrollTop, o.scrollTop = this.scrollTop, this.dispatch("render-virtual-fill");
            }
        }
        _addTopRow(e, t) {
            for(var i = this.tableElement, s = [], o = 0, n = this.vDomTop - 1, r = 0, a = !0; a;)if (this.vDomTop) {
                let l, h, d = e[n];
                d && r < this.vDomMaxRenderChain ? (l = d.getHeight() || this.vDomRowHeight, h = d.initialized, t >= l ? (this.styleRow(d, n), i.insertBefore(d.getElement(), i.firstChild), d.initialized && d.heightInitialized || s.push(d), d.initialize(), h || (l = d.getElement().offsetHeight, l > this.vDomWindowBuffer && (this.vDomWindowBuffer = 2 * l)), t -= l, o += l, this.vDomTop--, n--, r++) : a = !1) : a = !1;
            } else a = !1;
            for (let e1 of s)e1.clearCellHeight();
            this._quickNormalizeRowHeight(s), o && (this.vDomTopPad -= o, this.vDomTopPad < 0 && (this.vDomTopPad = n * this.vDomRowHeight), n < 1 && (this.vDomTopPad = 0), i.style.paddingTop = this.vDomTopPad + "px", this.vDomScrollPosTop -= o);
        }
        _removeTopRow(e, t) {
            for(var i = [], s = 0, o = 0, n = !0; n;){
                let r, a = e[this.vDomTop];
                a && o < this.vDomMaxRenderChain ? (r = a.getHeight() || this.vDomRowHeight, t >= r ? (this.vDomTop++, t -= r, s += r, i.push(a), o++) : n = !1) : n = !1;
            }
            for (let e1 of i){
                let t1 = e1.getElement();
                t1.parentNode && t1.parentNode.removeChild(t1);
            }
            s && (this.vDomTopPad += s, this.tableElement.style.paddingTop = this.vDomTopPad + "px", this.vDomScrollPosTop += this.vDomTop ? s : s + this.vDomWindowBuffer);
        }
        _addBottomRow(e, t) {
            for(var i = this.tableElement, s = [], o = 0, n = this.vDomBottom + 1, r = 0, a = !0; a;){
                let l, h, d = e[n];
                d && r < this.vDomMaxRenderChain ? (l = d.getHeight() || this.vDomRowHeight, h = d.initialized, t >= l ? (this.styleRow(d, n), i.appendChild(d.getElement()), d.initialized && d.heightInitialized || s.push(d), d.initialize(), h || (l = d.getElement().offsetHeight, l > this.vDomWindowBuffer && (this.vDomWindowBuffer = 2 * l)), t -= l, o += l, this.vDomBottom++, n++, r++) : a = !1) : a = !1;
            }
            for (let e1 of s)e1.clearCellHeight();
            this._quickNormalizeRowHeight(s), o && (this.vDomBottomPad -= o, (this.vDomBottomPad < 0 || n == e.length - 1) && (this.vDomBottomPad = 0), i.style.paddingBottom = this.vDomBottomPad + "px", this.vDomScrollPosBottom += o);
        }
        _removeBottomRow(e, t) {
            for(var i = [], s = 0, o = 0, n = !0; n;){
                let r, a = e[this.vDomBottom];
                a && o < this.vDomMaxRenderChain ? (r = a.getHeight() || this.vDomRowHeight, t >= r ? (this.vDomBottom--, t -= r, s += r, i.push(a), o++) : n = !1) : n = !1;
            }
            for (let e1 of i){
                let t1 = e1.getElement();
                t1.parentNode && t1.parentNode.removeChild(t1);
            }
            s && (this.vDomBottomPad += s, this.vDomBottomPad < 0 && (this.vDomBottomPad = 0), this.tableElement.style.paddingBottom = this.vDomBottomPad + "px", this.vDomScrollPosBottom -= s);
        }
        _quickNormalizeRowHeight(e) {
            for (let t of e)t.calcHeight();
            for (let t1 of e)t1.setCellHeight();
        }
        constructor(e){
            super(e), this.verticalFillMode = "fill", this.scrollTop = 0, this.scrollLeft = 0, this.vDomRowHeight = 20, this.vDomTop = 0, this.vDomBottom = 0, this.vDomScrollPosTop = 0, this.vDomScrollPosBottom = 0, this.vDomTopPad = 0, this.vDomBottomPad = 0, this.vDomMaxRenderChain = 90, this.vDomWindowBuffer = 0, this.vDomWindowMinTotalRows = 20, this.vDomWindowMinMarginRows = 5, this.vDomTopNewRows = [], this.vDomBottomNewRows = [];
        }
    }
    class b extends e {
        createHolderElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-tableholder"), e.setAttribute("tabindex", 0), e;
        }
        createTableElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-table"), e.setAttribute("role", "rowgroup"), e;
        }
        initializePlaceholder() {
            if ("string" == typeof this.table.options.placeholder) {
                let e = document.createElement("div");
                e.classList.add("tabulator-placeholder");
                let t = document.createElement("div");
                t.classList.add("tabulator-placeholder-contents"), t.innerHTML = this.table.options.placeholder, e.appendChild(t), this.placeholderContents = t, this.placeholder = e;
            }
        }
        getElement() {
            return this.element;
        }
        getTableElement() {
            return this.tableElement;
        }
        initialize() {
            this.initializePlaceholder(), this.initializeRenderer(), this.element.appendChild(this.tableElement), this.firstRender = !0, this.element.addEventListener("scroll", ()=>{
                var e = this.element.scrollLeft, t = this.scrollLeft > e, i = this.element.scrollTop, s = this.scrollTop > i;
                this.scrollLeft != e && (this.scrollLeft = e, this.dispatch("scroll-horizontal", e, t), this.dispatchExternal("scrollHorizontal", e, t), this._positionPlaceholder()), this.scrollTop != i && (this.scrollTop = i, this.renderer.scrollRows(i, s), this.dispatch("scroll-vertical", i, s), this.dispatchExternal("scrollVertical", i, s));
            });
        }
        findRow(e) {
            if ("object" != typeof e) {
                if (void 0 === e) return !1;
                return this.rows.find((t)=>t.data[this.table.options.index] == e) || !1;
            }
            if (e instanceof p) return e;
            if (e instanceof u) return e._getSelf() || !1;
            if ("undefined" != typeof HTMLElement && e instanceof HTMLElement) return this.rows.find((t)=>t.getElement() === e) || !1;
            return !1;
        }
        getRowFromDataObject(e) {
            return this.rows.find((t)=>t.data === e) || !1;
        }
        getRowFromPosition(e) {
            return this.getDisplayRows().find((t)=>t.getPosition() === e && t.isDisplayed());
        }
        scrollToRow(e, t, i) {
            return this.renderer.scrollToRowPosition(e, t, i);
        }
        setData(e, t, i) {
            return new Promise((s, o)=>{
                t && this.getDisplayRows().length ? this.table.options.pagination ? this._setDataActual(e, !0) : this.reRenderInPosition(()=>{
                    this._setDataActual(e);
                }) : (this.table.options.autoColumns && i && this.table.initialized && this.table.columnManager.generateColumnsFromRowData(e), this.resetScroll(), this._setDataActual(e)), s();
            });
        }
        _setDataActual(e, t) {
            this.dispatchExternal("dataProcessing", e), this._wipeElements(), Array.isArray(e) ? (this.dispatch("data-processing", e), e.forEach((e, t)=>{
                if (e && "object" == typeof e) {
                    var i = new p(e, this);
                    this.rows.push(i);
                } else console.warn("Data Loading Warning - Invalid row data detected and ignored, expecting object but received:", e);
            }), this.refreshActiveData(!1, !1, t), this.dispatch("data-processed", e), this.dispatchExternal("dataProcessed", e)) : console.error("Data Loading Error - Unable to process data due to invalid data type \nExpecting: array \nReceived: ", typeof e, "\nData:     ", e);
        }
        _wipeElements() {
            this.dispatch("rows-wipe"), this.rows.forEach((e)=>{
                e.wipe();
            }), this.rows = [], this.activeRows = [], this.activeRowsPipeline = [], this.activeRowsCount = 0, this.displayRows = [], this.displayRowsCount = 0, this.adjustTableSize();
        }
        deleteRow(e, t) {
            var i = this.rows.indexOf(e), s = this.activeRows.indexOf(e);
            s > -1 && this.activeRows.splice(s, 1), i > -1 && this.rows.splice(i, 1), this.setActiveRows(this.activeRows), this.displayRowIterator((t)=>{
                var i = t.indexOf(e);
                i > -1 && t.splice(i, 1);
            }), t || this.reRenderInPosition(), this.regenerateRowPositions(), this.dispatchExternal("rowDeleted", e.getComponent()), this.displayRowsCount || this._showPlaceholder(), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.getData());
        }
        addRow(e, t, i, s) {
            return this.addRowActual(e, t, i, s);
        }
        addRows(e, t, i) {
            var s = [];
            return new Promise((o, n)=>{
                t = this.findAddRowPos(t), Array.isArray(e) || (e = [
                    e
                ]), (void 0 === i && t || void 0 !== i && !t) && e.reverse(), e.forEach((o, n)=>{
                    var r = this.addRow(o, t, i, !0);
                    s.push(r), this.dispatch("row-added", r, e, t, i);
                }), this.refreshActiveData(!1, !1, !0), this.regenerateRowPositions(), s.length && this._clearPlaceholder(), o(s);
            });
        }
        findAddRowPos(e) {
            return void 0 === e && (e = this.table.options.addRowPos), "pos" === e && (e = !0), "bottom" === e && (e = !1), e;
        }
        addRowActual(e, t, i, s) {
            var o, n, r = e instanceof p ? e : new p(e || {}, this), a = this.findAddRowPos(t), l = -1;
            return i || (n = this.chain("row-adding-position", [
                r,
                a
            ], null, {
                index: i,
                top: a
            }), i = n.index, a = n.top), void 0 !== i && (i = this.findRow(i)), (i = this.chain("row-adding-index", [
                r,
                i,
                a
            ], null, i)) && (l = this.rows.indexOf(i)), i && l > -1 ? (o = this.activeRows.indexOf(i), this.displayRowIterator(function(e) {
                var t = e.indexOf(i);
                t > -1 && e.splice(a ? t : t + 1, 0, r);
            }), o > -1 && this.activeRows.splice(a ? o : o + 1, 0, r), this.rows.splice(a ? l : l + 1, 0, r)) : a ? (this.displayRowIterator(function(e) {
                e.unshift(r);
            }), this.activeRows.unshift(r), this.rows.unshift(r)) : (this.displayRowIterator(function(e) {
                e.push(r);
            }), this.activeRows.push(r), this.rows.push(r)), this.setActiveRows(this.activeRows), this.dispatchExternal("rowAdded", r.getComponent()), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.table.rowManager.getData()), s || this.reRenderInPosition(), r;
        }
        moveRow(e, t, i) {
            this.dispatch("row-move", e, t, i), this.moveRowActual(e, t, i), this.regenerateRowPositions(), this.dispatch("row-moved", e, t, i), this.dispatchExternal("rowMoved", e.getComponent());
        }
        moveRowActual(e, t, i) {
            this.moveRowInArray(this.rows, e, t, i), this.moveRowInArray(this.activeRows, e, t, i), this.displayRowIterator((s)=>{
                this.moveRowInArray(s, e, t, i);
            }), this.dispatch("row-moving", e, t, i);
        }
        moveRowInArray(e, t, i, s) {
            var o, n, r;
            if (t !== i && ((o = e.indexOf(t)) > -1 && (e.splice(o, 1), (n = e.indexOf(i)) > -1 ? s ? e.splice(n + 1, 0, t) : e.splice(n, 0, t) : e.splice(o, 0, t)), e === this.getDisplayRows())) {
                r = n > o ? n : o + 1;
                for(let t1 = o < n ? o : n; t1 <= r; t1++)e[t1] && this.styleRow(e[t1], t1);
            }
        }
        clearData() {
            this.setData([]);
        }
        getRowIndex(e) {
            return this.findRowIndex(e, this.rows);
        }
        getDisplayRowIndex(e) {
            var t = this.getDisplayRows().indexOf(e);
            return t > -1 && t;
        }
        nextDisplayRow(e, t) {
            var i = this.getDisplayRowIndex(e), s = !1;
            return !1 !== i && i < this.displayRowsCount - 1 && (s = this.getDisplayRows()[i + 1]), !s || s instanceof p && "row" == s.type ? s : this.nextDisplayRow(s, t);
        }
        prevDisplayRow(e, t) {
            var i = this.getDisplayRowIndex(e), s = !1;
            return i && (s = this.getDisplayRows()[i - 1]), !t || !s || s instanceof p && "row" == s.type ? s : this.prevDisplayRow(s, t);
        }
        findRowIndex(e, t) {
            var i;
            return !!((e = this.findRow(e)) && (i = t.indexOf(e)) > -1) && i;
        }
        getData(e, t) {
            var i = [];
            return this.getRows(e).forEach(function(e) {
                "row" == e.type && i.push(e.getData(t || "data"));
            }), i;
        }
        getComponents(e) {
            var t = [];
            return this.getRows(e).forEach(function(e) {
                t.push(e.getComponent());
            }), t;
        }
        getDataCount(e) {
            return this.getRows(e).length;
        }
        scrollHorizontal(e) {
            this.scrollLeft = e, this.element.scrollLeft = e, this.dispatch("scroll-horizontal", e);
        }
        registerDataPipelineHandler(e, t) {
            void 0 !== t ? (this.dataPipeline.push({
                handler: e,
                priority: t
            }), this.dataPipeline.sort((e, t)=>e.priority - t.priority)) : console.error("Data pipeline handlers must have a priority in order to be registered");
        }
        registerDisplayPipelineHandler(e, t) {
            void 0 !== t ? (this.displayPipeline.push({
                handler: e,
                priority: t
            }), this.displayPipeline.sort((e, t)=>e.priority - t.priority)) : console.error("Display pipeline handlers must have a priority in order to be registered");
        }
        refreshActiveData(e, t, i) {
            var s = this.table, o = "", n = 0, a = [
                "all",
                "dataPipeline",
                "display",
                "displayPipeline",
                "end"
            ];
            if (!this.table.destroyed) {
                if ("function" == typeof e) {
                    if ((n = this.dataPipeline.findIndex((t)=>t.handler === e)) > -1) o = "dataPipeline", t && (n == this.dataPipeline.length - 1 ? o = "display" : n++);
                    else {
                        if (!((n = this.displayPipeline.findIndex((t)=>t.handler === e)) > -1)) return void console.error("Unable to refresh data, invalid handler provided", e);
                        o = "displayPipeline", t && (n == this.displayPipeline.length - 1 ? o = "end" : n++);
                    }
                } else o = e || "all", n = 0;
                if (this.redrawBlock) return void ((!this.redrawBlockRestoreConfig || this.redrawBlockRestoreConfig && (this.redrawBlockRestoreConfig.stage === o && n < this.redrawBlockRestoreConfig.index || a.indexOf(o) < a.indexOf(this.redrawBlockRestoreConfig.stage))) && (this.redrawBlockRestoreConfig = {
                    handler: e,
                    skipStage: t,
                    renderInPosition: i,
                    stage: o,
                    index: n
                }));
                r.elVisible(this.element) ? i ? this.reRenderInPosition(this.refreshPipelines.bind(this, e, o, n, i)) : (this.refreshPipelines(e, o, n, i), e || this.table.columnManager.renderer.renderColumns(), this.renderTable(), s.options.layoutColumnsOnNewData && this.table.columnManager.redraw(!0)) : this.refreshPipelines(e, o, n, i), this.dispatch("data-refreshed");
            }
        }
        refreshPipelines(e, t, i, s) {
            switch(this.dispatch("data-refreshing"), e || (this.activeRowsPipeline[0] = this.rows.slice(0)), t){
                case "all":
                case "dataPipeline":
                    for(let e1 = i; e1 < this.dataPipeline.length; e1++){
                        let t1 = this.dataPipeline[e1].handler(this.activeRowsPipeline[e1].slice(0));
                        this.activeRowsPipeline[e1 + 1] = t1 || this.activeRowsPipeline[e1].slice(0);
                    }
                    this.setActiveRows(this.activeRowsPipeline[this.dataPipeline.length]);
                case "display":
                    i = 0, this.resetDisplayRows();
                case "displayPipeline":
                    for(let e2 = i; e2 < this.displayPipeline.length; e2++){
                        let t2 = this.displayPipeline[e2].handler((e2 ? this.getDisplayRows(e2 - 1) : this.activeRows).slice(0), s);
                        this.setDisplayRows(t2 || this.getDisplayRows(e2 - 1).slice(0), e2);
                    }
                case "end":
                    this.regenerateRowPositions();
            }
            this.getDisplayRows().length && this._clearPlaceholder();
        }
        regenerateRowPositions() {
            var e = this.getDisplayRows(), t = 1;
            e.forEach((e)=>{
                "row" === e.type && (e.setPosition(t), t++);
            });
        }
        setActiveRows(e) {
            this.activeRows = e, this.activeRowsCount = this.activeRows.length;
        }
        resetDisplayRows() {
            this.displayRows = [], this.displayRows.push(this.activeRows.slice(0)), this.displayRowsCount = this.displayRows[0].length;
        }
        setDisplayRows(e, t) {
            this.displayRows[t] = e, t == this.displayRows.length - 1 && (this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length);
        }
        getDisplayRows(e) {
            return void 0 === e ? this.displayRows.length ? this.displayRows[this.displayRows.length - 1] : [] : this.displayRows[e] || [];
        }
        getVisibleRows(e, t) {
            var i = Object.assign([], this.renderer.visibleRows(!t));
            return e && (i = this.chain("rows-visible", [
                t
            ], i, i)), i;
        }
        displayRowIterator(e) {
            this.activeRowsPipeline.forEach(e), this.displayRows.forEach(e), this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length;
        }
        getRows(e) {
            var t = [];
            if (e && !0 !== e) switch(e){
                case "active":
                    t = this.activeRows;
                    break;
                case "display":
                    t = this.table.rowManager.getDisplayRows();
                    break;
                case "visible":
                    t = this.getVisibleRows(!1, !0);
            }
            else t = this.chain("rows-retrieve", e, null, this.rows) || this.rows;
            return t;
        }
        reRenderInPosition(e) {
            this.redrawBlock ? e ? e() : this.redrawBlockRenderInPosition = !0 : (this.dispatchExternal("renderStarted"), this.renderer.rerenderRows(e), this.fixedHeight || this.adjustTableSize(), this.scrollBarCheck(), this.dispatchExternal("renderComplete"));
        }
        scrollBarCheck() {
            var e = 0;
            this.element.scrollHeight > this.element.clientHeight && (e = this.element.offsetWidth - this.element.clientWidth), e !== this.scrollbarWidth && (this.scrollbarWidth = e, this.dispatch("scrollbar-vertical", e));
        }
        initializeRenderer() {
            var e, t = {
                virtual: g,
                basic: m
            };
            (e = "string" == typeof this.table.options.renderVertical ? t[this.table.options.renderVertical] : this.table.options.renderVertical) ? (this.renderMode = this.table.options.renderVertical, this.renderer = new e(this.table, this.element, this.tableElement), this.renderer.initialize(), this.table.element.clientHeight || this.table.options.height ? this.fixedHeight = !0 : this.fixedHeight = !1) : console.error("Unable to find matching renderer:", this.table.options.renderVertical);
        }
        getRenderMode() {
            return this.renderMode;
        }
        renderTable() {
            this.dispatchExternal("renderStarted"), this.element.scrollTop = 0, this._clearTable(), this.displayRowsCount ? (this.renderer.renderRows(), this.firstRender && (this.firstRender = !1, this.layoutRefresh(!0))) : this.renderEmptyScroll(), this.fixedHeight || this.adjustTableSize(), this.dispatch("table-layout"), this.displayRowsCount || this._showPlaceholder(), this.scrollBarCheck(), this.dispatchExternal("renderComplete");
        }
        renderEmptyScroll() {
            this.placeholder ? this.tableElement.style.display = "none" : this.tableElement.style.minWidth = this.table.columnManager.getWidth() + "px";
        }
        _clearTable() {
            this._clearPlaceholder(), this.scrollTop = 0, this.scrollLeft = 0, this.renderer.clearRows();
        }
        _showPlaceholder() {
            this.placeholder && (this.placeholder.setAttribute("tabulator-render-mode", this.renderMode), this.getElement().appendChild(this.placeholder), this._positionPlaceholder());
        }
        _clearPlaceholder() {
            this.placeholder && this.placeholder.parentNode && this.placeholder.parentNode.removeChild(this.placeholder), this.tableElement.style.minWidth = "";
        }
        _positionPlaceholder() {
            this.placeholder && this.placeholder.parentNode && (this.placeholder.style.width = this.table.columnManager.getWidth() + "px", this.placeholderContents.style.width = this.table.rowManager.element.clientWidth + "px", this.placeholderContents.style.marginLeft = this.scrollLeft + "px");
        }
        styleRow(e, t) {
            var i = e.getElement();
            t % 2 ? (i.classList.add("tabulator-row-even"), i.classList.remove("tabulator-row-odd")) : (i.classList.add("tabulator-row-odd"), i.classList.remove("tabulator-row-even"));
        }
        normalizeHeight() {
            this.activeRows.forEach(function(e) {
                e.normalizeHeight();
            });
        }
        adjustTableSize() {
            var e, t = this.element.clientHeight;
            if ("fill" === this.renderer.verticalFillMode) {
                let i = Math.floor(this.table.columnManager.getElement().getBoundingClientRect().height + (this.table.footerManager && this.table.footerManager.active && !this.table.footerManager.external ? this.table.footerManager.getElement().getBoundingClientRect().height : 0));
                this.fixedHeight ? (e = isNaN(this.table.options.minHeight) ? this.table.options.minHeight : this.table.options.minHeight + "px", this.element.style.minHeight = e || "calc(100% - " + i + "px)", this.element.style.height = "calc(100% - " + i + "px)", this.element.style.maxHeight = "calc(100% - " + i + "px)") : (this.element.style.height = "", this.element.style.height = this.table.element.clientHeight - i + "px", this.element.scrollTop = this.scrollTop), this.renderer.resize(), this.fixedHeight || t == this.element.clientHeight || (this.subscribed("table-resize") ? this.dispatch("table-resize") : this.redraw()), this.scrollBarCheck();
            }
            this._positionPlaceholder();
        }
        reinitialize() {
            this.rows.forEach(function(e) {
                e.reinitialize(!0);
            });
        }
        blockRedraw() {
            this.redrawBlock = !0, this.redrawBlockRestoreConfig = !1;
        }
        restoreRedraw() {
            this.redrawBlock = !1, this.redrawBlockRestoreConfig ? (this.refreshActiveData(this.redrawBlockRestoreConfig.handler, this.redrawBlockRestoreConfig.skipStage, this.redrawBlockRestoreConfig.renderInPosition), this.redrawBlockRestoreConfig = !1) : this.redrawBlockRenderInPosition && this.reRenderInPosition(), this.redrawBlockRenderInPosition = !1;
        }
        redraw(e) {
            var t = this.scrollLeft;
            this.adjustTableSize(), this.table.tableWidth = this.table.element.clientWidth, e ? this.renderTable() : (this.reRenderInPosition(), this.scrollHorizontal(t));
        }
        resetScroll() {
            if (this.element.scrollLeft = 0, this.element.scrollTop = 0, "ie" === this.table.browser) {
                var e = document.createEvent("Event");
                e.initEvent("scroll", !1, !0), this.element.dispatchEvent(e);
            } else this.element.dispatchEvent(new Event("scroll"));
        }
        constructor(e){
            super(e), this.element = this.createHolderElement(), this.tableElement = this.createTableElement(), this.heightFixer = this.createTableElement(), this.placeholder = null, this.placeholderContents = null, this.firstRender = !1, this.renderMode = "virtual", this.fixedHeight = !1, this.rows = [], this.activeRowsPipeline = [], this.activeRows = [], this.activeRowsCount = 0, this.displayRows = [], this.displayRowsCount = 0, this.scrollTop = 0, this.scrollLeft = 0, this.redrawBlock = !1, this.redrawBlockRestoreConfig = !1, this.redrawBlockRenderInPosition = !1, this.dataPipeline = [], this.displayPipeline = [], this.scrollbarWidth = 0, this.renderer = null;
        }
    }
    class f extends e {
        initialize() {
            this.initializeElement();
        }
        createElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-footer"), e;
        }
        createContainerElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-footer-contents"), this.element.appendChild(e), e;
        }
        initializeElement() {
            if (this.table.options.footerElement) {
                if ("string" == typeof this.table.options.footerElement) "<" === this.table.options.footerElement[0] ? this.containerElement.innerHTML = this.table.options.footerElement : (this.external = !0, this.containerElement = document.querySelector(this.table.options.footerElement));
                else this.element = this.table.options.footerElement;
            }
        }
        getElement() {
            return this.element;
        }
        append(e) {
            this.activate(), this.containerElement.appendChild(e), this.table.rowManager.adjustTableSize();
        }
        prepend(e) {
            this.activate(), this.element.insertBefore(e, this.element.firstChild), this.table.rowManager.adjustTableSize();
        }
        remove(e) {
            e.parentNode.removeChild(e), this.deactivate();
        }
        deactivate(e) {
            this.element.firstChild && !e || (this.external || this.element.parentNode.removeChild(this.element), this.active = !1);
        }
        activate() {
            this.active || (this.active = !0, this.external || (this.table.element.appendChild(this.getElement()), this.table.element.style.display = ""));
        }
        redraw() {
            this.dispatch("footer-redraw");
        }
        constructor(e){
            super(e), this.active = !1, this.element = this.createElement(), this.containerElement = this.createContainerElement(), this.external = !1;
        }
    }
    class v extends e {
        initialize() {
            this.el = this.table.element, this.buildListenerMap(), this.bindSubscriptionWatchers();
        }
        buildListenerMap() {
            var e = {};
            this.listeners.forEach((t)=>{
                e[t] = {
                    handler: null,
                    components: []
                };
            }), this.listeners = e;
        }
        bindPseudoEvents() {
            Object.keys(this.pseudoTrackers).forEach((e)=>{
                this.pseudoTrackers[e].subscriber = this.pseudoMouseEnter.bind(this, e), this.subscribe(e + "-mouseover", this.pseudoTrackers[e].subscriber);
            }), this.pseudoTracking = !0;
        }
        pseudoMouseEnter(e, t, i) {
            this.pseudoTrackers[e].target !== i && (this.pseudoTrackers[e].target && this.dispatch(e + "-mouseleave", t, this.pseudoTrackers[e].target), this.pseudoMouseLeave(e, t), this.pseudoTrackers[e].target = i, this.dispatch(e + "-mouseenter", t, i));
        }
        pseudoMouseLeave(e, t) {
            var i = Object.keys(this.pseudoTrackers), s = {
                row: [
                    "cell"
                ],
                cell: [
                    "row"
                ]
            };
            (i = i.filter((t)=>{
                var i = s[e];
                return t !== e && (!i || i && !i.includes(t));
            })).forEach((e)=>{
                var i = this.pseudoTrackers[e].target;
                this.pseudoTrackers[e].target && (this.dispatch(e + "-mouseleave", t, i), this.pseudoTrackers[e].target = null);
            });
        }
        bindSubscriptionWatchers() {
            var e = Object.keys(this.listeners), t = Object.values(this.componentMap);
            for (let i of t)for (let t1 of e){
                let e1 = i + "-" + t1;
                this.subscriptionChange(e1, this.subscriptionChanged.bind(this, i, t1));
            }
            this.subscribe("table-destroy", this.clearWatchers.bind(this));
        }
        subscriptionChanged(e, t, i) {
            var s = this.listeners[t].components, o = s.indexOf(e), n = !1;
            i ? -1 === o && (s.push(e), n = !0) : this.subscribed(e + "-" + t) || o > -1 && (s.splice(o, 1), n = !0), "mouseenter" !== t && "mouseleave" !== t || this.pseudoTracking || this.bindPseudoEvents(), n && this.updateEventListeners();
        }
        updateEventListeners() {
            for(let e in this.listeners){
                let t = this.listeners[e];
                t.components.length ? t.handler || (t.handler = this.track.bind(this, e), this.el.addEventListener(e, t.handler)) : t.handler && (this.el.removeEventListener(e, t.handler), t.handler = null);
            }
        }
        track(e, t) {
            var i = t.composedPath && t.composedPath() || t.path, s = this.findTargets(i);
            s = this.bindComponents(e, s), this.triggerEvents(e, t, s), !this.pseudoTracking || "mouseover" != e && "mouseleave" != e || Object.keys(s).length || this.pseudoMouseLeave("none", t);
        }
        findTargets(e) {
            var t = {};
            let i = Object.keys(this.componentMap);
            for (let s of e){
                let e1 = s.classList ? [
                    ...s.classList
                ] : [];
                if (e1.filter((e)=>this.abortClasses.includes(e)).length) break;
                let o = e1.filter((e)=>i.includes(e));
                for (let e2 of o)t[this.componentMap[e2]] || (t[this.componentMap[e2]] = s);
            }
            return t.group && t.group === t.row && delete t.row, t;
        }
        bindComponents(e, t) {
            var i = Object.keys(t).reverse(), s = this.listeners[e], o = {}, n = {};
            for (let e1 of i){
                let i1, r = t[e1], a = this.previousTargets[e1];
                if (a && a.target === r) i1 = a.component;
                else switch(e1){
                    case "row":
                    case "group":
                        if (s.components.includes("row") || s.components.includes("cell") || s.components.includes("group")) i1 = this.table.rowManager.getVisibleRows(!0).find((e)=>e.getElement() === r), t.row && t.row.parentNode && t.row.parentNode.closest(".tabulator-row") && (t[e1] = !1);
                        break;
                    case "column":
                        s.components.includes("column") && (i1 = this.table.columnManager.findColumn(r));
                        break;
                    case "cell":
                        s.components.includes("cell") && (o.row instanceof p ? i1 = o.row.findCell(r) : t.row && console.warn("Event Target Lookup Error - The row this cell is attached to cannot be found, has the table been reinitialized without being destroyed first?"));
                }
                i1 && (o[e1] = i1, n[e1] = {
                    target: r,
                    component: i1
                });
            }
            return this.previousTargets = n, o;
        }
        triggerEvents(e, t, i) {
            var s = this.listeners[e];
            for(let o in i)i[o] && s.components.includes(o) && this.dispatch(o + "-" + e, t, i[o]);
        }
        clearWatchers() {
            for(let e in this.listeners){
                let t = this.listeners[e];
                t.handler && (this.el.removeEventListener(e, t.handler), t.handler = null);
            }
        }
        constructor(e){
            super(e), this.el = null, this.abortClasses = [
                "tabulator-headers",
                "tabulator-table"
            ], this.previousTargets = {}, this.listeners = [
                "click",
                "dblclick",
                "contextmenu",
                "mouseenter",
                "mouseleave",
                "mouseover",
                "mouseout",
                "mousemove",
                "mouseup",
                "mousedown",
                "touchstart",
                "touchend"
            ], this.componentMap = {
                "tabulator-cell": "cell",
                "tabulator-row": "row",
                "tabulator-group": "group",
                "tabulator-col": "column"
            }, this.pseudoTrackers = {
                row: {
                    subscriber: null,
                    target: null
                },
                cell: {
                    subscriber: null,
                    target: null
                },
                group: {
                    subscriber: null,
                    target: null
                },
                column: {
                    subscriber: null,
                    target: null
                }
            }, this.pseudoTracking = !1;
        }
    }
    class w {
        bind(e, t, i) {
            this.bindings[e] || (this.bindings[e] = {}), this.bindings[e][t] ? console.warn("Unable to bind component handler, a matching function name is already bound", e, t, i) : this.bindings[e][t] = i;
        }
        handle(e, t, i) {
            if (this.bindings[e] && this.bindings[e][i] && "function" == typeof this.bindings[e][i].bind) return this.bindings[e][i].bind(null, t);
            "then" === i || "string" != typeof i || i.startsWith("_") || this.table.options.debugInvalidComponentFuncs && console.error("The " + e + " component does not have a " + i + " function, have you checked that you have the correct Tabulator module installed?");
        }
        constructor(e){
            this.table = e, this.bindings = {};
        }
    }
    class C extends e {
        initialize() {}
        load(e, t, i, s, o, n) {
            var r = ++this.requestOrder;
            return this.dispatchExternal("dataLoading", e), !e || 0 != e.indexOf("{") && 0 != e.indexOf("[") || (e = JSON.parse(e)), this.confirm("data-loading", [
                e,
                t,
                i,
                o
            ]) ? (this.loading = !0, o || this.alertLoader(), t = this.chain("data-params", [
                e,
                i,
                o
            ], t || {}, t || {}), t = this.mapParams(t, this.table.options.dataSendParams), this.chain("data-load", [
                e,
                t,
                i,
                o
            ], !1, Promise.resolve([])).then((e)=>{
                Array.isArray(e) || "object" != typeof e || (e = this.mapParams(e, this.objectInvert(this.table.options.dataReceiveParams)));
                var t = this.chain("data-loaded", e, null, e);
                r == this.requestOrder ? (this.clearAlert(), !1 !== t && (this.dispatchExternal("dataLoaded", t), this.table.rowManager.setData(t, s, void 0 === n ? !s : n))) : console.warn("Data Load Response Blocked - An active data load request was blocked by an attempt to change table data while the request was being made");
            }).catch((e)=>{
                console.error("Data Load Error: ", e), this.dispatchExternal("dataLoadError", e), o || this.alertError(), setTimeout(()=>{
                    this.clearAlert();
                }, this.table.options.dataLoaderErrorTimeout);
            }).finally(()=>{
                this.loading = !1;
            })) : (this.dispatchExternal("dataLoaded", e), e || (e = []), this.table.rowManager.setData(e, s, void 0 === n ? !s : n), Promise.resolve());
        }
        mapParams(e, t) {
            var i = {};
            for(let s in e)i[t.hasOwnProperty(s) ? t[s] : s] = e[s];
            return i;
        }
        objectInvert(e) {
            var t = {};
            for(let i in e)t[e[i]] = i;
            return t;
        }
        blockActiveLoad() {
            this.requestOrder++;
        }
        alertLoader() {
            ("function" == typeof this.table.options.dataLoader ? this.table.options.dataLoader() : this.table.options.dataLoader) && this.table.alertManager.alert(this.table.options.dataLoaderLoading || this.langText("data|loading"));
        }
        alertError() {
            this.table.alertManager.alert(this.table.options.dataLoaderError || this.langText("data|error"), "error");
        }
        clearAlert() {
            this.table.alertManager.clear();
        }
        constructor(e){
            super(e), this.requestOrder = 0, this.loading = !1;
        }
    }
    class E {
        subscriptionChange(e, t) {
            this.subscriptionNotifiers[e] || (this.subscriptionNotifiers[e] = []), this.subscriptionNotifiers[e].push(t), this.subscribed(e) && this._notifySubscriptionChange(e, !0);
        }
        subscribe(e, t) {
            this.events[e] || (this.events[e] = []), this.events[e].push(t), this._notifySubscriptionChange(e, !0);
        }
        unsubscribe(e, t) {
            var i;
            if (this.events[e]) {
                if (t) {
                    if (!((i = this.events[e].findIndex((e)=>e === t)) > -1)) return void console.warn("Cannot remove event, no matching event found:", e, t);
                    this.events[e].splice(i, 1);
                } else delete this.events[e];
                this._notifySubscriptionChange(e, !1);
            } else console.warn("Cannot remove event, no events set on:", e);
        }
        subscribed(e) {
            return this.events[e] && this.events[e].length;
        }
        _notifySubscriptionChange(e, t) {
            var i = this.subscriptionNotifiers[e];
            i && i.forEach((e)=>{
                e(t);
            });
        }
        _dispatch() {
            var e, t = Array.from(arguments), i = t.shift();
            return this.events[i] && this.events[i].forEach((i, s)=>{
                let o = i.apply(this.table, t);
                s || (e = o);
            }), e;
        }
        _debugDispatch() {
            var e = Array.from(arguments), t = e[0];
            return e[0] = "ExternalEvent:" + e[0], (!0 === this.debug || this.debug.includes(t)) && console.log(...e), this._dispatch(...arguments);
        }
        constructor(e, t, i){
            this.table = e, this.events = {}, this.optionsList = t || {}, this.subscriptionNotifiers = {}, this.dispatch = i ? this._debugDispatch.bind(this) : this._dispatch.bind(this), this.debug = i;
        }
    }
    class y {
        subscriptionChange(e, t) {
            this.subscriptionNotifiers[e] || (this.subscriptionNotifiers[e] = []), this.subscriptionNotifiers[e].push(t), this.subscribed(e) && this._notifySubscriptionChange(e, !0);
        }
        subscribe(e, t, i = 1e4) {
            this.events[e] || (this.events[e] = []), this.events[e].push({
                callback: t,
                priority: i
            }), this.events[e].sort((e, t)=>e.priority - t.priority), this._notifySubscriptionChange(e, !0);
        }
        unsubscribe(e, t) {
            var i;
            if (this.events[e]) {
                if (t) {
                    if (!((i = this.events[e].findIndex((e)=>e.callback === t)) > -1)) return void console.warn("Cannot remove event, no matching event found:", e, t);
                    this.events[e].splice(i, 1);
                }
                this._notifySubscriptionChange(e, !1);
            } else console.warn("Cannot remove event, no events set on:", e);
        }
        subscribed(e) {
            return this.events[e] && this.events[e].length;
        }
        _chain(e, t, i, s) {
            var o = i;
            return Array.isArray(t) || (t = [
                t
            ]), this.subscribed(e) ? (this.events[e].forEach((e, i)=>{
                o = e.callback.apply(this, t.concat([
                    o
                ]));
            }), o) : "function" == typeof s ? s() : s;
        }
        _confirm(e, t) {
            var i = !1;
            return Array.isArray(t) || (t = [
                t
            ]), this.subscribed(e) && this.events[e].forEach((e, s)=>{
                e.callback.apply(this, t) && (i = !0);
            }), i;
        }
        _notifySubscriptionChange(e, t) {
            var i = this.subscriptionNotifiers[e];
            i && i.forEach((e)=>{
                e(t);
            });
        }
        _dispatch() {
            var e = Array.from(arguments), t = e.shift();
            this.events[t] && this.events[t].forEach((t)=>{
                t.callback.apply(this, e);
            });
        }
        _debugDispatch() {
            var e = Array.from(arguments), t = e[0];
            return e[0] = "InternalEvent:" + t, (!0 === this.debug || this.debug.includes(t)) && console.log(...e), this._dispatch(...arguments);
        }
        _debugChain() {
            var e = Array.from(arguments), t = e[0];
            return e[0] = "InternalEvent:" + t, (!0 === this.debug || this.debug.includes(t)) && console.log(...e), this._chain(...arguments);
        }
        _debugConfirm() {
            var e = Array.from(arguments), t = e[0];
            return e[0] = "InternalEvent:" + t, (!0 === this.debug || this.debug.includes(t)) && console.log(...e), this._confirm(...arguments);
        }
        constructor(e){
            this.events = {}, this.subscriptionNotifiers = {}, this.dispatch = e ? this._debugDispatch.bind(this) : this._dispatch.bind(this), this.chain = e ? this._debugChain.bind(this) : this._chain.bind(this), this.confirm = e ? this._debugConfirm.bind(this) : this._confirm.bind(this), this.debug = e;
        }
    }
    class R extends e {
        _warnUser() {
            this.options("debugDeprecation") && console.warn(...arguments);
        }
        check(e, t) {
            var i = "";
            return void 0 === this.options(e) || (i = "Deprecated Setup Option - Use of the %c" + e + "%c option is now deprecated", t ? (i = i + ", Please use the %c" + t + "%c option instead", this._warnUser(i, "font-weight: bold;", "font-weight: normal;", "font-weight: bold;", "font-weight: normal;")) : this._warnUser(i, "font-weight: bold;", "font-weight: normal;"), !1);
        }
        checkMsg(e, t) {
            return void 0 === this.options(e) || (this._warnUser("%cDeprecated Setup Option - Use of the %c" + e + " %c option is now deprecated, " + t, "font-weight: normal;", "font-weight: bold;", "font-weight: normal;"), !1);
        }
        msg(e) {
            this._warnUser(e);
        }
        constructor(e){
            super(e);
        }
    }
    class x {
        static register(e) {
            x.tables.push(e);
        }
        static deregister(e) {
            var t = x.tables.indexOf(e);
            t > -1 && x.tables.splice(t, 1);
        }
        static lookupTable(e, t) {
            var i, s, o = [];
            if ("string" == typeof e) {
                if ((i = document.querySelectorAll(e)).length) for(var n = 0; n < i.length; n++)(s = x.matchElement(i[n])) && o.push(s);
            } else "undefined" != typeof HTMLElement && e instanceof HTMLElement || e instanceof O ? (s = x.matchElement(e)) && o.push(s) : Array.isArray(e) ? e.forEach(function(e) {
                o = o.concat(x.lookupTable(e));
            }) : t || console.warn("Table Connection Error - Invalid Selector", e);
            return o;
        }
        static matchElement(e) {
            return x.tables.find(function(t) {
                return e instanceof O ? t === e : t.element === e;
            });
        }
    }
    x.tables = [];
    class T extends e {
        tableDestroyed() {
            this.destroyed = !0, this.hide(!0);
        }
        _lookupContainer() {
            var e = this.table.options.popupContainer;
            return "string" == typeof e ? (e = document.querySelector(e)) || console.warn("Menu Error - no container element found matching selector:", this.table.options.popupContainer, "(defaulting to document body)") : !0 === e && (e = this.table.element), e && !this._checkContainerIsParent(e) && (e = !1, console.warn("Menu Error - container element does not contain this table:", this.table.options.popupContainer, "(defaulting to document body)")), e || (e = document.body), e;
        }
        _checkContainerIsParent(e, t = this.table.element) {
            return e === t || !!t.parentNode && this._checkContainerIsParent(e, t.parentNode);
        }
        renderCallback(e) {
            this.renderedCallback = e;
        }
        containerEventCoords(e) {
            var t = !(e instanceof MouseEvent), i = t ? e.touches[0].pageX : e.pageX, s = t ? e.touches[0].pageY : e.pageY;
            if (this.container !== document.body) {
                let e1 = r.elOffset(this.container);
                i -= e1.left, s -= e1.top;
            }
            return {
                x: i,
                y: s
            };
        }
        elementPositionCoords(e, t = "right") {
            var i, s, o, n = r.elOffset(e);
            switch(this.container !== document.body && (i = r.elOffset(this.container), n.left -= i.left, n.top -= i.top), t){
                case "right":
                    s = n.left + e.offsetWidth, o = n.top - 1;
                    break;
                case "bottom":
                    s = n.left, o = n.top + e.offsetHeight;
                    break;
                case "left":
                    s = n.left, o = n.top - 1;
                    break;
                case "top":
                    s = n.left, o = n.top;
                    break;
                case "center":
                    s = n.left + e.offsetWidth / 2, o = n.top + e.offsetHeight / 2;
            }
            return {
                x: s,
                y: o,
                offset: n
            };
        }
        show(e, t) {
            var i, s, o, n, r;
            return this.destroyed || this.table.destroyed || (e instanceof HTMLElement ? (o = e, n = (r = this.elementPositionCoords(e, t)).offset, i = r.x, s = r.y) : "number" == typeof e ? (n = {
                top: 0,
                left: 0
            }, i = e, s = t) : (i = (r = this.containerEventCoords(e)).x, s = r.y, this.reversedX = !1), this.element.style.top = s + "px", this.element.style.left = i + "px", this.container.appendChild(this.element), "function" == typeof this.renderedCallback && this.renderedCallback(), this._fitToScreen(i, s, o, n, t), this.visible = !0, this.subscribe("table-destroy", this.destroyBinding), this.element.addEventListener("mousedown", (e)=>{
                e.stopPropagation();
            })), this;
        }
        _fitToScreen(e, t, i, s, o) {
            var n = this.container === document.body ? document.documentElement.scrollTop : this.container.scrollTop;
            if ((e + this.element.offsetWidth >= this.container.offsetWidth || this.reversedX) && (this.element.style.left = "", this.element.style.right = i ? this.container.offsetWidth - s.left + "px" : this.container.offsetWidth - e + "px", this.reversedX = !0), t + this.element.offsetHeight > Math.max(this.container.offsetHeight, n ? this.container.scrollHeight : 0)) {
                if (i) {
                    if ("bottom" === o) this.element.style.top = parseInt(this.element.style.top) - this.element.offsetHeight - i.offsetHeight - 1 + "px";
                    else this.element.style.top = parseInt(this.element.style.top) - this.element.offsetHeight + i.offsetHeight + 1 + "px";
                } else this.element.style.top = parseInt(this.element.style.top) - this.element.offsetHeight + "px";
            }
        }
        isVisible() {
            return this.visible;
        }
        hideOnBlur(e) {
            return this.blurable = !0, this.visible && (setTimeout(()=>{
                this.visible && (this.table.rowManager.element.addEventListener("scroll", this.blurEvent), this.subscribe("cell-editing", this.blurEvent), document.body.addEventListener("click", this.blurEvent), document.body.addEventListener("contextmenu", this.blurEvent), document.body.addEventListener("mousedown", this.blurEvent), window.addEventListener("resize", this.blurEvent), document.body.addEventListener("keydown", this.escEvent), this.blurEventsBound = !0);
            }, 100), this.blurCallback = e), this;
        }
        _escapeCheck(e) {
            27 == e.keyCode && this.hide();
        }
        blockHide() {
            this.hideable = !1;
        }
        restoreHide() {
            this.hideable = !0;
        }
        hide(e = !1) {
            return this.visible && this.hideable && (this.blurable && this.blurEventsBound && (document.body.removeEventListener("keydown", this.escEvent), document.body.removeEventListener("click", this.blurEvent), document.body.removeEventListener("contextmenu", this.blurEvent), document.body.removeEventListener("mousedown", this.blurEvent), window.removeEventListener("resize", this.blurEvent), this.table.rowManager.element.removeEventListener("scroll", this.blurEvent), this.unsubscribe("cell-editing", this.blurEvent), this.blurEventsBound = !1), this.childPopup && this.childPopup.hide(), this.parent && (this.parent.childPopup = null), this.element.parentNode && this.element.parentNode.removeChild(this.element), this.visible = !1, this.blurCallback && !e && this.blurCallback(), this.unsubscribe("table-destroy", this.destroyBinding)), this;
        }
        child(e) {
            return this.childPopup && this.childPopup.hide(), this.childPopup = new T(this.table, e, this), this.childPopup;
        }
        constructor(e, t, i){
            super(e), this.element = t, this.container = this._lookupContainer(), this.parent = i, this.reversedX = !1, this.childPopup = null, this.blurable = !1, this.blurCallback = null, this.blurEventsBound = !1, this.renderedCallback = null, this.visible = !1, this.hideable = !0, this.element.classList.add("tabulator-popup-container"), this.blurEvent = this.hide.bind(this, !1), this.escEvent = this._escapeCheck.bind(this), this.destroyBinding = this.tableDestroyed, this.destroyed = !1;
        }
    }
    class k extends e {
        initialize() {}
        registerTableOption(e, t) {
            this.table.optionsList.register(e, t);
        }
        registerColumnOption(e, t) {
            this.table.columnManager.optionsList.register(e, t);
        }
        registerTableFunction(e, t) {
            void 0 === this.table[e] ? this.table[e] = (...i)=>(this.table.initGuard(e), t(...i)) : console.warn("Unable to bind table function, name already in use", e);
        }
        registerComponentFunction(e, t, i) {
            return this.table.componentFunctionBinder.bind(e, t, i);
        }
        registerDataHandler(e, t) {
            this.table.rowManager.registerDataPipelineHandler(e, t), this._handler = e;
        }
        registerDisplayHandler(e, t) {
            this.table.rowManager.registerDisplayPipelineHandler(e, t), this._handler = e;
        }
        displayRows(e) {
            var t, i = this.table.rowManager.displayRows.length - 1;
            if (this._handler && (t = this.table.rowManager.displayPipeline.findIndex((e)=>e.handler === this._handler)) > -1 && (i = t), e && (i += e), this._handler) return i > -1 ? this.table.rowManager.getDisplayRows(i) : this.activeRows();
        }
        activeRows() {
            return this.table.rowManager.activeRows;
        }
        refreshData(e, t) {
            t || (t = this._handler), t && this.table.rowManager.refreshActiveData(t, !1, e);
        }
        footerAppend(e) {
            return this.table.footerManager.append(e);
        }
        footerPrepend(e) {
            return this.table.footerManager.prepend(e);
        }
        footerRemove(e) {
            return this.table.footerManager.remove(e);
        }
        popup(e, t) {
            return new T(this.table, e, t);
        }
        alert(e, t) {
            return this.table.alertManager.alert(e, t);
        }
        clearAlert() {
            return this.table.alertManager.clear();
        }
        constructor(e, t){
            super(e), this._handler = null;
        }
    }
    function M(e, t) {
        e.forEach(function(e) {
            e.reinitializeWidth();
        }), this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update();
    }
    var L = {
        fitData: function(e, t) {
            t && this.table.columnManager.renderer.reinitializeColumnWidths(e), this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update();
        },
        fitDataFill: M,
        fitDataTable: M,
        fitDataStretch: function(e, t) {
            var i = 0, s = this.table.rowManager.element.clientWidth, o = 0, n = !1;
            e.forEach((e, t)=>{
                e.widthFixed || e.reinitializeWidth(), (this.table.options.responsiveLayout ? e.modules.responsive.visible : e.visible) && (n = e), e.visible && (i += e.getWidth());
            }), n ? (o = s - i + n.getWidth(), this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && (n.setWidth(0), this.table.modules.responsiveLayout.update()), o > 0 ? n.setWidth(o) : n.reinitializeWidth()) : this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update();
        },
        fitColumns: function(e, t) {
            var i, s, o = this.table.rowManager.element.getBoundingClientRect().width, n = 0, r = 0, a = 0, l = [], h = [], d = 0, c = 0;
            function u(e) {
                return "string" == typeof e ? e.indexOf("%") > -1 ? o / 100 * parseInt(e) : parseInt(e) : e;
            }
            function p(e, t, i, s) {
                var o = [], n = 0, r = 0, l = 0, h = a, d = 0, c = 0, m = [];
                function g(e) {
                    return i * (e.column.definition.widthGrow || 1);
                }
                function b(e) {
                    return u(e.width) - i * (e.column.definition.widthShrink || 0);
                }
                return e.forEach(function(e, n) {
                    var r = s ? b(e) : g(e);
                    e.column.minWidth >= r ? o.push(e) : e.column.maxWidth && e.column.maxWidth < r ? (e.width = e.column.maxWidth, t -= e.column.maxWidth, (h -= s ? e.column.definition.widthShrink || 1 : e.column.definition.widthGrow || 1) && (i = Math.floor(t / h))) : (m.push(e), c += s ? e.column.definition.widthShrink || 1 : e.column.definition.widthGrow || 1);
                }), o.length ? (o.forEach(function(e) {
                    n += s ? e.width - e.column.minWidth : e.column.minWidth, e.width = e.column.minWidth;
                }), r = t - n, l = c ? Math.floor(r / c) : r, d = p(m, r, l, s)) : (d = c ? t - Math.floor(t / c) * c : t, m.forEach(function(e) {
                    e.width = s ? b(e) : g(e);
                })), d;
            }
            this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update(), this.table.rowManager.element.scrollHeight > this.table.rowManager.element.clientHeight && (o -= this.table.rowManager.element.offsetWidth - this.table.rowManager.element.clientWidth), e.forEach(function(e) {
                var t, i, s;
                e.visible && (t = e.definition.width, i = parseInt(e.minWidth), t ? (s = u(t), n += s > i ? s : i, e.definition.widthShrink && (h.push({
                    column: e,
                    width: s > i ? s : i
                }), d += e.definition.widthShrink)) : (l.push({
                    column: e,
                    width: 0
                }), a += e.definition.widthGrow || 1));
            }), r = o - n, i = Math.floor(r / a), c = p(l, r, i, !1), l.length && c > 0 && (l[l.length - 1].width += c), l.forEach(function(e) {
                r -= e.width;
            }), (s = Math.abs(c) + r) > 0 && d && (c = p(h, s, Math.floor(s / d), !0)), c && h.length && (h[h.length - 1].width -= c), l.forEach(function(e) {
                e.column.setWidth(e.width);
            }), h.forEach(function(e) {
                e.column.setWidth(e.width);
            });
        }
    };
    class D extends k {
        initialize() {
            var e = this.table.options.layout;
            D.modes[e] ? this.mode = e : (console.warn("Layout Error - invalid mode set, defaulting to 'fitData' : " + e), this.mode = "fitData"), this.table.element.setAttribute("tabulator-layout", this.mode);
        }
        getMode() {
            return this.mode;
        }
        layout(e) {
            this.dispatch("layout-refreshing"), D.modes[this.mode].call(this, this.table.columnManager.columnsByIndex, e), this.dispatch("layout-refreshed");
        }
        constructor(e){
            super(e, "layout"), this.mode = null, this.registerTableOption("layout", "fitData"), this.registerTableOption("layoutColumnsOnNewData", !1), this.registerColumnOption("widthGrow"), this.registerColumnOption("widthShrink");
        }
    }
    D.moduleName = "layout", D.modes = L;
    class S extends k {
        initialize() {
            this.langList = r.deepClone(S.langs), !1 !== this.table.options.columnDefaults.headerFilterPlaceholder && this.setHeaderFilterPlaceholder(this.table.options.columnDefaults.headerFilterPlaceholder);
            for(let e in this.table.options.langs)this.installLang(e, this.table.options.langs[e]);
            this.setLocale(this.table.options.locale), this.registerTableFunction("setLocale", this.setLocale.bind(this)), this.registerTableFunction("getLocale", this.getLocale.bind(this)), this.registerTableFunction("getLang", this.getLang.bind(this));
        }
        setHeaderFilterPlaceholder(e) {
            this.langList.default.headerFilters.default = e;
        }
        setHeaderFilterColumnPlaceholder(e, t) {
            this.langList.default.headerFilters.columns[e] = t, this.lang && !this.lang.headerFilters.columns[e] && (this.lang.headerFilters.columns[e] = t);
        }
        installLang(e, t) {
            this.langList[e] ? this._setLangProp(this.langList[e], t) : this.langList[e] = t;
        }
        _setLangProp(e, t) {
            for(let i in t)e[i] && "object" == typeof e[i] ? this._setLangProp(e[i], t[i]) : e[i] = t[i];
        }
        setLocale(e) {
            if (!0 === (e = e || "default") && navigator.language && (e = navigator.language.toLowerCase()), e && !this.langList[e]) {
                let t = e.split("-")[0];
                this.langList[t] ? (console.warn("Localization Error - Exact matching locale not found, using closest match: ", e, t), e = t) : (console.warn("Localization Error - Matching locale not found, using default: ", e), e = "default");
            }
            this.locale = e, this.lang = r.deepClone(this.langList.default || {}), "default" != e && function e(t, i) {
                for(var s in t)"object" == typeof t[s] ? (i[s] || (i[s] = {}), e(t[s], i[s])) : i[s] = t[s];
            }(this.langList[e], this.lang), this.dispatchExternal("localized", this.locale, this.lang), this._executeBindings();
        }
        getLocale(e) {
            return this.locale;
        }
        getLang(e) {
            return e ? this.langList[e] : this.lang;
        }
        getText(e, t) {
            var i = (t ? e + "|" + t : e).split("|");
            return this._getLangElement(i, this.locale) || "";
        }
        _getLangElement(e, t) {
            var i = this.lang;
            return e.forEach(function(e) {
                var t;
                i && (t = i[e], i = void 0 !== t && t);
            }), i;
        }
        bind(e, t) {
            this.bindings[e] || (this.bindings[e] = []), this.bindings[e].push(t), t(this.getText(e), this.lang);
        }
        _executeBindings() {
            for(let e in this.bindings)this.bindings[e].forEach((t)=>{
                t(this.getText(e), this.lang);
            });
        }
        constructor(e){
            super(e), this.locale = "default", this.lang = !1, this.bindings = {}, this.langList = {}, this.registerTableOption("locale", !1), this.registerTableOption("langs", {});
        }
    }
    S.moduleName = "localize", S.langs = {
        default: {
            groups: {
                item: "item",
                items: "items"
            },
            columns: {},
            data: {
                loading: "Loading",
                error: "Error"
            },
            pagination: {
                page_size: "Page Size",
                page_title: "Show Page",
                first: "First",
                first_title: "First Page",
                last: "Last",
                last_title: "Last Page",
                prev: "Prev",
                prev_title: "Prev Page",
                next: "Next",
                next_title: "Next Page",
                all: "All",
                counter: {
                    showing: "Showing",
                    of: "of",
                    rows: "rows",
                    pages: "pages"
                }
            },
            headerFilters: {
                default: "filter column...",
                columns: {}
            }
        }
    };
    class P extends k {
        initialize() {
            this.registerTableFunction("tableComms", this.receive.bind(this));
        }
        getConnections(e) {
            var t = [];
            return x.lookupTable(e).forEach((e)=>{
                this.table !== e && t.push(e);
            }), t;
        }
        send(e, t, i, s) {
            var o = this.getConnections(e);
            o.forEach((e)=>{
                e.tableComms(this.table.element, t, i, s);
            }), !o.length && e && console.warn("Table Connection Error - No tables matching selector found", e);
        }
        receive(e, t, i, s) {
            if (this.table.modExists(t)) return this.table.modules[t].commsReceived(e, i, s);
            console.warn("Inter-table Comms Error - no such module:", t);
        }
        constructor(e){
            super(e);
        }
    }
    P.moduleName = "comms";
    var z = Object.freeze({
        __proto__: null,
        LayoutModule: D,
        LocalizeModule: S,
        CommsModule: P
    });
    class F {
        bindStaticFunctionality(e) {
            e.moduleBindings = {}, e.extendModule = function(t, i, s) {
                if (e.moduleBindings[t]) {
                    var o = e.moduleBindings[t][i];
                    if (o) {
                        if ("object" == typeof s) for(let e1 in s)o[e1] = s[e1];
                        else console.warn("Module Error - Invalid value type, it must be an object");
                    } else console.warn("Module Error - property does not exist:", i);
                } else console.warn("Module Error - module does not exist:", t);
            }, e.registerModule = function(t) {
                Array.isArray(t) || (t = [
                    t
                ]), t.forEach((t)=>{
                    e.registerModuleBinding(t);
                });
            }, e.registerModuleBinding = function(t) {
                e.moduleBindings[t.moduleName] = t;
            }, e.findTable = function(e) {
                var t = x.lookupTable(e, !0);
                return !(Array.isArray(t) && !t.length) && t;
            }, e.prototype.bindModules = function() {
                var t = [], i = [], s = [];
                for(var o in this.modules = {}, e.moduleBindings){
                    let n = e.moduleBindings[o], r = new n(this);
                    this.modules[o] = r, n.prototype.moduleCore ? this.modulesCore.push(r) : n.moduleInitOrder ? n.moduleInitOrder < 0 ? t.push(r) : i.push(r) : s.push(r);
                }
                t.sort((e, t)=>e.moduleInitOrder > t.moduleInitOrder ? 1 : -1), i.sort((e, t)=>e.moduleInitOrder > t.moduleInitOrder ? 1 : -1), this.modulesRegular = t.concat(s.concat(i));
            };
        }
        bindModules(e, t, i) {
            var s = Object.values(t);
            i && s.forEach((e)=>{
                e.prototype.moduleCore = !0;
            }), e.registerModule(s);
        }
        constructor(e, t){
            this.bindStaticFunctionality(e), this.bindModules(e, z, !0), t && this.bindModules(e, t);
        }
    }
    class H extends e {
        _createAlertElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-alert"), e;
        }
        _createMsgElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-alert-msg"), e.setAttribute("role", "alert"), e;
        }
        _typeClass() {
            return "tabulator-alert-state-" + this.type;
        }
        alert(e, t = "msg") {
            if (e) {
                for(this.clear(), this.type = t; this.msgElement.firstChild;)this.msgElement.removeChild(this.msgElement.firstChild);
                this.msgElement.classList.add(this._typeClass()), "function" == typeof e && (e = e()), e instanceof HTMLElement ? this.msgElement.appendChild(e) : this.msgElement.innerHTML = e, this.table.element.appendChild(this.element);
            }
        }
        clear() {
            this.element.parentNode && this.element.parentNode.removeChild(this.element), this.msgElement.classList.remove(this._typeClass());
        }
        constructor(e){
            super(e), this.element = this._createAlertElement(), this.msgElement = this._createMsgElement(), this.type = null, this.element.appendChild(this.msgElement);
        }
    }
    class O {
        initializeElement(e) {
            return "undefined" != typeof HTMLElement && e instanceof HTMLElement ? (this.element = e, !0) : "string" == typeof e ? (this.element = document.querySelector(e), !!this.element || (console.error("Tabulator Creation Error - no element found matching selector: ", e), !1)) : (console.error("Tabulator Creation Error - Invalid element provided:", e), !1);
        }
        initializeCoreSystems(e) {
            this.columnManager = new c(this), this.rowManager = new b(this), this.footerManager = new f(this), this.dataLoader = new C(this), this.alertManager = new H(this), this.bindModules(), this.options = this.optionsList.generate(O.defaultOptions, e), this._clearObjectPointers(), this._mapDeprecatedFunctionality(), this.externalEvents = new E(this, this.options, this.options.debugEventsExternal), this.eventBus = new y(this.options.debugEventsInternal), this.interactionMonitor = new v(this), this.dataLoader.initialize(), this.footerManager.initialize();
        }
        _mapDeprecatedFunctionality() {}
        _clearSelection() {
            this.element.classList.add("tabulator-block-select"), window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges() : document.selection && document.selection.empty(), this.element.classList.remove("tabulator-block-select");
        }
        _create() {
            this.externalEvents.dispatch("tableBuilding"), this.eventBus.dispatch("table-building"), this._rtlCheck(), this._buildElement(), this._initializeTable(), this._loadInitialData(), this.initialized = !0, this.externalEvents.dispatch("tableBuilt");
        }
        _rtlCheck() {
            var e = window.getComputedStyle(this.element);
            switch(this.options.textDirection){
                case "auto":
                    if ("rtl" !== e.direction) break;
                case "rtl":
                    this.element.classList.add("tabulator-rtl"), this.rtl = !0;
                    break;
                case "ltr":
                    this.element.classList.add("tabulator-ltr");
                default:
                    this.rtl = !1;
            }
        }
        _clearObjectPointers() {
            this.options.columns = this.options.columns.slice(0), Array.isArray(this.options.data) && !this.options.reactiveData && (this.options.data = this.options.data.slice(0));
        }
        _buildElement() {
            var e, t = this.element, i = this.options;
            if ("TABLE" === t.tagName) {
                this.originalElement = this.element, e = document.createElement("div");
                var s = t.attributes;
                for(var o in s)"object" == typeof s[o] && e.setAttribute(s[o].name, s[o].value);
                t.parentNode.replaceChild(e, t), this.element = t = e;
            }
            for(t.classList.add("tabulator"), t.setAttribute("role", "grid"); t.firstChild;)t.removeChild(t.firstChild);
            i.height && (i.height = isNaN(i.height) ? i.height : i.height + "px", t.style.height = i.height), !1 !== i.minHeight && (i.minHeight = isNaN(i.minHeight) ? i.minHeight : i.minHeight + "px", t.style.minHeight = i.minHeight), !1 !== i.maxHeight && (i.maxHeight = isNaN(i.maxHeight) ? i.maxHeight : i.maxHeight + "px", t.style.maxHeight = i.maxHeight);
        }
        _initializeTable() {
            var e = this.element, t = this.options;
            this.interactionMonitor.initialize(), this.columnManager.initialize(), this.rowManager.initialize(), this._detectBrowser(), this.modulesCore.forEach((e)=>{
                e.initialize();
            }), e.appendChild(this.columnManager.getElement()), e.appendChild(this.rowManager.getElement()), t.footerElement && this.footerManager.activate(), t.autoColumns && t.data && this.columnManager.generateColumnsFromRowData(this.options.data), this.modulesRegular.forEach((e)=>{
                e.initialize();
            }), this.columnManager.setColumns(t.columns), this.eventBus.dispatch("table-built");
        }
        _loadInitialData() {
            this.dataLoader.load(this.options.data);
        }
        destroy() {
            var e = this.element;
            for(this.destroyed = !0, x.deregister(this), this.eventBus.dispatch("table-destroy"), this.rowManager.rows.forEach(function(e) {
                e.wipe();
            }), this.rowManager.rows = [], this.rowManager.activeRows = [], this.rowManager.displayRows = []; e.firstChild;)e.removeChild(e.firstChild);
            e.classList.remove("tabulator"), this.externalEvents.dispatch("tableDestroyed");
        }
        _detectBrowser() {
            var e = navigator.userAgent || navigator.vendor || window.opera;
            e.indexOf("Trident") > -1 ? (this.browser = "ie", this.browserSlow = !0) : e.indexOf("Edge") > -1 ? (this.browser = "edge", this.browserSlow = !0) : e.indexOf("Firefox") > -1 ? (this.browser = "firefox", this.browserSlow = !1) : (this.browser = "other", this.browserSlow = !1), this.browserMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.slice(0, 4));
        }
        initGuard(e, t) {
            var i, s;
            return this.options.debugInitialization && !this.initialized && (e || (e = " " == (s = "Error" == (i = (new Error).stack.split("\n"))[0] ? i[2] : i[1])[0] ? s.trim().split(" ")[1].split(".")[1] : s.trim().split("@")[0]), console.warn("Table Not Initialized - Calling the " + e + " function before the table is initialized may result in inconsistent behavior, Please wait for the `tableBuilt` event before calling this function." + (t ? " " + t : ""))), this.initialized;
        }
        blockRedraw() {
            this.initGuard(), this.eventBus.dispatch("redraw-blocking"), this.rowManager.blockRedraw(), this.columnManager.blockRedraw(), this.eventBus.dispatch("redraw-blocked");
        }
        restoreRedraw() {
            this.initGuard(), this.eventBus.dispatch("redraw-restoring"), this.rowManager.restoreRedraw(), this.columnManager.restoreRedraw(), this.eventBus.dispatch("redraw-restored");
        }
        setData(e, t, i) {
            return this.initGuard(!1, "To set initial data please use the 'data' property in the table constructor."), this.dataLoader.load(e, t, i, !1);
        }
        clearData() {
            this.initGuard(), this.dataLoader.blockActiveLoad(), this.rowManager.clearData();
        }
        getData(e) {
            return this.rowManager.getData(e);
        }
        getDataCount(e) {
            return this.rowManager.getDataCount(e);
        }
        replaceData(e, t, i) {
            return this.initGuard(), this.dataLoader.load(e, t, i, !0, !0);
        }
        updateData(e) {
            var t = 0;
            return this.initGuard(), new Promise((i, s)=>{
                this.dataLoader.blockActiveLoad(), "string" == typeof e && (e = JSON.parse(e)), e && e.length > 0 ? e.forEach((e)=>{
                    var s = this.rowManager.findRow(e[this.options.index]);
                    s && (t++, s.updateData(e).then(()=>{
                        --t || i();
                    }));
                }) : (console.warn("Update Error - No data provided"), s("Update Error - No data provided"));
            });
        }
        addData(e, t, i) {
            return this.initGuard(), new Promise((s, o)=>{
                this.dataLoader.blockActiveLoad(), "string" == typeof e && (e = JSON.parse(e)), e ? this.rowManager.addRows(e, t, i).then((e)=>{
                    var t = [];
                    e.forEach(function(e) {
                        t.push(e.getComponent());
                    }), s(t);
                }) : (console.warn("Update Error - No data provided"), o("Update Error - No data provided"));
            });
        }
        updateOrAddData(e) {
            var t = [], i = 0;
            return this.initGuard(), new Promise((s, o)=>{
                this.dataLoader.blockActiveLoad(), "string" == typeof e && (e = JSON.parse(e)), e && e.length > 0 ? e.forEach((e)=>{
                    var o = this.rowManager.findRow(e[this.options.index]);
                    i++, o ? o.updateData(e).then(()=>{
                        i--, t.push(o.getComponent()), i || s(t);
                    }) : this.rowManager.addRows(e).then((e)=>{
                        i--, t.push(e[0].getComponent()), i || s(t);
                    });
                }) : (console.warn("Update Error - No data provided"), o("Update Error - No data provided"));
            });
        }
        getRow(e) {
            var t = this.rowManager.findRow(e);
            return t ? t.getComponent() : (console.warn("Find Error - No matching row found:", e), !1);
        }
        getRowFromPosition(e) {
            var t = this.rowManager.getRowFromPosition(e);
            return t ? t.getComponent() : (console.warn("Find Error - No matching row found:", e), !1);
        }
        deleteRow(e) {
            var t = [];
            this.initGuard(), Array.isArray(e) || (e = [
                e
            ]);
            for (let i of e){
                let e1 = this.rowManager.findRow(i, !0);
                if (!e1) return console.error("Delete Error - No matching row found:", i), Promise.reject("Delete Error - No matching row found");
                t.push(e1);
            }
            return t.sort((e, t)=>this.rowManager.rows.indexOf(e) > this.rowManager.rows.indexOf(t) ? 1 : -1), t.forEach((e)=>{
                e.delete();
            }), this.rowManager.reRenderInPosition(), Promise.resolve();
        }
        addRow(e, t, i) {
            return this.initGuard(), "string" == typeof e && (e = JSON.parse(e)), this.rowManager.addRows(e, t, i).then((e)=>e[0].getComponent());
        }
        updateOrAddRow(e, t) {
            var i = this.rowManager.findRow(e);
            return this.initGuard(), "string" == typeof t && (t = JSON.parse(t)), i ? i.updateData(t).then(()=>i.getComponent()) : this.rowManager.addRows(t).then((e)=>e[0].getComponent());
        }
        updateRow(e, t) {
            var i = this.rowManager.findRow(e);
            return this.initGuard(), "string" == typeof t && (t = JSON.parse(t)), i ? i.updateData(t).then(()=>Promise.resolve(i.getComponent())) : (console.warn("Update Error - No matching row found:", e), Promise.reject("Update Error - No matching row found"));
        }
        scrollToRow(e, t, i) {
            var s = this.rowManager.findRow(e);
            return s ? this.rowManager.scrollToRow(s, t, i) : (console.warn("Scroll Error - No matching row found:", e), Promise.reject("Scroll Error - No matching row found"));
        }
        moveRow(e, t, i) {
            var s = this.rowManager.findRow(e);
            this.initGuard(), s ? s.moveToRow(t, i) : console.warn("Move Error - No matching row found:", e);
        }
        getRows(e) {
            return this.rowManager.getComponents(e);
        }
        getRowPosition(e) {
            var t = this.rowManager.findRow(e);
            return t ? t.getPosition() : (console.warn("Position Error - No matching row found:", e), !1);
        }
        setColumns(e) {
            this.initGuard(!1, "To set initial columns please use the 'columns' property in the table constructor"), this.columnManager.setColumns(e);
        }
        getColumns(e) {
            return this.columnManager.getComponents(e);
        }
        getColumn(e) {
            var t = this.columnManager.findColumn(e);
            return t ? t.getComponent() : (console.warn("Find Error - No matching column found:", e), !1);
        }
        getColumnDefinitions() {
            return this.columnManager.getDefinitionTree();
        }
        showColumn(e) {
            var t = this.columnManager.findColumn(e);
            if (this.initGuard(), !t) return console.warn("Column Show Error - No matching column found:", e), !1;
            t.show();
        }
        hideColumn(e) {
            var t = this.columnManager.findColumn(e);
            if (this.initGuard(), !t) return console.warn("Column Hide Error - No matching column found:", e), !1;
            t.hide();
        }
        toggleColumn(e) {
            var t = this.columnManager.findColumn(e);
            if (this.initGuard(), !t) return console.warn("Column Visibility Toggle Error - No matching column found:", e), !1;
            t.visible ? t.hide() : t.show();
        }
        addColumn(e, t, i) {
            var s = this.columnManager.findColumn(i);
            return this.initGuard(), this.columnManager.addColumn(e, t, s).then((e)=>e.getComponent());
        }
        deleteColumn(e) {
            var t = this.columnManager.findColumn(e);
            return this.initGuard(), t ? t.delete() : (console.warn("Column Delete Error - No matching column found:", e), Promise.reject());
        }
        updateColumnDefinition(e, t) {
            var i = this.columnManager.findColumn(e);
            return this.initGuard(), i ? i.updateDefinition(t) : (console.warn("Column Update Error - No matching column found:", e), Promise.reject());
        }
        moveColumn(e, t, i) {
            var s = this.columnManager.findColumn(e), o = this.columnManager.findColumn(t);
            this.initGuard(), s ? o ? this.columnManager.moveColumn(s, o, i) : console.warn("Move Error - No matching column found:", o) : console.warn("Move Error - No matching column found:", e);
        }
        scrollToColumn(e, t, i) {
            return new Promise((s, o)=>{
                var n = this.columnManager.findColumn(e);
                return n ? this.columnManager.scrollToColumn(n, t, i) : (console.warn("Scroll Error - No matching column found:", e), Promise.reject("Scroll Error - No matching column found"));
            });
        }
        redraw(e) {
            this.initGuard(), this.columnManager.redraw(e), this.rowManager.redraw(e);
        }
        setHeight(e) {
            this.options.height = isNaN(e) ? e : e + "px", this.element.style.height = this.options.height, this.rowManager.initializeRenderer(), this.rowManager.redraw();
        }
        on(e, t) {
            this.externalEvents.subscribe(e, t);
        }
        off(e, t) {
            this.externalEvents.unsubscribe(e, t);
        }
        dispatchEvent() {
            Array.from(arguments).shift(), this.externalEvents.dispatch(...arguments);
        }
        alert(e, t) {
            this.initGuard(), this.alertManager.alert(e, t);
        }
        clearAlert() {
            this.initGuard(), this.alertManager.clear();
        }
        modExists(e, t) {
            return !!this.modules[e] || (t && console.error("Tabulator Module Not Installed: " + e), !1);
        }
        module(e) {
            var t = this.modules[e];
            return t || console.error("Tabulator module not installed: " + e), t;
        }
        constructor(e, t){
            this.options = {}, this.columnManager = null, this.rowManager = null, this.footerManager = null, this.alertManager = null, this.vdomHoz = null, this.externalEvents = null, this.eventBus = null, this.interactionMonitor = !1, this.browser = "", this.browserSlow = !1, this.browserMobile = !1, this.rtl = !1, this.originalElement = null, this.componentFunctionBinder = new w(this), this.dataLoader = !1, this.modules = {}, this.modulesCore = [], this.modulesRegular = [], this.deprecationAdvisor = new R(this), this.optionsList = new a(this, "table constructor"), this.initialized = !1, this.destroyed = !1, this.initializeElement(e) && (this.initializeCoreSystems(t), setTimeout(()=>{
                this._create();
            })), x.register(this);
        }
    }
    O.defaultOptions = {
        debugEventsExternal: !1,
        debugEventsInternal: !1,
        debugInvalidOptions: !0,
        debugInvalidComponentFuncs: !0,
        debugInitialization: !0,
        debugDeprecation: !0,
        height: !1,
        minHeight: !1,
        maxHeight: !1,
        columnHeaderVertAlign: "top",
        popupContainer: !1,
        columns: [],
        columnDefaults: {},
        data: !1,
        autoColumns: !1,
        autoColumnsDefinitions: !1,
        nestedFieldSeparator: ".",
        footerElement: !1,
        index: "id",
        textDirection: "auto",
        addRowPos: "bottom",
        headerVisible: !0,
        renderVertical: "virtual",
        renderHorizontal: "basic",
        renderVerticalBuffer: 0,
        scrollToRowPosition: "top",
        scrollToRowIfVisible: !0,
        scrollToColumnPosition: "left",
        scrollToColumnIfVisible: !0,
        rowFormatter: !1,
        rowFormatterPrint: null,
        rowFormatterClipboard: null,
        rowFormatterHtmlOutput: null,
        rowHeight: null,
        placeholder: !1,
        dataLoader: !0,
        dataLoaderLoading: !1,
        dataLoaderError: !1,
        dataLoaderErrorTimeout: 3e3,
        dataSendParams: {},
        dataReceiveParams: {}
    }, new F(O);
    class A extends k {
        initialize() {
            this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("row-data-retrieve", this.transformRow.bind(this));
        }
        initializeColumn(e) {
            var t = !1, i = {};
            this.allowedTypes.forEach((s)=>{
                var o, n = "accessor" + (s.charAt(0).toUpperCase() + s.slice(1));
                e.definition[n] && (o = this.lookupAccessor(e.definition[n])) && (t = !0, i[n] = {
                    accessor: o,
                    params: e.definition[n + "Params"] || {}
                });
            }), t && (e.modules.accessor = i);
        }
        lookupAccessor(e) {
            var t = !1;
            switch(typeof e){
                case "string":
                    A.accessors[e] ? t = A.accessors[e] : console.warn("Accessor Error - No such accessor found, ignoring: ", e);
                    break;
                case "function":
                    t = e;
            }
            return t;
        }
        transformRow(e, t) {
            var i = "accessor" + (t.charAt(0).toUpperCase() + t.slice(1)), s = e.getComponent(), o = r.deepClone(e.data || {});
            return this.table.columnManager.traverse(function(e) {
                var n, r, a, l;
                e.modules.accessor && (r = e.modules.accessor[i] || e.modules.accessor.accessor || !1) && "undefined" != (n = e.getFieldValue(o)) && (l = e.getComponent(), a = "function" == typeof r.params ? r.params(n, o, t, l, s) : r.params, e.setFieldValue(o, r.accessor(n, o, t, a, l, s)));
            }), o;
        }
        constructor(e){
            super(e), this.allowedTypes = [
                "",
                "data",
                "download",
                "clipboard",
                "print",
                "htmlOutput"
            ], this.registerColumnOption("accessor"), this.registerColumnOption("accessorParams"), this.registerColumnOption("accessorData"), this.registerColumnOption("accessorDataParams"), this.registerColumnOption("accessorDownload"), this.registerColumnOption("accessorDownloadParams"), this.registerColumnOption("accessorClipboard"), this.registerColumnOption("accessorClipboardParams"), this.registerColumnOption("accessorPrint"), this.registerColumnOption("accessorPrintParams"), this.registerColumnOption("accessorHtmlOutput"), this.registerColumnOption("accessorHtmlOutputParams");
        }
    }
    A.moduleName = "accessor", A.accessors = {};
    function _(e, t) {
        var i = [];
        if (t = t || "", Array.isArray(e)) e.forEach((e, s)=>{
            i = i.concat(_(e, t ? t + "[" + s + "]" : s));
        });
        else if ("object" == typeof e) for(var s in e)i = i.concat(_(e[s], t ? t + "[" + s + "]" : s));
        else i.push({
            key: t,
            value: e
        });
        return i;
    }
    function B(e) {
        var t = _(e), i = [];
        return t.forEach(function(e) {
            i.push(encodeURIComponent(e.key) + "=" + encodeURIComponent(e.value));
        }), i.join("&");
    }
    function V(e, t, i) {
        return e && i && Object.keys(i).length && (t.method && "get" != t.method.toLowerCase() || (t.method = "get", e += (e.includes("?") ? "&" : "?") + B(i))), e;
    }
    function I(e, t) {
        var i = [];
        if (t = t || "", Array.isArray(e)) e.forEach((e, s)=>{
            i = i.concat(I(e, t ? t + "[" + s + "]" : s));
        });
        else if ("object" == typeof e) for(var s in e)i = i.concat(I(e[s], t ? t + "[" + s + "]" : s));
        else i.push({
            key: t,
            value: e
        });
        return i;
    }
    var N = {
        json: {
            headers: {
                "Content-Type": "application/json"
            },
            body: function(e, t, i) {
                return JSON.stringify(i);
            }
        },
        form: {
            headers: {},
            body: function(e, t, i) {
                var s = I(i), o = new FormData;
                return s.forEach(function(e) {
                    o.append(e.key, e.value);
                }), o;
            }
        }
    };
    class W extends k {
        initialize() {
            this.loaderPromise = this.table.options.ajaxRequestFunc || W.defaultLoaderPromise, this.urlGenerator = this.table.options.ajaxURLGenerator || W.defaultURLGenerator, this.table.options.ajaxURL && this.setUrl(this.table.options.ajaxURL), this.setDefaultConfig(this.table.options.ajaxConfig), this.registerTableFunction("getAjaxUrl", this.getUrl.bind(this)), this.subscribe("data-loading", this.requestDataCheck.bind(this)), this.subscribe("data-params", this.requestParams.bind(this)), this.subscribe("data-load", this.requestData.bind(this));
        }
        requestParams(e, t, i, s) {
            var o = this.table.options.ajaxParams;
            return o && ("function" == typeof o && (o = o.call(this.table)), s = Object.assign(s, o)), s;
        }
        requestDataCheck(e, t, i, s) {
            return !((e || !this.url) && "string" != typeof e);
        }
        requestData(e, t, i, s, o) {
            var n;
            return !o && this.requestDataCheck(e) ? (e && this.setUrl(e), n = this.generateConfig(i), this.sendRequest(this.url, t, n)) : o;
        }
        setDefaultConfig(e = {}) {
            this.config = Object.assign({}, W.defaultConfig), "string" == typeof e ? this.config.method = e : Object.assign(this.config, e);
        }
        generateConfig(e = {}) {
            var t = Object.assign({}, this.config);
            return "string" == typeof e ? t.method = e : Object.assign(t, e), t;
        }
        setUrl(e) {
            this.url = e;
        }
        getUrl() {
            return this.url;
        }
        sendRequest(e, t, i) {
            return !1 !== this.table.options.ajaxRequesting.call(this.table, e, t) ? this.loaderPromise(e, i, t).then((i)=>(this.table.options.ajaxResponse && (i = this.table.options.ajaxResponse.call(this.table, e, t, i)), i)) : Promise.reject();
        }
        constructor(e){
            super(e), this.config = {}, this.url = "", this.urlGenerator = !1, this.params = !1, this.loaderPromise = !1, this.registerTableOption("ajaxURL", !1), this.registerTableOption("ajaxURLGenerator", !1), this.registerTableOption("ajaxParams", {}), this.registerTableOption("ajaxConfig", "get"), this.registerTableOption("ajaxContentType", "form"), this.registerTableOption("ajaxRequestFunc", !1), this.registerTableOption("ajaxRequesting", function() {}), this.registerTableOption("ajaxResponse", !1), this.contentTypeFormatters = W.contentTypeFormatters;
        }
    }
    W.moduleName = "ajax", W.defaultConfig = {
        method: "GET"
    }, W.defaultURLGenerator = V, W.defaultLoaderPromise = function(e, t, i) {
        var s;
        return new Promise((o, n)=>{
            if (e = this.urlGenerator.call(this.table, e, t, i), "GET" != t.method.toUpperCase()) {
                if (s = "object" == typeof this.table.options.ajaxContentType ? this.table.options.ajaxContentType : this.contentTypeFormatters[this.table.options.ajaxContentType]) {
                    for(var r in s.headers)t.headers || (t.headers = {}), void 0 === t.headers[r] && (t.headers[r] = s.headers[r]);
                    t.body = s.body.call(this, e, t, i);
                } else console.warn("Ajax Error - Invalid ajaxContentType value:", this.table.options.ajaxContentType);
            }
            e ? (void 0 === t.headers && (t.headers = {}), void 0 === t.headers.Accept && (t.headers.Accept = "application/json"), void 0 === t.headers["X-Requested-With"] && (t.headers["X-Requested-With"] = "XMLHttpRequest"), void 0 === t.mode && (t.mode = "cors"), "cors" == t.mode ? (void 0 === t.headers.Origin && (t.headers.Origin = window.location.origin), void 0 === t.credentials && (t.credentials = "same-origin")) : void 0 === t.credentials && (t.credentials = "include"), fetch(e, t).then((e)=>{
                e.ok ? e.json().then((e)=>{
                    o(e);
                }).catch((e)=>{
                    n(e), console.warn("Ajax Load Error - Invalid JSON returned", e);
                }) : (console.error("Ajax Load Error - Connection Error: " + e.status, e.statusText), n(e));
            }).catch((e)=>{
                console.error("Ajax Load Error - Connection Error: ", e), n(e);
            })) : (console.warn("Ajax Load Error - No URL Set"), o([]));
        });
    }, W.contentTypeFormatters = N;
    class j extends k {
        initialize() {
            this.mode = this.table.options.clipboard, this.rowRange = this.table.options.clipboardCopyRowRange, !0 !== this.mode && "copy" !== this.mode || this.table.element.addEventListener("copy", (e)=>{
                var t, i, s;
                this.blocked || (e.preventDefault(), this.customSelection ? (t = this.customSelection, this.table.options.clipboardCopyFormatter && (t = this.table.options.clipboardCopyFormatter("plain", t))) : (s = this.table.modules.export.generateExportList(this.table.options.clipboardCopyConfig, this.table.options.clipboardCopyStyled, this.rowRange, "clipboard"), t = (i = this.table.modules.export.generateHTMLTable(s)) ? this.generatePlainContent(s) : "", this.table.options.clipboardCopyFormatter && (t = this.table.options.clipboardCopyFormatter("plain", t), i = this.table.options.clipboardCopyFormatter("html", i))), window.clipboardData && window.clipboardData.setData ? window.clipboardData.setData("Text", t) : e.clipboardData && e.clipboardData.setData ? (e.clipboardData.setData("text/plain", t), i && e.clipboardData.setData("text/html", i)) : e.originalEvent && e.originalEvent.clipboardData.setData && (e.originalEvent.clipboardData.setData("text/plain", t), i && e.originalEvent.clipboardData.setData("text/html", i)), this.dispatchExternal("clipboardCopied", t, i), this.reset());
            }), !0 !== this.mode && "paste" !== this.mode || this.table.element.addEventListener("paste", (e)=>{
                this.paste(e);
            }), this.setPasteParser(this.table.options.clipboardPasteParser), this.setPasteAction(this.table.options.clipboardPasteAction), this.registerTableFunction("copyToClipboard", this.copy.bind(this));
        }
        reset() {
            this.blocked = !0, this.customSelection = !1;
        }
        generatePlainContent(e) {
            var t = [];
            return e.forEach((e)=>{
                var i = [];
                e.columns.forEach((t)=>{
                    var s = "";
                    if (t) {
                        if ("group" === e.type && (t.value = t.component.getKey()), null === t.value) s = "";
                        else switch(typeof t.value){
                            case "object":
                                s = JSON.stringify(t.value);
                                break;
                            case "undefined":
                                s = "";
                                break;
                            default:
                                s = t.value;
                        }
                    }
                    i.push(s);
                }), t.push(i.join("	"));
            }), t.join("\n");
        }
        copy(e, t) {
            var i, s;
            this.blocked = !1, this.customSelection = !1, !0 !== this.mode && "copy" !== this.mode || (this.rowRange = e || this.table.options.clipboardCopyRowRange, void 0 !== window.getSelection && void 0 !== document.createRange ? ((e = document.createRange()).selectNodeContents(this.table.element), (i = window.getSelection()).toString() && t && (this.customSelection = i.toString()), i.removeAllRanges(), i.addRange(e)) : void 0 !== document.selection && void 0 !== document.body.createTextRange && ((s = document.body.createTextRange()).moveToElementText(this.table.element), s.select()), document.execCommand("copy"), i && i.removeAllRanges());
        }
        setPasteAction(e) {
            switch(typeof e){
                case "string":
                    this.pasteAction = j.pasteActions[e], this.pasteAction || console.warn("Clipboard Error - No such paste action found:", e);
                    break;
                case "function":
                    this.pasteAction = e;
            }
        }
        setPasteParser(e) {
            switch(typeof e){
                case "string":
                    this.pasteParser = j.pasteParsers[e], this.pasteParser || console.warn("Clipboard Error - No such paste parser found:", e);
                    break;
                case "function":
                    this.pasteParser = e;
            }
        }
        paste(e) {
            var t, i, s;
            this.checkPaseOrigin(e) && (t = this.getPasteData(e), (i = this.pasteParser.call(this, t)) ? (e.preventDefault(), this.table.modExists("mutator") && (i = this.mutateData(i)), s = this.pasteAction.call(this, i), this.dispatchExternal("clipboardPasted", t, i, s)) : this.dispatchExternal("clipboardPasteError", t));
        }
        mutateData(e) {
            var t = [];
            return Array.isArray(e) ? e.forEach((e)=>{
                t.push(this.table.modules.mutator.transformRow(e, "clipboard"));
            }) : t = e, t;
        }
        checkPaseOrigin(e) {
            var t = !0;
            return ("DIV" != e.target.tagName || this.table.modules.edit.currentCell) && (t = !1), t;
        }
        getPasteData(e) {
            var t;
            return window.clipboardData && window.clipboardData.getData ? t = window.clipboardData.getData("Text") : e.clipboardData && e.clipboardData.getData ? t = e.clipboardData.getData("text/plain") : e.originalEvent && e.originalEvent.clipboardData.getData && (t = e.originalEvent.clipboardData.getData("text/plain")), t;
        }
        constructor(e){
            super(e), this.mode = !0, this.pasteParser = function() {}, this.pasteAction = function() {}, this.customSelection = !1, this.rowRange = !1, this.blocked = !0, this.registerTableOption("clipboard", !1), this.registerTableOption("clipboardCopyStyled", !0), this.registerTableOption("clipboardCopyConfig", !1), this.registerTableOption("clipboardCopyFormatter", !1), this.registerTableOption("clipboardCopyRowRange", "active"), this.registerTableOption("clipboardPasteParser", "table"), this.registerTableOption("clipboardPasteAction", "insert"), this.registerColumnOption("clipboard"), this.registerColumnOption("titleClipboard");
        }
    }
    j.moduleName = "clipboard", j.pasteActions = {
        replace: function(e) {
            return this.table.setData(e);
        },
        update: function(e) {
            return this.table.updateOrAddData(e);
        },
        insert: function(e) {
            return this.table.addData(e);
        }
    }, j.pasteParsers = {
        table: function(e) {
            var t = [], i = !0, s = this.table.columnManager.columns, o = [], n = [];
            return (e = e.split("\n")).forEach(function(e) {
                t.push(e.split("	"));
            }), !(!t.length || 1 === t.length && t[0].length < 2) && (t[0].forEach(function(e) {
                var t = s.find(function(t) {
                    return e && t.definition.title && e.trim() && t.definition.title.trim() === e.trim();
                });
                t ? o.push(t) : i = !1;
            }), i || (i = !0, o = [], t[0].forEach(function(e) {
                var t = s.find(function(t) {
                    return e && t.field && e.trim() && t.field.trim() === e.trim();
                });
                t ? o.push(t) : i = !1;
            }), i || (o = this.table.columnManager.columnsByIndex)), i && t.shift(), t.forEach(function(e) {
                var t = {};
                e.forEach(function(e, i) {
                    o[i] && (t[o[i].field] = e);
                }), n.push(t);
            }), n);
        }
    };
    class G {
        getData(e) {
            return this._row.getData(e);
        }
        getElement() {
            return this._row.getElement();
        }
        getTable() {
            return this._row.table;
        }
        getCells() {
            var e = [];
            return this._row.getCells().forEach(function(t) {
                e.push(t.getComponent());
            }), e;
        }
        getCell(e) {
            var t = this._row.getCell(e);
            return !!t && t.getComponent();
        }
        _getSelf() {
            return this._row;
        }
        constructor(e){
            return this._row = e, new Proxy(this, {
                get: function(e, t, i) {
                    return void 0 !== e[t] ? e[t] : e._row.table.componentFunctionBinder.handle("row", e._row, t);
                }
            });
        }
    }
    var U = {
        avg: function(e, t, i) {
            var s = 0, o = void 0 !== i.precision ? i.precision : 2;
            return e.length && (s = e.reduce(function(e, t) {
                return Number(e) + Number(t);
            }), s /= e.length, s = !1 !== o ? s.toFixed(o) : s), parseFloat(s).toString();
        },
        max: function(e, t, i) {
            var s = null, o = void 0 !== i.precision && i.precision;
            return e.forEach(function(e) {
                ((e = Number(e)) > s || null === s) && (s = e);
            }), null !== s ? !1 !== o ? s.toFixed(o) : s : "";
        },
        min: function(e, t, i) {
            var s = null, o = void 0 !== i.precision && i.precision;
            return e.forEach(function(e) {
                ((e = Number(e)) < s || null === s) && (s = e);
            }), null !== s ? !1 !== o ? s.toFixed(o) : s : "";
        },
        sum: function(e, t, i) {
            var s = 0, o = void 0 !== i.precision && i.precision;
            return e.length && e.forEach(function(e) {
                e = Number(e), s += isNaN(e) ? 0 : Number(e);
            }), !1 !== o ? s.toFixed(o) : s;
        },
        concat: function(e, t, i) {
            var s = 0;
            return e.length && (s = e.reduce(function(e, t) {
                return String(e) + String(t);
            })), s;
        },
        count: function(e, t, i) {
            var s = 0;
            return e.length && e.forEach(function(e) {
                e && s++;
            }), s;
        }
    };
    class X extends k {
        createElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-calcs-holder"), e;
        }
        initialize() {
            this.genColumn = new n({
                field: "value"
            }, this), this.subscribe("cell-value-changed", this.cellValueChanged.bind(this)), this.subscribe("column-init", this.initializeColumnCheck.bind(this)), this.subscribe("row-deleted", this.rowsUpdated.bind(this)), this.subscribe("scroll-horizontal", this.scrollHorizontal.bind(this)), this.subscribe("row-added", this.rowsUpdated.bind(this)), this.subscribe("column-moved", this.recalcActiveRows.bind(this)), this.subscribe("column-add", this.recalcActiveRows.bind(this)), this.subscribe("data-refreshed", this.recalcActiveRowsRefresh.bind(this)), this.subscribe("table-redraw", this.tableRedraw.bind(this)), this.subscribe("rows-visible", this.visibleRows.bind(this)), this.subscribe("scrollbar-vertical", this.adjustForScrollbar.bind(this)), this.subscribe("redraw-blocked", this.blockRedraw.bind(this)), this.subscribe("redraw-restored", this.restoreRedraw.bind(this)), this.registerTableFunction("getCalcResults", this.getResults.bind(this)), this.registerTableFunction("recalc", this.userRecalc.bind(this));
        }
        tableRedraw(e) {
            this.recalc(this.table.rowManager.activeRows), e && this.redraw();
        }
        blockRedraw() {
            this.blocked = !0, this.recalcAfterBlock = !1;
        }
        restoreRedraw() {
            this.blocked = !1, this.recalcAfterBlock && (this.recalcAfterBlock = !1, this.recalcActiveRowsRefresh());
        }
        userRecalc() {
            this.recalc(this.table.rowManager.activeRows);
        }
        blockCheck() {
            return this.blocked && (this.recalcAfterBlock = !0), this.blocked;
        }
        visibleRows(e, t) {
            return this.topRow && t.unshift(this.topRow), this.botRow && t.push(this.botRow), t;
        }
        rowsUpdated(e) {
            this.table.options.groupBy ? this.recalcRowGroup(e) : this.recalcActiveRows();
        }
        recalcActiveRowsRefresh() {
            this.table.options.groupBy && this.table.options.dataTreeStartExpanded && this.table.options.dataTree ? this.recalcAll() : this.recalcActiveRows();
        }
        recalcActiveRows() {
            this.recalc(this.table.rowManager.activeRows);
        }
        cellValueChanged(e) {
            (e.column.definition.topCalc || e.column.definition.bottomCalc) && (this.table.options.groupBy ? ("table" != this.table.options.columnCalcs && "both" != this.table.options.columnCalcs || this.recalcActiveRows(), "table" != this.table.options.columnCalcs && this.recalcRowGroup(e.row)) : this.recalcActiveRows());
        }
        initializeColumnCheck(e) {
            (e.definition.topCalc || e.definition.bottomCalc) && this.initializeColumn(e);
        }
        initializeColumn(e) {
            var t = e.definition, i = {
                topCalcParams: t.topCalcParams || {},
                botCalcParams: t.bottomCalcParams || {}
            };
            if (t.topCalc) {
                switch(typeof t.topCalc){
                    case "string":
                        X.calculations[t.topCalc] ? i.topCalc = X.calculations[t.topCalc] : console.warn("Column Calc Error - No such calculation found, ignoring: ", t.topCalc);
                        break;
                    case "function":
                        i.topCalc = t.topCalc;
                }
                i.topCalc && (e.modules.columnCalcs = i, this.topCalcs.push(e), "group" != this.table.options.columnCalcs && this.initializeTopRow());
            }
            if (t.bottomCalc) {
                switch(typeof t.bottomCalc){
                    case "string":
                        X.calculations[t.bottomCalc] ? i.botCalc = X.calculations[t.bottomCalc] : console.warn("Column Calc Error - No such calculation found, ignoring: ", t.bottomCalc);
                        break;
                    case "function":
                        i.botCalc = t.bottomCalc;
                }
                i.botCalc && (e.modules.columnCalcs = i, this.botCalcs.push(e), "group" != this.table.options.columnCalcs && this.initializeBottomRow());
            }
        }
        registerColumnField() {}
        removeCalcs() {
            var e = !1;
            this.topInitialized && (this.topInitialized = !1, this.topElement.parentNode.removeChild(this.topElement), e = !0), this.botInitialized && (this.botInitialized = !1, this.footerRemove(this.botElement), e = !0), e && this.table.rowManager.adjustTableSize();
        }
        initializeTopRow() {
            this.topInitialized || (this.table.columnManager.getContentsElement().insertBefore(this.topElement, this.table.columnManager.headersElement.nextSibling), this.topInitialized = !0);
        }
        initializeBottomRow() {
            this.botInitialized || (this.footerPrepend(this.botElement), this.botInitialized = !0);
        }
        scrollHorizontal(e) {
            this.botInitialized && this.botRow && (this.botElement.scrollLeft = e);
        }
        recalc(e) {
            var t, i;
            if (!this.blockCheck() && (this.topInitialized || this.botInitialized)) {
                if (t = this.rowsToData(e), this.topInitialized) {
                    for(this.topRow && this.topRow.deleteCells(), i = this.generateRow("top", t), this.topRow = i; this.topElement.firstChild;)this.topElement.removeChild(this.topElement.firstChild);
                    this.topElement.appendChild(i.getElement()), i.initialize(!0);
                }
                if (this.botInitialized) {
                    for(this.botRow && this.botRow.deleteCells(), i = this.generateRow("bottom", t), this.botRow = i; this.botElement.firstChild;)this.botElement.removeChild(this.botElement.firstChild);
                    this.botElement.appendChild(i.getElement()), i.initialize(!0);
                }
                this.table.rowManager.adjustTableSize(), this.table.modExists("frozenColumns") && this.table.modules.frozenColumns.layout();
            }
        }
        recalcRowGroup(e) {
            this.recalcGroup(this.table.modules.groupRows.getRowGroup(e));
        }
        recalcAll() {
            (this.topCalcs.length || this.botCalcs.length) && ("group" !== this.table.options.columnCalcs && this.recalcActiveRows(), this.table.options.groupBy && "table" !== this.table.options.columnCalcs && this.table.modules.groupRows.getChildGroups().forEach((e)=>{
                this.recalcGroup(e);
            }));
        }
        recalcGroup(e) {
            var t, i;
            this.blockCheck() || e && e.calcs && (e.calcs.bottom && (t = this.rowsToData(e.rows), i = this.generateRowData("bottom", t), e.calcs.bottom.updateData(i), e.calcs.bottom.reinitialize()), e.calcs.top && (t = this.rowsToData(e.rows), i = this.generateRowData("top", t), e.calcs.top.updateData(i), e.calcs.top.reinitialize()));
        }
        generateTopRow(e) {
            return this.generateRow("top", this.rowsToData(e));
        }
        generateBottomRow(e) {
            return this.generateRow("bottom", this.rowsToData(e));
        }
        rowsToData(e) {
            var t = [];
            return e.forEach((e)=>{
                if (t.push(e.getData()), this.table.options.dataTree && this.table.options.dataTreeChildColumnCalcs && e.modules.dataTree && e.modules.dataTree.open) {
                    var i = this.rowsToData(this.table.modules.dataTree.getFilteredTreeChildren(e));
                    t = t.concat(i);
                }
            }), t;
        }
        generateRow(e, t) {
            var i, s = this.generateRowData(e, t);
            return this.table.modExists("mutator") && this.table.modules.mutator.disable(), i = new p(s, this, "calc"), this.table.modExists("mutator") && this.table.modules.mutator.enable(), i.getElement().classList.add("tabulator-calcs", "tabulator-calcs-" + e), i.component = !1, i.getComponent = ()=>(i.component || (i.component = new G(i)), i.component), i.generateCells = ()=>{
                var t = [];
                this.table.columnManager.columnsByIndex.forEach((s)=>{
                    this.genColumn.setField(s.getField()), this.genColumn.hozAlign = s.hozAlign, s.definition[e + "CalcFormatter"] && this.table.modExists("format") ? this.genColumn.modules.format = {
                        formatter: this.table.modules.format.getFormatter(s.definition[e + "CalcFormatter"]),
                        params: s.definition[e + "CalcFormatterParams"] || {}
                    } : this.genColumn.modules.format = {
                        formatter: this.table.modules.format.getFormatter("plaintext"),
                        params: {}
                    }, this.genColumn.definition.cssClass = s.definition.cssClass;
                    var n = new o(this.genColumn, i);
                    n.getElement(), n.column = s, n.setWidth(), s.cells.push(n), t.push(n), s.visible || n.hide();
                }), i.cells = t;
            }, i;
        }
        generateRowData(e, t) {
            var i, s, o = {}, n = "top" == e ? this.topCalcs : this.botCalcs, r = "top" == e ? "topCalc" : "botCalc";
            return n.forEach(function(e) {
                var n = [];
                e.modules.columnCalcs && e.modules.columnCalcs[r] && (t.forEach(function(t) {
                    n.push(e.getFieldValue(t));
                }), s = r + "Params", i = "function" == typeof e.modules.columnCalcs[s] ? e.modules.columnCalcs[s](n, t) : e.modules.columnCalcs[s], e.setFieldValue(o, e.modules.columnCalcs[r](n, t, i)));
            }), o;
        }
        hasTopCalcs() {
            return !!this.topCalcs.length;
        }
        hasBottomCalcs() {
            return !!this.botCalcs.length;
        }
        redraw() {
            this.topRow && this.topRow.normalizeHeight(!0), this.botRow && this.botRow.normalizeHeight(!0);
        }
        getResults() {
            var e = {};
            return this.table.options.groupBy && this.table.modExists("groupRows") ? this.table.modules.groupRows.getGroups(!0).forEach((t)=>{
                e[t.getKey()] = this.getGroupResults(t);
            }) : e = {
                top: this.topRow ? this.topRow.getData() : {},
                bottom: this.botRow ? this.botRow.getData() : {}
            }, e;
        }
        getGroupResults(e) {
            var t = e._getSelf(), i = e.getSubGroups(), s = {};
            return i.forEach((e)=>{
                s[e.getKey()] = this.getGroupResults(e);
            }), {
                top: t.calcs.top ? t.calcs.top.getData() : {},
                bottom: t.calcs.bottom ? t.calcs.bottom.getData() : {},
                groups: s
            };
        }
        adjustForScrollbar(e) {
            this.botRow && (this.table.rtl ? this.botElement.style.paddingLeft = e + "px" : this.botElement.style.paddingRight = e + "px");
        }
        constructor(e){
            super(e), this.topCalcs = [], this.botCalcs = [], this.genColumn = !1, this.topElement = this.createElement(), this.botElement = this.createElement(), this.topRow = !1, this.botRow = !1, this.topInitialized = !1, this.botInitialized = !1, this.blocked = !1, this.recalcAfterBlock = !1, this.registerTableOption("columnCalcs", !0), this.registerColumnOption("topCalc"), this.registerColumnOption("topCalcParams"), this.registerColumnOption("topCalcFormatter"), this.registerColumnOption("topCalcFormatterParams"), this.registerColumnOption("bottomCalc"), this.registerColumnOption("bottomCalcParams"), this.registerColumnOption("bottomCalcFormatter"), this.registerColumnOption("bottomCalcFormatterParams");
        }
    }
    X.moduleName = "columnCalcs", X.calculations = U;
    class q extends k {
        initialize() {
            if (this.table.options.dataTree) {
                var e = null, t = this.table.options;
                switch(this.field = t.dataTreeChildField, this.indent = t.dataTreeChildIndent, this.options("movableRows") && console.warn("The movableRows option is not available with dataTree enabled, moving of child rows could result in unpredictable behavior"), t.dataTreeBranchElement && (!0 === t.dataTreeBranchElement ? (this.branchEl = document.createElement("div"), this.branchEl.classList.add("tabulator-data-tree-branch")) : "string" == typeof t.dataTreeBranchElement ? ((e = document.createElement("div")).innerHTML = t.dataTreeBranchElement, this.branchEl = e.firstChild) : this.branchEl = t.dataTreeBranchElement), t.dataTreeCollapseElement ? "string" == typeof t.dataTreeCollapseElement ? ((e = document.createElement("div")).innerHTML = t.dataTreeCollapseElement, this.collapseEl = e.firstChild) : this.collapseEl = t.dataTreeCollapseElement : (this.collapseEl = document.createElement("div"), this.collapseEl.classList.add("tabulator-data-tree-control"), this.collapseEl.tabIndex = 0, this.collapseEl.innerHTML = "<div class='tabulator-data-tree-control-collapse'></div>"), t.dataTreeExpandElement ? "string" == typeof t.dataTreeExpandElement ? ((e = document.createElement("div")).innerHTML = t.dataTreeExpandElement, this.expandEl = e.firstChild) : this.expandEl = t.dataTreeExpandElement : (this.expandEl = document.createElement("div"), this.expandEl.classList.add("tabulator-data-tree-control"), this.expandEl.tabIndex = 0, this.expandEl.innerHTML = "<div class='tabulator-data-tree-control-expand'></div>"), typeof t.dataTreeStartExpanded){
                    case "boolean":
                        this.startOpen = function(e, i) {
                            return t.dataTreeStartExpanded;
                        };
                        break;
                    case "function":
                        this.startOpen = t.dataTreeStartExpanded;
                        break;
                    default:
                        this.startOpen = function(e, i) {
                            return t.dataTreeStartExpanded[i];
                        };
                }
                this.subscribe("row-init", this.initializeRow.bind(this)), this.subscribe("row-layout-after", this.layoutRow.bind(this)), this.subscribe("row-deleted", this.rowDelete.bind(this), 0), this.subscribe("row-data-changed", this.rowDataChanged.bind(this), 10), this.subscribe("cell-value-updated", this.cellValueChanged.bind(this)), this.subscribe("edit-cancelled", this.cellValueChanged.bind(this)), this.subscribe("column-moving-rows", this.columnMoving.bind(this)), this.subscribe("table-built", this.initializeElementField.bind(this)), this.subscribe("table-redrawing", this.tableRedrawing.bind(this)), this.registerDisplayHandler(this.getRows.bind(this), 30);
            }
        }
        tableRedrawing(e) {
            e && this.table.rowManager.getRows().forEach((e)=>{
                this.reinitializeRowChildren(e);
            });
        }
        initializeElementField() {
            var e = this.table.columnManager.getFirstVisibleColumn();
            this.elementField = this.table.options.dataTreeElementColumn || !!e && e.field;
        }
        getRowChildren(e) {
            return this.getTreeChildren(e, !0);
        }
        columnMoving() {
            var e = [];
            return this.table.rowManager.rows.forEach((t)=>{
                e = e.concat(this.getTreeChildren(t, !1, !0));
            }), e;
        }
        rowDataChanged(e, t, i) {
            this.redrawNeeded(i) && (this.initializeRow(e), t && (this.layoutRow(e), this.refreshData(!0)));
        }
        cellValueChanged(e) {
            e.column.getField() === this.elementField && this.layoutRow(e.row);
        }
        initializeRow(e) {
            var t = e.getData()[this.field], i = Array.isArray(t), s = i || !i && "object" == typeof t && null !== t;
            !s && e.modules.dataTree && e.modules.dataTree.branchEl && e.modules.dataTree.branchEl.parentNode.removeChild(e.modules.dataTree.branchEl), !s && e.modules.dataTree && e.modules.dataTree.controlEl && e.modules.dataTree.controlEl.parentNode.removeChild(e.modules.dataTree.controlEl), e.modules.dataTree = {
                index: e.modules.dataTree ? e.modules.dataTree.index : 0,
                open: !!s && (e.modules.dataTree ? e.modules.dataTree.open : this.startOpen(e.getComponent(), 0)),
                controlEl: !(!e.modules.dataTree || !s) && e.modules.dataTree.controlEl,
                branchEl: !(!e.modules.dataTree || !s) && e.modules.dataTree.branchEl,
                parent: !!e.modules.dataTree && e.modules.dataTree.parent,
                children: s
            };
        }
        reinitializeRowChildren(e) {
            this.getTreeChildren(e, !1, !0).forEach(function(e) {
                e.reinitialize(!0);
            });
        }
        layoutRow(e) {
            var t = (this.elementField ? e.getCell(this.elementField) : e.getCells()[0]).getElement(), i = e.modules.dataTree;
            i.branchEl && (i.branchEl.parentNode && i.branchEl.parentNode.removeChild(i.branchEl), i.branchEl = !1), i.controlEl && (i.controlEl.parentNode && i.controlEl.parentNode.removeChild(i.controlEl), i.controlEl = !1), this.generateControlElement(e, t), e.getElement().classList.add("tabulator-tree-level-" + i.index), i.index && (this.branchEl ? (i.branchEl = this.branchEl.cloneNode(!0), t.insertBefore(i.branchEl, t.firstChild), this.table.rtl ? i.branchEl.style.marginRight = (i.branchEl.offsetWidth + i.branchEl.style.marginLeft) * (i.index - 1) + i.index * this.indent + "px" : i.branchEl.style.marginLeft = (i.branchEl.offsetWidth + i.branchEl.style.marginRight) * (i.index - 1) + i.index * this.indent + "px") : this.table.rtl ? t.style.paddingRight = parseInt(window.getComputedStyle(t, null).getPropertyValue("padding-right")) + i.index * this.indent + "px" : t.style.paddingLeft = parseInt(window.getComputedStyle(t, null).getPropertyValue("padding-left")) + i.index * this.indent + "px");
        }
        generateControlElement(e, t) {
            var i = e.modules.dataTree, s = i.controlEl;
            t = t || e.getCells()[0].getElement(), !1 !== i.children && (i.open ? (i.controlEl = this.collapseEl.cloneNode(!0), i.controlEl.addEventListener("click", (t)=>{
                t.stopPropagation(), this.collapseRow(e);
            })) : (i.controlEl = this.expandEl.cloneNode(!0), i.controlEl.addEventListener("click", (t)=>{
                t.stopPropagation(), this.expandRow(e);
            })), i.controlEl.addEventListener("mousedown", (e)=>{
                e.stopPropagation();
            }), s && s.parentNode === t ? s.parentNode.replaceChild(i.controlEl, s) : t.insertBefore(i.controlEl, t.firstChild));
        }
        getRows(e) {
            var t = [];
            return e.forEach((e, i)=>{
                var s;
                t.push(e), e instanceof p && (e.create(), (s = e.modules.dataTree.children).index || !1 === s.children || this.getChildren(e).forEach((e)=>{
                    e.create(), t.push(e);
                }));
            }), t;
        }
        getChildren(e, t) {
            var i = e.modules.dataTree, s = [], o = [];
            return !1 !== i.children && (i.open || t) && (Array.isArray(i.children) || (i.children = this.generateChildren(e)), s = this.table.modExists("filter") && this.table.options.dataTreeFilter ? this.table.modules.filter.filter(i.children) : i.children, this.table.modExists("sort") && this.table.options.dataTreeSort && this.table.modules.sort.sort(s), s.forEach((e)=>{
                o.push(e), this.getChildren(e).forEach((e)=>{
                    o.push(e);
                });
            })), o;
        }
        generateChildren(e) {
            var t = [], i = e.getData()[this.field];
            return Array.isArray(i) || (i = [
                i
            ]), i.forEach((i)=>{
                var s = new p(i || {}, this.table.rowManager);
                s.create(), s.modules.dataTree.index = e.modules.dataTree.index + 1, s.modules.dataTree.parent = e, s.modules.dataTree.children && (s.modules.dataTree.open = this.startOpen(s.getComponent(), s.modules.dataTree.index)), t.push(s);
            }), t;
        }
        expandRow(e, t) {
            var i = e.modules.dataTree;
            !1 !== i.children && (i.open = !0, e.reinitialize(), this.refreshData(!0), this.dispatchExternal("dataTreeRowExpanded", e.getComponent(), e.modules.dataTree.index));
        }
        collapseRow(e) {
            var t = e.modules.dataTree;
            !1 !== t.children && (t.open = !1, e.reinitialize(), this.refreshData(!0), this.dispatchExternal("dataTreeRowCollapsed", e.getComponent(), e.modules.dataTree.index));
        }
        toggleRow(e) {
            var t = e.modules.dataTree;
            !1 !== t.children && (t.open ? this.collapseRow(e) : this.expandRow(e));
        }
        isRowExpanded(e) {
            return e.modules.dataTree.open;
        }
        getTreeParent(e) {
            return !!e.modules.dataTree.parent && e.modules.dataTree.parent.getComponent();
        }
        getTreeParentRoot(e) {
            return e.modules.dataTree && e.modules.dataTree.parent ? this.getTreeParentRoot(e.modules.dataTree.parent) : e;
        }
        getFilteredTreeChildren(e) {
            var t = e.modules.dataTree, i = [];
            return t.children && (Array.isArray(t.children) || (t.children = this.generateChildren(e)), (this.table.modExists("filter") && this.table.options.dataTreeFilter ? this.table.modules.filter.filter(t.children) : t.children).forEach((e)=>{
                e instanceof p && i.push(e);
            })), i;
        }
        rowDelete(e) {
            var t, i = e.modules.dataTree.parent;
            i && (!1 !== (t = this.findChildIndex(e, i)) && i.data[this.field].splice(t, 1), i.data[this.field].length || delete i.data[this.field], this.initializeRow(i), this.layoutRow(i)), this.refreshData(!0);
        }
        addTreeChildRow(e, t, i, s) {
            var o = !1;
            "string" == typeof t && (t = JSON.parse(t)), Array.isArray(e.data[this.field]) || (e.data[this.field] = [], e.modules.dataTree.open = this.startOpen(e.getComponent(), e.modules.dataTree.index)), void 0 !== s && !1 !== (o = this.findChildIndex(s, e)) && e.data[this.field].splice(i ? o : o + 1, 0, t), !1 === o && (i ? e.data[this.field].unshift(t) : e.data[this.field].push(t)), this.initializeRow(e), this.layoutRow(e), this.refreshData(!0);
        }
        findChildIndex(e, t) {
            var i = !1;
            return "object" == typeof e ? e instanceof p ? i = e.data : e instanceof u ? i = e._getSelf().data : "undefined" != typeof HTMLElement && e instanceof HTMLElement ? t.modules.dataTree && (i = t.modules.dataTree.children.find((t)=>t instanceof p && t.element === e)) && (i = i.data) : null === e && (i = !1) : i = void 0 !== e && t.data[this.field].find((t)=>t.data[this.table.options.index] == e), i && (Array.isArray(t.data[this.field]) && (i = t.data[this.field].indexOf(i)), -1 == i && (i = !1)), i;
        }
        getTreeChildren(e, t, i) {
            var s = e.modules.dataTree, o = [];
            return s.children && (Array.isArray(s.children) || (s.children = this.generateChildren(e)), s.children.forEach((e)=>{
                e instanceof p && (o.push(t ? e.getComponent() : e), i && (o = o.concat(this.getTreeChildren(e, t, i))));
            })), o;
        }
        getChildField() {
            return this.field;
        }
        redrawNeeded(e) {
            return !!this.field && void 0 !== e[this.field] || !!this.elementField && void 0 !== e[this.elementField];
        }
        constructor(e){
            super(e), this.indent = 10, this.field = "", this.collapseEl = null, this.expandEl = null, this.branchEl = null, this.elementField = !1, this.startOpen = function() {}, this.registerTableOption("dataTree", !1), this.registerTableOption("dataTreeFilter", !0), this.registerTableOption("dataTreeSort", !0), this.registerTableOption("dataTreeElementColumn", !1), this.registerTableOption("dataTreeBranchElement", !0), this.registerTableOption("dataTreeChildIndent", 9), this.registerTableOption("dataTreeChildField", "_children"), this.registerTableOption("dataTreeCollapseElement", !1), this.registerTableOption("dataTreeExpandElement", !1), this.registerTableOption("dataTreeStartExpanded", !1), this.registerTableOption("dataTreeChildColumnCalcs", !1), this.registerTableOption("dataTreeSelectPropagate", !1), this.registerComponentFunction("row", "treeCollapse", this.collapseRow.bind(this)), this.registerComponentFunction("row", "treeExpand", this.expandRow.bind(this)), this.registerComponentFunction("row", "treeToggle", this.toggleRow.bind(this)), this.registerComponentFunction("row", "getTreeParent", this.getTreeParent.bind(this)), this.registerComponentFunction("row", "getTreeChildren", this.getRowChildren.bind(this)), this.registerComponentFunction("row", "addTreeChild", this.addTreeChildRow.bind(this)), this.registerComponentFunction("row", "isTreeExpanded", this.isRowExpanded.bind(this));
        }
    }
    q.moduleName = "dataTree";
    var K = {
        csv: function(e, t = {}, i) {
            var s = t.delimiter ? t.delimiter : ",", o = [], n = [];
            e.forEach((e)=>{
                var t = [];
                switch(e.type){
                    case "group":
                        console.warn("Download Warning - CSV downloader cannot process row groups");
                        break;
                    case "calc":
                        console.warn("Download Warning - CSV downloader cannot process column calculations");
                        break;
                    case "header":
                        e.columns.forEach((e, t)=>{
                            e && 1 === e.depth && (n[t] = void 0 === e.value || null === e.value ? "" : '"' + String(e.value).split('"').join('""') + '"');
                        });
                        break;
                    case "row":
                        e.columns.forEach((e)=>{
                            if (e) {
                                switch(typeof e.value){
                                    case "object":
                                        e.value = null !== e.value ? JSON.stringify(e.value) : "";
                                        break;
                                    case "undefined":
                                        e.value = "";
                                }
                                t.push('"' + String(e.value).split('"').join('""') + '"');
                            }
                        }), o.push(t.join(s));
                }
            }), n.length && o.unshift(n.join(s)), o = o.join("\n"), t.bom && (o = "\uFEFF" + o), i(o, "text/csv");
        },
        json: function(e, t, i) {
            var s = [];
            e.forEach((e)=>{
                var t = {};
                switch(e.type){
                    case "header":
                        break;
                    case "group":
                        console.warn("Download Warning - JSON downloader cannot process row groups");
                        break;
                    case "calc":
                        console.warn("Download Warning - JSON downloader cannot process column calculations");
                        break;
                    case "row":
                        e.columns.forEach((e)=>{
                            e && (t[e.component.getTitleDownload() || e.component.getField()] = e.value);
                        }), s.push(t);
                }
            }), i(s = JSON.stringify(s, null, "	"), "application/json");
        },
        jsonLines: function(e, t, i) {
            const s = [];
            e.forEach((e)=>{
                const t = {};
                switch(e.type){
                    case "header":
                        break;
                    case "group":
                        console.warn("Download Warning - JSON downloader cannot process row groups");
                        break;
                    case "calc":
                        console.warn("Download Warning - JSON downloader cannot process column calculations");
                        break;
                    case "row":
                        e.columns.forEach((e)=>{
                            e && (t[e.component.getTitleDownload() || e.component.getField()] = e.value);
                        }), s.push(JSON.stringify(t));
                }
            }), i(s.join("\n"), "application/x-ndjson");
        },
        pdf: function(e, t = {}, i) {
            var s = [], o = [], n = {}, r = t.rowGroupStyles || {
                fontStyle: "bold",
                fontSize: 12,
                cellPadding: 6,
                fillColor: 220
            }, a = t.rowCalcStyles || {
                fontStyle: "bold",
                fontSize: 10,
                cellPadding: 4,
                fillColor: 232
            }, l = t.jsPDF || {}, h = t.title ? t.title : "";
            function d(e, t) {
                var i = [];
                return e.columns.forEach((e)=>{
                    var s;
                    if (e) {
                        switch(typeof e.value){
                            case "object":
                                e.value = null !== e.value ? JSON.stringify(e.value) : "";
                                break;
                            case "undefined":
                                e.value = "";
                        }
                        s = {
                            content: e.value,
                            colSpan: e.width,
                            rowSpan: e.height
                        }, t && (s.styles = t), i.push(s);
                    }
                }), i;
            }
            l.orientation || (l.orientation = t.orientation || "landscape"), l.unit || (l.unit = "pt"), e.forEach((e)=>{
                switch(e.type){
                    case "header":
                        s.push(d(e));
                        break;
                    case "group":
                        o.push(d(e, r));
                        break;
                    case "calc":
                        o.push(d(e, a));
                        break;
                    case "row":
                        o.push(d(e));
                }
            });
            var c = new jspdf.jsPDF(l);
            t.autoTable && (n = "function" == typeof t.autoTable ? t.autoTable(c) || {} : t.autoTable), h && (n.didDrawPage = function(e) {
                c.text(h, 40, 30);
            }), n.head = s, n.body = o, c.autoTable(n), t.documentProcessing && t.documentProcessing(c), i(c.output("arraybuffer"), "application/pdf");
        },
        xlsx: function(t, i, s) {
            var o = i.sheetName || "Sheet1", n = XLSX.utils.book_new(), r = new e(this), a = !("compress" in i) || i.compress;
            function l() {
                var e = [], i = [], s = {}, o = {
                    s: {
                        c: 0,
                        r: 0
                    },
                    e: {
                        c: t[0] ? t[0].columns.reduce((e, t)=>e + (t && t.width ? t.width : 1), 0) : 0,
                        r: t.length
                    }
                };
                return t.forEach((t, s)=>{
                    var o = [];
                    t.columns.forEach(function(e, t) {
                        e ? (o.push(e.value instanceof Date || "object" != typeof e.value ? e.value : JSON.stringify(e.value)), (e.width > 1 || e.height > -1) && (e.height > 1 || e.width > 1) && i.push({
                            s: {
                                r: s,
                                c: t
                            },
                            e: {
                                r: s + e.height - 1,
                                c: t + e.width - 1
                            }
                        })) : o.push("");
                    }), e.push(o);
                }), XLSX.utils.sheet_add_aoa(s, e), s["!ref"] = XLSX.utils.encode_range(o), i.length && (s["!merges"] = i), s;
            }
            if (n.SheetNames = [], n.Sheets = {}, i.sheetOnly) s(l());
            else {
                if (i.sheets) for(var h in i.sheets)!0 === i.sheets[h] ? (n.SheetNames.push(h), n.Sheets[h] = l()) : (n.SheetNames.push(h), r.commsSend(i.sheets[h], "download", "intercept", {
                    type: "xlsx",
                    options: {
                        sheetOnly: !0
                    },
                    active: this.active,
                    intercept: function(e) {
                        n.Sheets[h] = e;
                    }
                }));
                else n.SheetNames.push(o), n.Sheets[o] = l();
                i.documentProcessing && (n = i.documentProcessing(n)), s(function(e) {
                    for(var t = new ArrayBuffer(e.length), i = new Uint8Array(t), s = 0; s != e.length; ++s)i[s] = 255 & e.charCodeAt(s);
                    return t;
                }(XLSX.write(n, {
                    bookType: "xlsx",
                    bookSST: !0,
                    type: "binary",
                    compression: a
                })), "application/octet-stream");
            }
        },
        html: function(e, t, i) {
            this.modExists("export", !0) && i(this.modules.export.generateHTMLTable(e), "text/html");
        }
    };
    class J extends k {
        initialize() {
            this.deprecatedOptionsCheck(), this.registerTableFunction("download", this.download.bind(this)), this.registerTableFunction("downloadToTab", this.downloadToTab.bind(this));
        }
        deprecatedOptionsCheck() {
            this.deprecationCheck("downloadReady", "downloadEncoder");
        }
        downloadToTab(e, t, i, s) {
            this.download(e, t, i, s, !0);
        }
        download(e, t, i, s, o) {
            var n = !1;
            if ("function" == typeof e ? n = e : J.downloaders[e] ? n = J.downloaders[e] : console.warn("Download Error - No such download type found: ", e), n) {
                var r = this.generateExportList(s);
                n.call(this.table, r, i || {}, (function(i, s) {
                    o ? !0 === o ? this.triggerDownload(i, s, e, t, !0) : o(i) : this.triggerDownload(i, s, e, t);
                }).bind(this));
            }
        }
        generateExportList(e) {
            var t = this.table.modules.export.generateExportList(this.table.options.downloadConfig, !1, e || this.table.options.downloadRowRange, "download"), i = this.table.options.groupHeaderDownload;
            return i && !Array.isArray(i) && (i = [
                i
            ]), t.forEach((e)=>{
                var t;
                "group" === e.type && (t = e.columns[0], i && i[e.indent] && (t.value = i[e.indent](t.value, e.component._group.getRowCount(), e.component._group.getData(), e.component)));
            }), t;
        }
        triggerDownload(e, t, i, s, o) {
            var n = document.createElement("a"), r = this.table.options.downloadEncoder(e, t);
            r && (o ? window.open(window.URL.createObjectURL(r)) : (s = s || "Tabulator." + ("function" == typeof i ? "txt" : i), navigator.msSaveOrOpenBlob ? navigator.msSaveOrOpenBlob(r, s) : (n.setAttribute("href", window.URL.createObjectURL(r)), n.setAttribute("download", s), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n))), this.dispatchExternal("downloadComplete"));
        }
        commsReceived(e, t, i) {
            if ("intercept" === t) this.download(i.type, "", i.options, i.active, i.intercept);
        }
        constructor(e){
            super(e), this.registerTableOption("downloadEncoder", function(e, t) {
                return new Blob([
                    e
                ], {
                    type: t
                });
            }), this.registerTableOption("downloadReady", void 0), this.registerTableOption("downloadConfig", {}), this.registerTableOption("downloadRowRange", "active"), this.registerColumnOption("download"), this.registerColumnOption("titleDownload");
        }
    }
    function Y(e, t) {
        var i = t.mask, s = void 0 !== t.maskLetterChar ? t.maskLetterChar : "A", o = void 0 !== t.maskNumberChar ? t.maskNumberChar : "9", n = void 0 !== t.maskWildcardChar ? t.maskWildcardChar : "*";
        function r(t) {
            var a = i[t];
            void 0 !== a && a !== n && a !== s && a !== o && (e.value = e.value + "" + a, r(t + 1));
        }
        e.addEventListener("keydown", (t)=>{
            var r = e.value.length, a = t.key;
            if (t.keyCode > 46) {
                if (r >= i.length) return t.preventDefault(), t.stopPropagation(), !1;
                switch(i[r]){
                    case s:
                        if (a.toUpperCase() == a.toLowerCase()) return t.preventDefault(), t.stopPropagation(), !1;
                        break;
                    case o:
                        if (isNaN(a)) return t.preventDefault(), t.stopPropagation(), !1;
                        break;
                    case n:
                        break;
                    default:
                        if (a !== i[r]) return t.preventDefault(), t.stopPropagation(), !1;
                }
            }
        }), e.addEventListener("keyup", (i)=>{
            i.keyCode > 46 && t.maskAutoFill && r(e.value.length);
        }), e.placeholder || (e.placeholder = i), t.maskAutoFill && r(e.value.length);
    }
    J.moduleName = "download", J.downloaders = K;
    class $ {
        _deprecatedOptionsCheck() {
            this.params.listItemFormatter && this.cell.getTable().deprecationAdvisor.msg("The listItemFormatter editor param has been deprecated, please see the latest editor documentation for updated options"), this.params.sortValuesList && this.cell.getTable().deprecationAdvisor.msg("The sortValuesList editor param has been deprecated, please see the latest editor documentation for updated options"), this.params.searchFunc && this.cell.getTable().deprecationAdvisor.msg("The searchFunc editor param has been deprecated, please see the latest editor documentation for updated options"), this.params.searchingPlaceholder && this.cell.getTable().deprecationAdvisor.msg("The searchingPlaceholder editor param has been deprecated, please see the latest editor documentation for updated options");
        }
        _initializeValue() {
            var e = this.cell.getValue();
            void 0 === e && void 0 !== this.params.defaultValue && (e = this.params.defaultValue), this.initialValues = this.params.multiselect ? e : [
                e
            ], this.isFilter && (this.input.value = this.initialValues ? this.initialValues.join(",") : "", this.headerFilterInitialListGen());
        }
        _onRendered() {
            var e = this.cell.getElement();
            function t(e) {
                e.stopPropagation();
            }
            this.input.style.height = "100%", this.input.focus({
                preventScroll: !0
            }), e.addEventListener("click", t), setTimeout(()=>{
                e.removeEventListener("click", t);
            }, 1e3), this.input.addEventListener("mousedown", this._preventPopupBlur.bind(this));
        }
        _createListElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-edit-list"), e.addEventListener("mousedown", this._preventBlur.bind(this)), e.addEventListener("keydown", this._inputKeyDown.bind(this)), e;
        }
        _setListWidth() {
            var e = this.isFilter ? this.input : this.cell.getElement();
            this.listEl.style.minWidth = e.offsetWidth + "px", this.params.maxWidth && (!0 === this.params.maxWidth ? this.listEl.style.maxWidth = e.offsetWidth + "px" : "number" == typeof this.params.maxWidth ? this.listEl.style.maxWidth = this.params.maxWidth + "px" : this.listEl.style.maxWidth = this.params.maxWidth);
        }
        _createInputElement() {
            var e = this.params.elementAttributes, t = document.createElement("input");
            if (t.setAttribute("type", this.params.clearable ? "search" : "text"), t.style.padding = "4px", t.style.width = "100%", t.style.boxSizing = "border-box", this.params.autocomplete || (t.style.cursor = "default", t.style.caretColor = "transparent"), e && "object" == typeof e) for(let i in e)"+" == i.charAt(0) ? (i = i.slice(1), t.setAttribute(i, t.getAttribute(i) + e["+" + i])) : t.setAttribute(i, e[i]);
            return this.params.mask && Y(t, this.params), this._bindInputEvents(t), t;
        }
        _initializeParams(e) {
            var t, i = [
                "values",
                "valuesURL",
                "valuesLookup"
            ];
            return (e = Object.assign({}, e)).verticalNavigation = e.verticalNavigation || "editor", e.placeholderLoading = void 0 === e.placeholderLoading ? "Searching ..." : e.placeholderLoading, e.placeholderEmpty = void 0 === e.placeholderEmpty ? "No Results Found" : e.placeholderEmpty, e.filterDelay = void 0 === e.filterDelay ? 300 : e.filterDelay, e.emptyValue = Object.keys(e).includes("emptyValue") ? e.emptyValue : "", (t = Object.keys(e).filter((e)=>i.includes(e)).length) ? t > 1 && console.warn("list editor config error - only one of the values, valuesURL, or valuesLookup options can be set on the same editor") : console.warn("list editor config error - either the values, valuesURL, or valuesLookup option must be set"), e.autocomplete ? e.multiselect && (e.multiselect = !1, console.warn("list editor config error - multiselect option is not available when autocomplete is enabled")) : (e.freetext && (e.freetext = !1, console.warn("list editor config error - freetext option is only available when autocomplete is enabled")), e.filterFunc && (e.filterFunc = !1, console.warn("list editor config error - filterFunc option is only available when autocomplete is enabled")), e.filterRemote && (e.filterRemote = !1, console.warn("list editor config error - filterRemote option is only available when autocomplete is enabled")), e.mask && (e.mask = !1, console.warn("list editor config error - mask option is only available when autocomplete is enabled")), e.allowEmpty && (e.allowEmpty = !1, console.warn("list editor config error - allowEmpty option is only available when autocomplete is enabled")), e.listOnEmpty && (e.listOnEmpty = !1, console.warn("list editor config error - listOnEmpty option is only available when autocomplete is enabled"))), e.filterRemote && "function" != typeof e.valuesLookup && !e.valuesURL && (e.filterRemote = !1, console.warn("list editor config error - filterRemote option should only be used when values list is populated from a remote source")), e;
        }
        _bindInputEvents(e) {
            e.addEventListener("focus", this._inputFocus.bind(this)), e.addEventListener("click", this._inputClick.bind(this)), e.addEventListener("blur", this._inputBlur.bind(this)), e.addEventListener("keydown", this._inputKeyDown.bind(this)), e.addEventListener("search", this._inputSearch.bind(this)), this.params.autocomplete && e.addEventListener("keyup", this._inputKeyUp.bind(this));
        }
        _inputFocus(e) {
            this.rebuildOptionsList();
        }
        _filter() {
            this.params.filterRemote ? (clearTimeout(this.filterTimeout), this.filterTimeout = setTimeout(()=>{
                this.rebuildOptionsList();
            }, this.params.filterDelay)) : this._filterList();
        }
        _inputClick(e) {
            e.stopPropagation();
        }
        _inputBlur(e) {
            this.blurable && (this.popup ? this.popup.hide() : this._resolveValue(!0));
        }
        _inputSearch() {
            this._clearChoices();
        }
        _inputKeyDown(e) {
            switch(e.keyCode){
                case 38:
                    this._keyUp(e);
                    break;
                case 40:
                    this._keyDown(e);
                    break;
                case 37:
                case 39:
                    this._keySide(e);
                    break;
                case 13:
                    this._keyEnter();
                    break;
                case 27:
                    this._keyEsc();
                    break;
                case 36:
                case 35:
                    this._keyHomeEnd(e);
                    break;
                case 9:
                    break;
                default:
                    this._keySelectLetter(e);
            }
        }
        _inputKeyUp(e) {
            switch(e.keyCode){
                case 38:
                case 37:
                case 39:
                case 40:
                case 13:
                case 27:
                    break;
                default:
                    this._keyAutoCompLetter(e);
            }
        }
        _preventPopupBlur() {
            this.popup && this.popup.blockHide(), setTimeout(()=>{
                this.popup && this.popup.restoreHide();
            }, 10);
        }
        _preventBlur() {
            this.blurable = !1, setTimeout(()=>{
                this.blurable = !0;
            }, 10);
        }
        _keyUp(e) {
            var t = this.displayItems.indexOf(this.focusedItem);
            ("editor" == this.params.verticalNavigation || "hybrid" == this.params.verticalNavigation && t) && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t > 0 && this._focusItem(this.displayItems[t - 1]));
        }
        _keyDown(e) {
            var t = this.displayItems.indexOf(this.focusedItem);
            ("editor" == this.params.verticalNavigation || "hybrid" == this.params.verticalNavigation && t < this.displayItems.length - 1) && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t < this.displayItems.length - 1 && (-1 == t ? this._focusItem(this.displayItems[0]) : this._focusItem(this.displayItems[t + 1])));
        }
        _keySide(e) {
            e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault();
        }
        _keyEnter(e) {
            this.params.autocomplete && "typing" === this.lastAction ? this._resolveValue(!0) : this.focusedItem && this._chooseItem(this.focusedItem);
        }
        _keyEsc(e) {
            this._cancel();
        }
        _keyHomeEnd(e) {
            this.params.autocomplete && e.stopImmediatePropagation();
        }
        _keySelectLetter(e) {
            this.params.autocomplete || (e.preventDefault(), e.keyCode >= 38 && e.keyCode <= 90 && this._scrollToValue(e.keyCode));
        }
        _keyAutoCompLetter(e) {
            this._filter(), this.lastAction = "typing", this.typing = !0;
        }
        _scrollToValue(e) {
            clearTimeout(this.filterTimeout);
            var t = String.fromCharCode(e).toLowerCase();
            this.filterTerm += t.toLowerCase();
            var i = this.displayItems.find((e)=>void 0 !== e.label && e.label.toLowerCase().startsWith(this.filterTerm));
            i && this._focusItem(i), this.filterTimeout = setTimeout(()=>{
                this.filterTerm = "";
            }, 800);
        }
        _focusItem(e) {
            this.lastAction = "focus", this.focusedItem && this.focusedItem.element && this.focusedItem.element.classList.remove("focused"), this.focusedItem = e, e && e.element && (e.element.classList.add("focused"), e.element.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            }));
        }
        headerFilterInitialListGen() {
            this._generateOptions(!0);
        }
        rebuildOptionsList() {
            this._generateOptions().then(this._sortOptions.bind(this)).then(this._buildList.bind(this)).then(this._showList.bind(this)).catch((e)=>{
                Number.isInteger(e) || console.error("List generation error", e);
            });
        }
        _filterList() {
            this._buildList(this._filterOptions()), this._showList();
        }
        _generateOptions(e) {
            var t = [], i = ++this.listIteration;
            return this.filtered = !1, this.params.values ? t = this.params.values : this.params.valuesURL ? t = this._ajaxRequest(this.params.valuesURL, this.input.value) : "function" == typeof this.params.valuesLookup ? t = this.params.valuesLookup(this.cell, this.input.value) : this.params.valuesLookup && (t = this._uniqueColumnValues(this.params.valuesLookupField)), t instanceof Promise ? (e || this._addPlaceholder(this.params.placeholderLoading), t.then().then((e)=>this.listIteration === i ? this._parseList(e) : Promise.reject(i))) : Promise.resolve(this._parseList(t));
        }
        _addPlaceholder(e) {
            var t = document.createElement("div");
            "function" == typeof e && (e = e(this.cell.getComponent(), this.listEl)), e && (this._clearList(), e instanceof HTMLElement ? t = e : (t.classList.add("tabulator-edit-list-placeholder"), t.innerHTML = e), this.listEl.appendChild(t), this._showList());
        }
        _ajaxRequest(e, t) {
            return e = V(e, {}, this.params.filterRemote ? {
                term: t
            } : {}), fetch(e).then((e)=>e.ok ? e.json().catch((e)=>(console.warn("List Ajax Load Error - Invalid JSON returned", e), Promise.reject(e))) : (console.error("List Ajax Load Error - Connection Error: " + e.status, e.statusText), Promise.reject(e))).catch((e)=>(console.error("List Ajax Load Error - Connection Error: ", e), Promise.reject(e)));
        }
        _uniqueColumnValues(e) {
            var t, i = {}, s = this.table.getData(this.params.valuesLookup);
            return (t = e ? this.table.columnManager.getColumnByField(e) : this.cell.getColumn()._getSelf()) ? s.forEach((e)=>{
                var s = t.getFieldValue(e);
                null != s && "" !== s && (i[s] = !0);
            }) : (console.warn("unable to find matching column to create select lookup list:", e), i = []), Object.keys(i);
        }
        _parseList(e) {
            var t = [];
            return Array.isArray(e) || (e = Object.entries(e).map(([e, t])=>({
                    label: t,
                    value: e
                }))), e.forEach((e)=>{
                "object" != typeof e && (e = {
                    label: e,
                    value: e
                }), this._parseListItem(e, t, 0);
            }), !this.currentItems.length && this.params.freetext && (this.input.value = this.initialValues, this.typing = !0, this.lastAction = "typing"), this.data = t, t;
        }
        _parseListItem(e, t, i) {
            var s = {};
            e.options ? s = this._parseListGroup(e, i + 1) : (s = {
                label: e.label,
                value: e.value,
                itemParams: e.itemParams,
                elementAttributes: e.elementAttributes,
                element: !1,
                selected: !1,
                visible: !0,
                level: i,
                original: e
            }, this.initialValues && this.initialValues.indexOf(e.value) > -1 && this._chooseItem(s, !0)), t.push(s);
        }
        _parseListGroup(e, t) {
            var i = {
                label: e.label,
                group: !0,
                itemParams: e.itemParams,
                elementAttributes: e.elementAttributes,
                element: !1,
                visible: !0,
                level: t,
                options: [],
                original: e
            };
            return e.options.forEach((e)=>{
                this._parseListItem(e, i.options, t);
            }), i;
        }
        _sortOptions(e) {
            var t;
            return this.params.sort && (t = "function" == typeof this.params.sort ? this.params.sort : this._defaultSortFunction.bind(this), this._sortGroup(t, e)), e;
        }
        _sortGroup(e, t) {
            t.sort((t, i)=>e(t.label, i.label, t.value, i.value, t.original, i.original)), t.forEach((t)=>{
                t.group && this._sortGroup(e, t.options);
            });
        }
        _defaultSortFunction(e, t) {
            var i, s, o, n, r, a = 0, l = /(\d+)|(\D+)/g, h = /\d/, d = 0;
            if ("desc" === this.params.sort && ([e, t] = [
                t,
                e
            ]), e || 0 === e) {
                if (t || 0 === t) {
                    if (isFinite(e) && isFinite(t)) return e - t;
                    if ((i = String(e).toLowerCase()) === (s = String(t).toLowerCase())) return 0;
                    if (!h.test(i) || !h.test(s)) return i > s ? 1 : -1;
                    for(i = i.match(l), s = s.match(l), r = i.length > s.length ? s.length : i.length; a < r;)if ((o = i[a]) !== (n = s[a++])) return isFinite(o) && isFinite(n) ? ("0" === o.charAt(0) && (o = "." + o), "0" === n.charAt(0) && (n = "." + n), o - n) : o > n ? 1 : -1;
                    return i.length > s.length;
                }
                d = 1;
            } else d = t || 0 === t ? -1 : 0;
            return d;
        }
        _filterOptions() {
            var e = this.params.filterFunc || this._defaultFilterFunc, t = this.input.value;
            return t ? (this.filtered = !0, this.data.forEach((i)=>{
                this._filterItem(e, t, i);
            })) : this.filtered = !1, this.data;
        }
        _filterItem(e, t, i) {
            var s = !1;
            return i.group ? (i.options.forEach((i)=>{
                this._filterItem(e, t, i) && (s = !0);
            }), i.visible = s) : i.visible = e(t, i.label, i.value, i.original), i.visible;
        }
        _defaultFilterFunc(e, t, i, s) {
            return e = String(e).toLowerCase(), null != t && (String(t).toLowerCase().indexOf(e) > -1 || String(i).toLowerCase().indexOf(e) > -1);
        }
        _clearList() {
            for(; this.listEl.firstChild;)this.listEl.removeChild(this.listEl.firstChild);
            this.displayItems = [];
        }
        _buildList(e) {
            this._clearList(), e.forEach((e)=>{
                this._buildItem(e);
            }), this.displayItems.length || this._addPlaceholder(this.params.placeholderEmpty);
        }
        _buildItem(e) {
            var t, i = e.element;
            if (!this.filtered || e.visible) {
                if (!i) {
                    if ((i = document.createElement("div")).tabIndex = 0, (t = this.params.itemFormatter ? this.params.itemFormatter(e.label, e.value, e.original, i) : e.label) instanceof HTMLElement ? i.appendChild(t) : i.innerHTML = t, e.group ? i.classList.add("tabulator-edit-list-group") : i.classList.add("tabulator-edit-list-item"), i.classList.add("tabulator-edit-list-group-level-" + e.level), e.elementAttributes && "object" == typeof e.elementAttributes) for(let t1 in e.elementAttributes)"+" == t1.charAt(0) ? (t1 = t1.slice(1), i.setAttribute(t1, this.input.getAttribute(t1) + e.elementAttributes["+" + t1])) : i.setAttribute(t1, e.elementAttributes[t1]);
                    e.group ? i.addEventListener("click", this._groupClick.bind(this, e)) : i.addEventListener("click", this._itemClick.bind(this, e)), i.addEventListener("mousedown", this._preventBlur.bind(this)), e.element = i;
                }
                this._styleItem(e), this.listEl.appendChild(i), e.group ? e.options.forEach((e)=>{
                    this._buildItem(e);
                }) : this.displayItems.push(e);
            }
        }
        _showList() {
            var e = this.popup && this.popup.isVisible();
            if (this.input.parentNode) {
                if (this.params.autocomplete && "" === this.input.value && !this.params.listOnEmpty) return void (this.popup && this.popup.hide(!0));
                this._setListWidth(), this.popup || (this.popup = this.edit.popup(this.listEl)), this.popup.show(this.cell.getElement(), "bottom"), e || setTimeout(()=>{
                    this.popup.hideOnBlur(this._resolveValue.bind(this, !0));
                }, 10);
            }
        }
        _styleItem(e) {
            e && e.element && (e.selected ? e.element.classList.add("active") : e.element.classList.remove("active"));
        }
        _itemClick(e, t) {
            t.stopPropagation(), this._chooseItem(e);
        }
        _groupClick(e, t) {
            t.stopPropagation();
        }
        _cancel() {
            this.popup.hide(!0), this.actions.cancel();
        }
        _clearChoices() {
            this.typing = !0, this.currentItems.forEach((e)=>{
                e.selected = !1, this._styleItem(e);
            }), this.currentItems = [], this.focusedItem = null;
        }
        _chooseItem(e, t) {
            var i;
            this.typing = !1, this.params.multiselect ? ((i = this.currentItems.indexOf(e)) > -1 ? (this.currentItems.splice(i, 1), e.selected = !1) : (this.currentItems.push(e), e.selected = !0), this.input.value = this.currentItems.map((e)=>e.label).join(","), this._styleItem(e)) : (this.currentItems = [
                e
            ], e.selected = !0, this.input.value = e.label, this._styleItem(e), t || this._resolveValue()), this._focusItem(e);
        }
        _resolveValue(e) {
            var t, i;
            if (this.popup && this.popup.hide(!0), this.params.multiselect) t = this.currentItems.map((e)=>e.value);
            else if (e && this.params.autocomplete && this.typing) {
                if (!(this.params.freetext || this.params.allowEmpty && "" === this.input.value)) return void this.actions.cancel();
                t = this.input.value;
            } else t = this.currentItems[0] ? this.currentItems[0].value : null == (i = this.initialValues[0]) || "" === i ? i : this.params.emptyValue;
            "" === t && (t = this.params.emptyValue), this.actions.success(t), this.isFilter && (this.initialValues = t && !Array.isArray(t) ? [
                t
            ] : t, this.currentItems = []);
        }
        constructor(e, t, i, s, o, n){
            this.edit = e, this.table = e.table, this.cell = t, this.params = this._initializeParams(n), this.data = [], this.displayItems = [], this.currentItems = [], this.focusedItem = null, this.input = this._createInputElement(), this.listEl = this._createListElement(), this.initialValues = null, this.isFilter = !t._getSelf, this.filterTimeout = null, this.filtered = !1, this.typing = !1, this.values = [], this.popup = null, this.listIteration = 0, this.lastAction = "", this.filterTerm = "", this.blurable = !0, this.actions = {
                success: s,
                cancel: o
            }, this._deprecatedOptionsCheck(), this._initializeValue(), i(this._onRendered.bind(this));
        }
    }
    var Z = {
        input: function(e, t, i, s, o) {
            var n = e.getValue(), r = document.createElement("input");
            if (r.setAttribute("type", o.search ? "search" : "text"), r.style.padding = "4px", r.style.width = "100%", r.style.boxSizing = "border-box", o.elementAttributes && "object" == typeof o.elementAttributes) for(let e1 in o.elementAttributes)"+" == e1.charAt(0) ? (e1 = e1.slice(1), r.setAttribute(e1, r.getAttribute(e1) + o.elementAttributes["+" + e1])) : r.setAttribute(e1, o.elementAttributes[e1]);
            function a(e) {
                null == n && "" !== r.value || r.value !== n ? i(r.value) && (n = r.value) : s();
            }
            return r.value = void 0 !== n ? n : "", t(function() {
                r.focus({
                    preventScroll: !0
                }), r.style.height = "100%", o.selectContents && r.select();
            }), r.addEventListener("change", a), r.addEventListener("blur", a), r.addEventListener("keydown", function(e) {
                switch(e.keyCode){
                    case 13:
                        a();
                        break;
                    case 27:
                        s();
                        break;
                    case 35:
                    case 36:
                        e.stopPropagation();
                }
            }), o.mask && Y(r, o), r;
        },
        textarea: function(e, t, i, s, o) {
            var n = e.getValue(), r = o.verticalNavigation || "hybrid", a = String(null != n ? n : ""), l = document.createElement("textarea"), h = 0;
            if (l.style.display = "block", l.style.padding = "2px", l.style.height = "100%", l.style.width = "100%", l.style.boxSizing = "border-box", l.style.whiteSpace = "pre-wrap", l.style.resize = "none", o.elementAttributes && "object" == typeof o.elementAttributes) for(let e1 in o.elementAttributes)"+" == e1.charAt(0) ? (e1 = e1.slice(1), l.setAttribute(e1, l.getAttribute(e1) + o.elementAttributes["+" + e1])) : l.setAttribute(e1, o.elementAttributes[e1]);
            function d(t) {
                null == n && "" !== l.value || l.value !== n ? (i(l.value) && (n = l.value), setTimeout(function() {
                    e.getRow().normalizeHeight();
                }, 300)) : s();
            }
            return l.value = a, t(function() {
                l.focus({
                    preventScroll: !0
                }), l.style.height = "100%", l.scrollHeight, l.style.height = l.scrollHeight + "px", e.getRow().normalizeHeight(), o.selectContents && l.select();
            }), l.addEventListener("change", d), l.addEventListener("blur", d), l.addEventListener("keyup", function() {
                l.style.height = "";
                var t = l.scrollHeight;
                l.style.height = t + "px", t != h && (h = t, e.getRow().normalizeHeight());
            }), l.addEventListener("keydown", function(e) {
                switch(e.keyCode){
                    case 13:
                        e.shiftKey && o.shiftEnterSubmit && d();
                        break;
                    case 27:
                        s();
                        break;
                    case 38:
                        ("editor" == r || "hybrid" == r && l.selectionStart) && (e.stopImmediatePropagation(), e.stopPropagation());
                        break;
                    case 40:
                        ("editor" == r || "hybrid" == r && l.selectionStart !== l.value.length) && (e.stopImmediatePropagation(), e.stopPropagation());
                        break;
                    case 35:
                    case 36:
                        e.stopPropagation();
                }
            }), o.mask && Y(l, o), l;
        },
        number: function(e, t, i, s, o) {
            var n = e.getValue(), r = o.verticalNavigation || "editor", a = document.createElement("input");
            if (a.setAttribute("type", "number"), void 0 !== o.max && a.setAttribute("max", o.max), void 0 !== o.min && a.setAttribute("min", o.min), void 0 !== o.step && a.setAttribute("step", o.step), a.style.padding = "4px", a.style.width = "100%", a.style.boxSizing = "border-box", o.elementAttributes && "object" == typeof o.elementAttributes) for(let e1 in o.elementAttributes)"+" == e1.charAt(0) ? (e1 = e1.slice(1), a.setAttribute(e1, a.getAttribute(e1) + o.elementAttributes["+" + e1])) : a.setAttribute(e1, o.elementAttributes[e1]);
            a.value = n;
            var l = function(e) {
                h();
            };
            function h() {
                var e = a.value;
                isNaN(e) || "" === e || (e = Number(e)), e !== n ? i(e) && (n = e) : s();
            }
            return t(function() {
                a.removeEventListener("blur", l), a.focus({
                    preventScroll: !0
                }), a.style.height = "100%", a.addEventListener("blur", l), o.selectContents && a.select();
            }), a.addEventListener("keydown", function(e) {
                switch(e.keyCode){
                    case 13:
                        h();
                        break;
                    case 27:
                        s();
                        break;
                    case 38:
                    case 40:
                        "editor" == r && (e.stopImmediatePropagation(), e.stopPropagation());
                        break;
                    case 35:
                    case 36:
                        e.stopPropagation();
                }
            }), o.mask && Y(a, o), a;
        },
        range: function(e, t, i, s, o) {
            var n = e.getValue(), r = document.createElement("input");
            if (r.setAttribute("type", "range"), void 0 !== o.max && r.setAttribute("max", o.max), void 0 !== o.min && r.setAttribute("min", o.min), void 0 !== o.step && r.setAttribute("step", o.step), r.style.padding = "4px", r.style.width = "100%", r.style.boxSizing = "border-box", o.elementAttributes && "object" == typeof o.elementAttributes) for(let e1 in o.elementAttributes)"+" == e1.charAt(0) ? (e1 = e1.slice(1), r.setAttribute(e1, r.getAttribute(e1) + o.elementAttributes["+" + e1])) : r.setAttribute(e1, o.elementAttributes[e1]);
            function a() {
                var e = r.value;
                isNaN(e) || "" === e || (e = Number(e)), e != n ? i(e) && (n = e) : s();
            }
            return r.value = n, t(function() {
                r.focus({
                    preventScroll: !0
                }), r.style.height = "100%";
            }), r.addEventListener("blur", function(e) {
                a();
            }), r.addEventListener("keydown", function(e) {
                switch(e.keyCode){
                    case 13:
                        a();
                        break;
                    case 27:
                        s();
                }
            }), r;
        },
        date: function(e, t, i, s, o) {
            var n = o.format, r = n ? window.DateTime || luxon.DateTime : null, a = e.getValue(), l = document.createElement("input");
            function h(e) {
                return (r.isDateTime(e) ? e : "iso" === n ? r.fromISO(String(e)) : r.fromFormat(String(e), n)).toFormat("yyyy-MM-dd");
            }
            if (l.type = "date", l.style.padding = "4px", l.style.width = "100%", l.style.boxSizing = "border-box", o.max && l.setAttribute("max", n ? h(o.max) : o.max), o.min && l.setAttribute("min", n ? h(o.min) : o.min), o.elementAttributes && "object" == typeof o.elementAttributes) for(let e1 in o.elementAttributes)"+" == e1.charAt(0) ? (e1 = e1.slice(1), l.setAttribute(e1, l.getAttribute(e1) + o.elementAttributes["+" + e1])) : l.setAttribute(e1, o.elementAttributes[e1]);
            function d(e) {
                var t = l.value;
                null == a && "" !== t || t !== a ? (t && n && (t = r.fromFormat(String(t), "yyyy-MM-dd").toFormat(n)), i(t) && (a = l.value)) : s();
            }
            return a = void 0 !== a ? a : "", n && (r ? a = h(a) : console.error("Editor Error - 'date' editor 'inputFormat' param is dependant on luxon.js")), l.value = a, t(function() {
                l.focus({
                    preventScroll: !0
                }), l.style.height = "100%", o.selectContents && l.select();
            }), l.addEventListener("change", d), l.addEventListener("blur", d), l.addEventListener("keydown", function(e) {
                switch(e.keyCode){
                    case 13:
                        d();
                        break;
                    case 27:
                        s();
                        break;
                    case 35:
                    case 36:
                        e.stopPropagation();
                }
            }), l;
        },
        time: function(e, t, i, s, o) {
            var n, r = o.format, a = r ? window.DateTime || luxon.DateTime : null, l = e.getValue(), h = document.createElement("input");
            if (h.type = "time", h.style.padding = "4px", h.style.width = "100%", h.style.boxSizing = "border-box", o.elementAttributes && "object" == typeof o.elementAttributes) for(let e1 in o.elementAttributes)"+" == e1.charAt(0) ? (e1 = e1.slice(1), h.setAttribute(e1, h.getAttribute(e1) + o.elementAttributes["+" + e1])) : h.setAttribute(e1, o.elementAttributes[e1]);
            function d(e) {
                var t = h.value;
                null == l && "" !== t || t !== l ? (t && r && (t = a.fromFormat(String(t), "hh:mm").toFormat(r)), i(t) && (l = h.value)) : s();
            }
            return l = void 0 !== l ? l : "", r && (a ? (n = a.isDateTime(l) ? l : "iso" === r ? a.fromISO(String(l)) : a.fromFormat(String(l), r), l = n.toFormat("hh:mm")) : console.error("Editor Error - 'date' editor 'inputFormat' param is dependant on luxon.js")), h.value = l, t(function() {
                h.focus({
                    preventScroll: !0
                }), h.style.height = "100%", o.selectContents && h.select();
            }), h.addEventListener("change", d), h.addEventListener("blur", d), h.addEventListener("keydown", function(e) {
                switch(e.keyCode){
                    case 13:
                        d();
                        break;
                    case 27:
                        s();
                        break;
                    case 35:
                    case 36:
                        e.stopPropagation();
                }
            }), h;
        },
        datetime: function(e, t, i, s, o) {
            var n, r = o.format, a = r ? window.DateTime || luxon.DateTime : null, l = e.getValue(), h = document.createElement("input");
            if (h.type = "datetime-local", h.style.padding = "4px", h.style.width = "100%", h.style.boxSizing = "border-box", o.elementAttributes && "object" == typeof o.elementAttributes) for(let e1 in o.elementAttributes)"+" == e1.charAt(0) ? (e1 = e1.slice(1), h.setAttribute(e1, h.getAttribute(e1) + o.elementAttributes["+" + e1])) : h.setAttribute(e1, o.elementAttributes[e1]);
            function d(e) {
                var t = h.value;
                null == l && "" !== t || t !== l ? (t && r && (t = a.fromISO(String(t)).toFormat(r)), i(t) && (l = h.value)) : s();
            }
            return l = void 0 !== l ? l : "", r && (a ? (n = a.isDateTime(l) ? l : "iso" === r ? a.fromISO(String(l)) : a.fromFormat(String(l), r), l = n.toFormat("yyyy-MM-dd") + "T" + n.toFormat("hh:mm")) : console.error("Editor Error - 'date' editor 'inputFormat' param is dependant on luxon.js")), h.value = l, t(function() {
                h.focus({
                    preventScroll: !0
                }), h.style.height = "100%", o.selectContents && h.select();
            }), h.addEventListener("change", d), h.addEventListener("blur", d), h.addEventListener("keydown", function(e) {
                switch(e.keyCode){
                    case 13:
                        d();
                        break;
                    case 27:
                        s();
                        break;
                    case 35:
                    case 36:
                        e.stopPropagation();
                }
            }), h;
        },
        select: function(e, t, i, s, o) {
            return this.deprecationMsg("The select editor has been deprecated, please use the new list editor"), new $(this, e, t, i, s, o).input;
        },
        list: function(e, t, i, s, o) {
            return new $(this, e, t, i, s, o).input;
        },
        autocomplete: function(e, t, i, s, o) {
            return this.deprecationMsg("The autocomplete editor has been deprecated, please use the new list editor with the 'autocomplete' editorParam"), o.autocomplete = !0, new $(this, e, t, i, s, o).input;
        },
        star: function(e, t, i, s, o) {
            var n = this, r = e.getElement(), a = e.getValue(), l = r.getElementsByTagName("svg").length || 5, h = r.getElementsByTagName("svg")[0] ? r.getElementsByTagName("svg")[0].getAttribute("width") : 14, d = [], c = document.createElement("div"), u = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            function p(e) {
                d.forEach(function(t, i) {
                    i < e ? ("ie" == n.table.browser ? t.setAttribute("class", "tabulator-star-active") : t.classList.replace("tabulator-star-inactive", "tabulator-star-active"), t.innerHTML = '<polygon fill="#488CE9" stroke="#014AAE" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>') : ("ie" == n.table.browser ? t.setAttribute("class", "tabulator-star-inactive") : t.classList.replace("tabulator-star-active", "tabulator-star-inactive"), t.innerHTML = '<polygon fill="#010155" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>');
                });
            }
            function m(e) {
                var t = document.createElement("span"), s = u.cloneNode(!0);
                d.push(s), t.addEventListener("mouseenter", function(t) {
                    t.stopPropagation(), t.stopImmediatePropagation(), p(e);
                }), t.addEventListener("mousemove", function(e) {
                    e.stopPropagation(), e.stopImmediatePropagation();
                }), t.addEventListener("click", function(t) {
                    t.stopPropagation(), t.stopImmediatePropagation(), i(e), r.blur();
                }), t.appendChild(s), c.appendChild(t);
            }
            function g(e) {
                a = e, p(e);
            }
            if (r.style.whiteSpace = "nowrap", r.style.overflow = "hidden", r.style.textOverflow = "ellipsis", c.style.verticalAlign = "middle", c.style.display = "inline-block", c.style.padding = "4px", u.setAttribute("width", h), u.setAttribute("height", h), u.setAttribute("viewBox", "0 0 512 512"), u.setAttribute("xml:space", "preserve"), u.style.padding = "0 1px", o.elementAttributes && "object" == typeof o.elementAttributes) for(let e1 in o.elementAttributes)"+" == e1.charAt(0) ? (e1 = e1.slice(1), c.setAttribute(e1, c.getAttribute(e1) + o.elementAttributes["+" + e1])) : c.setAttribute(e1, o.elementAttributes[e1]);
            for(var b = 1; b <= l; b++)m(b);
            return p(a = Math.min(parseInt(a), l)), c.addEventListener("mousemove", function(e) {
                p(0);
            }), c.addEventListener("click", function(e) {
                i(0);
            }), r.addEventListener("blur", function(e) {
                s();
            }), r.addEventListener("keydown", function(e) {
                switch(e.keyCode){
                    case 39:
                        g(a + 1);
                        break;
                    case 37:
                        g(a - 1);
                        break;
                    case 13:
                        i(a);
                        break;
                    case 27:
                        s();
                }
            }), c;
        },
        progress: function(e, t, i, s, o) {
            var n, r, a = e.getElement(), l = void 0 === o.max ? a.getElementsByTagName("div")[0] && a.getElementsByTagName("div")[0].getAttribute("max") || 100 : o.max, h = void 0 === o.min ? a.getElementsByTagName("div")[0] && a.getElementsByTagName("div")[0].getAttribute("min") || 0 : o.min, d = (l - h) / 100, c = e.getValue() || 0, u = document.createElement("div"), p = document.createElement("div");
            function m() {
                var e = window.getComputedStyle(a, null), t = d * Math.round(p.offsetWidth / ((a.clientWidth - parseInt(e.getPropertyValue("padding-left")) - parseInt(e.getPropertyValue("padding-right"))) / 100)) + h;
                i(t), a.setAttribute("aria-valuenow", t), a.setAttribute("aria-label", c);
            }
            if (u.style.position = "absolute", u.style.right = "0", u.style.top = "0", u.style.bottom = "0", u.style.width = "5px", u.classList.add("tabulator-progress-handle"), p.style.display = "inline-block", p.style.position = "relative", p.style.height = "100%", p.style.backgroundColor = "#488CE9", p.style.maxWidth = "100%", p.style.minWidth = "0%", o.elementAttributes && "object" == typeof o.elementAttributes) for(let e1 in o.elementAttributes)"+" == e1.charAt(0) ? (e1 = e1.slice(1), p.setAttribute(e1, p.getAttribute(e1) + o.elementAttributes["+" + e1])) : p.setAttribute(e1, o.elementAttributes[e1]);
            return a.style.padding = "4px 4px", c = Math.min(parseFloat(c), l), c = Math.max(parseFloat(c), h), c = Math.round((c - h) / d), p.style.width = c + "%", a.setAttribute("aria-valuemin", h), a.setAttribute("aria-valuemax", l), p.appendChild(u), u.addEventListener("mousedown", function(e) {
                n = e.screenX, r = p.offsetWidth;
            }), u.addEventListener("mouseover", function() {
                u.style.cursor = "ew-resize";
            }), a.addEventListener("mousemove", function(e) {
                n && (p.style.width = r + e.screenX - n + "px");
            }), a.addEventListener("mouseup", function(e) {
                n && (e.stopPropagation(), e.stopImmediatePropagation(), n = !1, r = !1, m());
            }), a.addEventListener("keydown", function(e) {
                switch(e.keyCode){
                    case 39:
                        e.preventDefault(), p.style.width = p.clientWidth + a.clientWidth / 100 + "px";
                        break;
                    case 37:
                        e.preventDefault(), p.style.width = p.clientWidth - a.clientWidth / 100 + "px";
                        break;
                    case 9:
                    case 13:
                        m();
                        break;
                    case 27:
                        s();
                }
            }), a.addEventListener("blur", function() {
                s();
            }), p;
        },
        tickCross: function(e, t, i, s, o) {
            var n = e.getValue(), r = document.createElement("input"), a = o.tristate, l = void 0 === o.indeterminateValue ? null : o.indeterminateValue, h = !1, d = Object.keys(o).includes("trueValue"), c = Object.keys(o).includes("falseValue");
            if (r.setAttribute("type", "checkbox"), r.style.marginTop = "5px", r.style.boxSizing = "border-box", o.elementAttributes && "object" == typeof o.elementAttributes) for(let e1 in o.elementAttributes)"+" == e1.charAt(0) ? (e1 = e1.slice(1), r.setAttribute(e1, r.getAttribute(e1) + o.elementAttributes["+" + e1])) : r.setAttribute(e1, o.elementAttributes[e1]);
            function u(e) {
                var t = r.checked;
                return d && t ? t = o.trueValue : c && !t && (t = o.falseValue), a ? e ? h ? l : t : r.checked && !h ? (r.checked = !1, r.indeterminate = !0, h = !0, l) : (h = !1, t) : t;
            }
            return r.value = n, !a || void 0 !== n && n !== l && "" !== n || (h = !0, r.indeterminate = !0), "firefox" != this.table.browser && t(function() {
                r.focus({
                    preventScroll: !0
                });
            }), r.checked = d ? n === o.trueValue : !0 === n || "true" === n || "True" === n || 1 === n, t(function() {
                r.focus();
            }), r.addEventListener("change", function(e) {
                i(u());
            }), r.addEventListener("blur", function(e) {
                i(u(!0));
            }), r.addEventListener("keydown", function(e) {
                13 == e.keyCode && i(u()), 27 == e.keyCode && s();
            }), r;
        }
    };
    class Q extends k {
        initialize() {
            this.subscribe("cell-init", this.bindEditor.bind(this)), this.subscribe("cell-delete", this.clearEdited.bind(this)), this.subscribe("cell-value-changed", this.updateCellClass.bind(this)), this.subscribe("column-layout", this.initializeColumnCheck.bind(this)), this.subscribe("column-delete", this.columnDeleteCheck.bind(this)), this.subscribe("row-deleting", this.rowDeleteCheck.bind(this)), this.subscribe("row-layout", this.rowEditableCheck.bind(this)), this.subscribe("data-refreshing", this.cancelEdit.bind(this)), this.subscribe("keybinding-nav-prev", this.navigatePrev.bind(this, void 0)), this.subscribe("keybinding-nav-next", this.keybindingNavigateNext.bind(this)), this.subscribe("keybinding-nav-left", this.navigateLeft.bind(this, void 0)), this.subscribe("keybinding-nav-right", this.navigateRight.bind(this, void 0)), this.subscribe("keybinding-nav-up", this.navigateUp.bind(this, void 0)), this.subscribe("keybinding-nav-down", this.navigateDown.bind(this, void 0));
        }
        keybindingNavigateNext(e) {
            var t = this.currentCell, i = this.options("tabEndNewRow");
            t && (this.navigateNext(t, e) || i && (t.getElement().firstChild.blur(), (i = !0 === i ? this.table.addRow({}) : "function" == typeof i ? this.table.addRow(i(t.row.getComponent())) : this.table.addRow(Object.assign({}, i))).then(()=>{
                setTimeout(()=>{
                    t.getComponent().navigateNext();
                });
            })));
        }
        cellIsEdited(e) {
            return !!e.modules.edit && e.modules.edit.edited;
        }
        cellCancelEdit(e) {
            e === this.currentCell ? this.table.modules.edit.cancelEdit() : console.warn("Cancel Editor Error - This cell is not currently being edited ");
        }
        updateCellClass(e) {
            this.allowEdit(e) ? e.getElement().classList.add("tabulator-editable") : e.getElement().classList.remove("tabulator-editable");
        }
        clearCellEdited(e) {
            e || (e = this.table.modules.edit.getEditedCells()), Array.isArray(e) || (e = [
                e
            ]), e.forEach((e)=>{
                this.table.modules.edit.clearEdited(e._getSelf());
            });
        }
        navigatePrev(e = this.currentCell, t) {
            var i, s;
            if (e) {
                if (t && t.preventDefault(), i = this.navigateLeft()) return !0;
                if ((s = this.table.rowManager.prevDisplayRow(e.row, !0)) && (i = this.findPrevEditableCell(s, s.cells.length))) return i.getComponent().edit(), !0;
            }
            return !1;
        }
        navigateNext(e = this.currentCell, t) {
            var i, s;
            if (e) {
                if (t && t.preventDefault(), i = this.navigateRight()) return !0;
                if ((s = this.table.rowManager.nextDisplayRow(e.row, !0)) && (i = this.findNextEditableCell(s, -1))) return i.getComponent().edit(), !0;
            }
            return !1;
        }
        navigateLeft(e = this.currentCell, t) {
            var i, s;
            return !!(e && (t && t.preventDefault(), i = e.getIndex(), s = this.findPrevEditableCell(e.row, i))) && (s.getComponent().edit(), !0);
        }
        navigateRight(e = this.currentCell, t) {
            var i, s;
            return !!(e && (t && t.preventDefault(), i = e.getIndex(), s = this.findNextEditableCell(e.row, i))) && (s.getComponent().edit(), !0);
        }
        navigateUp(e = this.currentCell, t) {
            var i, s;
            return !!(e && (t && t.preventDefault(), i = e.getIndex(), s = this.table.rowManager.prevDisplayRow(e.row, !0))) && (s.cells[i].getComponent().edit(), !0);
        }
        navigateDown(e = this.currentCell, t) {
            var i, s;
            return !!(e && (t && t.preventDefault(), i = e.getIndex(), s = this.table.rowManager.nextDisplayRow(e.row, !0))) && (s.cells[i].getComponent().edit(), !0);
        }
        findNextEditableCell(e, t) {
            var i = !1;
            if (t < e.cells.length - 1) for(var s = t + 1; s < e.cells.length; s++){
                let t1 = e.cells[s];
                if (t1.column.modules.edit && r.elVisible(t1.getElement())) {
                    if (this.allowEdit(t1)) {
                        i = t1;
                        break;
                    }
                }
            }
            return i;
        }
        findPrevEditableCell(e, t) {
            var i = !1;
            if (t > 0) for(var s = t - 1; s >= 0; s--){
                let t1 = e.cells[s];
                if (t1.column.modules.edit && r.elVisible(t1.getElement())) {
                    if (this.allowEdit(t1)) {
                        i = t1;
                        break;
                    }
                }
            }
            return i;
        }
        initializeColumnCheck(e) {
            void 0 !== e.definition.editor && this.initializeColumn(e);
        }
        columnDeleteCheck(e) {
            this.currentCell && this.currentCell.column === e && this.cancelEdit();
        }
        rowDeleteCheck(e) {
            this.currentCell && this.currentCell.row === e && this.cancelEdit();
        }
        rowEditableCheck(e) {
            e.getCells().forEach((e)=>{
                e.column.modules.edit && "function" == typeof e.column.modules.edit.check && this.updateCellClass(e);
            });
        }
        initializeColumn(e) {
            var t = {
                editor: !1,
                blocked: !1,
                check: e.definition.editable,
                params: e.definition.editorParams || {}
            };
            switch(typeof e.definition.editor){
                case "string":
                    this.editors[e.definition.editor] ? t.editor = this.editors[e.definition.editor] : console.warn("Editor Error - No such editor found: ", e.definition.editor);
                    break;
                case "function":
                    t.editor = e.definition.editor;
                    break;
                case "boolean":
                    !0 === e.definition.editor && ("function" != typeof e.definition.formatter ? this.editors[e.definition.formatter] ? t.editor = this.editors[e.definition.formatter] : t.editor = this.editors.input : console.warn("Editor Error - Cannot auto lookup editor for a custom formatter: ", e.definition.formatter));
            }
            t.editor && (e.modules.edit = t);
        }
        getCurrentCell() {
            return !!this.currentCell && this.currentCell.getComponent();
        }
        clearEditor(e) {
            var t, i = this.currentCell;
            if (this.invalidEdit = !1, i) {
                for(this.currentCell = !1, t = i.getElement(), this.dispatch("edit-editor-clear", i, e), t.classList.remove("tabulator-editing"); t.firstChild;)t.removeChild(t.firstChild);
                i.row.getElement().classList.remove("tabulator-editing"), i.table.element.classList.remove("tabulator-editing");
            }
        }
        cancelEdit() {
            if (this.currentCell) {
                var e = this.currentCell, t = this.currentCell.getComponent();
                this.clearEditor(!0), e.setValueActual(e.getValue()), e.cellRendered(), ("textarea" == e.column.definition.editor || e.column.definition.variableHeight) && e.row.normalizeHeight(!0), e.column.definition.cellEditCancelled && e.column.definition.cellEditCancelled.call(this.table, t), this.dispatch("edit-cancelled", e), this.dispatchExternal("cellEditCancelled", t);
            }
        }
        bindEditor(e) {
            if (e.column.modules.edit) {
                var t = this, i = e.getElement(!0);
                this.updateCellClass(e), i.setAttribute("tabindex", 0), i.addEventListener("click", function(e) {
                    i.classList.contains("tabulator-editing") || i.focus({
                        preventScroll: !0
                    });
                }), i.addEventListener("mousedown", function(e) {
                    2 === e.button ? e.preventDefault() : t.mouseClick = !0;
                }), i.addEventListener("focus", function(i) {
                    t.recursionBlock || t.edit(e, i, !1);
                });
            }
        }
        focusCellNoEvent(e, t) {
            this.recursionBlock = !0, t && "ie" === this.table.browser || e.getElement().focus({
                preventScroll: !0
            }), this.recursionBlock = !1;
        }
        editCell(e, t) {
            this.focusCellNoEvent(e), this.edit(e, !1, t);
        }
        focusScrollAdjust(e) {
            if ("virtual" == this.table.rowManager.getRenderMode()) {
                var t = this.table.rowManager.element.scrollTop, i = this.table.rowManager.element.clientHeight + this.table.rowManager.element.scrollTop, s = e.row.getElement();
                s.offsetTop < t ? this.table.rowManager.element.scrollTop -= t - s.offsetTop : s.offsetTop + s.offsetHeight > i && (this.table.rowManager.element.scrollTop += s.offsetTop + s.offsetHeight - i);
                var o = this.table.rowManager.element.scrollLeft, n = this.table.rowManager.element.clientWidth + this.table.rowManager.element.scrollLeft, r = e.getElement();
                this.table.modExists("frozenColumns") && (o += parseInt(this.table.modules.frozenColumns.leftMargin), n -= parseInt(this.table.modules.frozenColumns.rightMargin)), "virtual" === this.table.options.renderHorizontal && (o -= parseInt(this.table.columnManager.renderer.vDomPadLeft), n -= parseInt(this.table.columnManager.renderer.vDomPadLeft)), r.offsetLeft < o ? this.table.rowManager.element.scrollLeft -= o - r.offsetLeft : r.offsetLeft + r.offsetWidth > n && (this.table.rowManager.element.scrollLeft += r.offsetLeft + r.offsetWidth - n);
            }
        }
        allowEdit(e) {
            var t = !!e.column.modules.edit;
            if (e.column.modules.edit) switch(typeof e.column.modules.edit.check){
                case "function":
                    e.row.initialized && (t = e.column.modules.edit.check(e.getComponent()));
                    break;
                case "string":
                    t = !!e.row.data[e.column.modules.edit.check];
                    break;
                case "boolean":
                    t = e.column.modules.edit.check;
            }
            return t;
        }
        edit(e, t, i) {
            var s, o, n, r = this, a = function() {}, l = e.getElement();
            if (!this.currentCell) {
                if (e.column.modules.edit.blocked) return this.mouseClick = !1, l.blur(), !1;
                if (t && t.stopPropagation(), this.allowEdit(e) || i) {
                    if (r.cancelEdit(), r.currentCell = e, this.focusScrollAdjust(e), o = e.getComponent(), this.mouseClick && (this.mouseClick = !1, e.column.definition.cellClick && e.column.definition.cellClick.call(this.table, t, o)), e.column.definition.cellEditing && e.column.definition.cellEditing.call(this.table, o), this.dispatch("cell-editing", e), this.dispatchExternal("cellEditing", o), n = "function" == typeof e.column.modules.edit.params ? e.column.modules.edit.params(o) : e.column.modules.edit.params, !1 === (s = e.column.modules.edit.editor.call(r, o, function(e) {
                        a = e;
                    }, function(t) {
                        if (r.currentCell === e) {
                            var i = r.chain("edit-success", [
                                e,
                                t
                            ], !0, !0);
                            return !0 === i || "highlight" === r.table.options.validationMode ? (r.clearEditor(), e.modules.edit || (e.modules.edit = {}), e.modules.edit.edited = !0, -1 == r.editedCells.indexOf(e) && r.editedCells.push(e), e.setValue(t, !0), !0 === i) : (r.invalidEdit = !0, r.focusCellNoEvent(e, !0), a(), !1);
                        }
                    }, function() {
                        r.currentCell === e && r.cancelEdit();
                    }, n))) return l.blur(), !1;
                    if (!(s instanceof Node)) return console.warn("Edit Error - Editor should return an instance of Node, the editor returned:", s), l.blur(), !1;
                    for(l.classList.add("tabulator-editing"), e.row.getElement().classList.add("tabulator-editing"), e.table.element.classList.add("tabulator-editing"); l.firstChild;)l.removeChild(l.firstChild);
                    l.appendChild(s), a();
                    for(var h = l.children, d = 0; d < h.length; d++)h[d].addEventListener("click", function(e) {
                        e.stopPropagation();
                    });
                    return !0;
                }
                return this.mouseClick = !1, l.blur(), !1;
            }
            this.invalidEdit || this.cancelEdit();
        }
        getEditedCells() {
            var e = [];
            return this.editedCells.forEach((t)=>{
                e.push(t.getComponent());
            }), e;
        }
        clearEdited(e) {
            var t;
            e.modules.edit && e.modules.edit.edited && (e.modules.edit.edited = !1, this.dispatch("edit-edited-clear", e)), (t = this.editedCells.indexOf(e)) > -1 && this.editedCells.splice(t, 1);
        }
        constructor(e){
            super(e), this.currentCell = !1, this.mouseClick = !1, this.recursionBlock = !1, this.invalidEdit = !1, this.editedCells = [], this.editors = Q.editors, this.registerColumnOption("editable"), this.registerColumnOption("editor"), this.registerColumnOption("editorParams"), this.registerColumnOption("cellEditing"), this.registerColumnOption("cellEdited"), this.registerColumnOption("cellEditCancelled"), this.registerTableFunction("getEditedCells", this.getEditedCells.bind(this)), this.registerTableFunction("clearCellEdited", this.clearCellEdited.bind(this)), this.registerTableFunction("navigatePrev", this.navigatePrev.bind(this)), this.registerTableFunction("navigateNext", this.navigateNext.bind(this)), this.registerTableFunction("navigateLeft", this.navigateLeft.bind(this)), this.registerTableFunction("navigateRight", this.navigateRight.bind(this)), this.registerTableFunction("navigateUp", this.navigateUp.bind(this)), this.registerTableFunction("navigateDown", this.navigateDown.bind(this)), this.registerComponentFunction("cell", "isEdited", this.cellIsEdited.bind(this)), this.registerComponentFunction("cell", "clearEdited", this.clearEdited.bind(this)), this.registerComponentFunction("cell", "edit", this.editCell.bind(this)), this.registerComponentFunction("cell", "cancelEdit", this.cellCancelEdit.bind(this)), this.registerComponentFunction("cell", "navigatePrev", this.navigatePrev.bind(this)), this.registerComponentFunction("cell", "navigateNext", this.navigateNext.bind(this)), this.registerComponentFunction("cell", "navigateLeft", this.navigateLeft.bind(this)), this.registerComponentFunction("cell", "navigateRight", this.navigateRight.bind(this)), this.registerComponentFunction("cell", "navigateUp", this.navigateUp.bind(this)), this.registerComponentFunction("cell", "navigateDown", this.navigateDown.bind(this));
        }
    }
    Q.moduleName = "edit", Q.editors = Z;
    class ee {
        constructor(e, t, i, s){
            this.type = e, this.columns = t, this.component = i || !1, this.indent = s || 0;
        }
    }
    class te {
        constructor(e, t, i, s, o){
            this.value = e, this.component = t || !1, this.width = i, this.height = s, this.depth = o;
        }
    }
    class ie extends k {
        initialize() {
            this.registerTableFunction("getHtml", this.getHtml.bind(this));
        }
        generateExportList(e, t, i, s) {
            this.cloneTableStyle = t, this.config = e || {}, this.colVisProp = s;
            var o = !1 !== this.config.columnHeaders ? this.headersToExportRows(this.generateColumnGroupHeaders()) : [], n = this.bodyToExportRows(this.rowLookup(i));
            return o.concat(n);
        }
        generateTable(e, t, i, s) {
            var o = this.generateExportList(e, t, i, s);
            return this.generateTableElement(o);
        }
        rowLookup(e) {
            var t = [];
            if ("function" == typeof e) e.call(this.table).forEach((e)=>{
                (e = this.table.rowManager.findRow(e)) && t.push(e);
            });
            else switch(e){
                case !0:
                case "visible":
                    t = this.table.rowManager.getVisibleRows(!1, !0);
                    break;
                case "all":
                    t = this.table.rowManager.rows;
                    break;
                case "selected":
                    t = this.table.modules.selectRow.selectedRows;
                    break;
                default:
                    t = this.table.options.pagination ? this.table.rowManager.getDisplayRows(this.table.rowManager.displayRows.length - 2) : this.table.rowManager.getDisplayRows();
            }
            return Object.assign([], t);
        }
        generateColumnGroupHeaders() {
            var e = [];
            return (!1 !== this.config.columnGroups ? this.table.columnManager.columns : this.table.columnManager.columnsByIndex).forEach((t)=>{
                var i = this.processColumnGroup(t);
                i && e.push(i);
            }), e;
        }
        processColumnGroup(e) {
            var t = e.columns, i = 0, s = {
                title: e.definition["title" + (this.colVisProp.charAt(0).toUpperCase() + this.colVisProp.slice(1))] || e.definition.title,
                column: e,
                depth: 1
            };
            if (t.length) {
                if (s.subGroups = [], s.width = 0, t.forEach((e)=>{
                    var t = this.processColumnGroup(e);
                    t && (s.width += t.width, s.subGroups.push(t), t.depth > i && (i = t.depth));
                }), s.depth += i, !s.width) return !1;
            } else {
                if (!this.columnVisCheck(e)) return !1;
                s.width = 1;
            }
            return s;
        }
        columnVisCheck(e) {
            var t = e.definition[this.colVisProp];
            return "function" == typeof t && (t = t.call(this.table, e.getComponent())), !1 !== t && (e.visible || !e.visible && t);
        }
        headersToExportRows(e) {
            var t = [], i = 0, s = [];
            function o(e, s) {
                var n = i - s;
                if (void 0 === t[s] && (t[s] = []), e.height = e.subGroups ? 1 : n - e.depth + 1, t[s].push(e), e.height > 1) for(let i1 = 1; i1 < e.height; i1++)void 0 === t[s + i1] && (t[s + i1] = []), t[s + i1].push(!1);
                if (e.width > 1) for(let i2 = 1; i2 < e.width; i2++)t[s].push(!1);
                e.subGroups && e.subGroups.forEach(function(e) {
                    o(e, s + 1);
                });
            }
            return e.forEach(function(e) {
                e.depth > i && (i = e.depth);
            }), e.forEach(function(e) {
                o(e, 0);
            }), t.forEach((e)=>{
                var t = [];
                e.forEach((e)=>{
                    if (e) {
                        let i = void 0 === e.title ? "" : e.title;
                        t.push(new te(i, e.column.getComponent(), e.width, e.height, e.depth));
                    } else t.push(null);
                }), s.push(new ee("header", t));
            }), s;
        }
        bodyToExportRows(e) {
            var t = [], i = [];
            return this.table.columnManager.columnsByIndex.forEach((e)=>{
                this.columnVisCheck(e) && t.push(e.getComponent());
            }), !1 !== this.config.columnCalcs && this.table.modExists("columnCalcs") && (this.table.modules.columnCalcs.topInitialized && e.unshift(this.table.modules.columnCalcs.topRow), this.table.modules.columnCalcs.botInitialized && e.push(this.table.modules.columnCalcs.botRow)), (e = e.filter((e)=>{
                switch(e.type){
                    case "group":
                        return !1 !== this.config.rowGroups;
                    case "calc":
                        return !1 !== this.config.columnCalcs;
                    case "row":
                        return !(this.table.options.dataTree && !1 === this.config.dataTree && e.modules.dataTree.parent);
                }
                return !0;
            })).forEach((e, s)=>{
                var o = e.getData(this.colVisProp), n = [], r = 0;
                switch(e.type){
                    case "group":
                        r = e.level, n.push(new te(e.key, e.getComponent(), t.length, 1));
                        break;
                    case "calc":
                    case "row":
                        t.forEach((e)=>{
                            n.push(new te(e._column.getFieldValue(o), e, 1, 1));
                        }), this.table.options.dataTree && !1 !== this.config.dataTree && (r = e.modules.dataTree.index);
                }
                i.push(new ee(e.type, n, e.getComponent(), r));
            }), i;
        }
        generateTableElement(e) {
            var t = document.createElement("table"), i = document.createElement("thead"), s = document.createElement("tbody"), o = this.lookupTableStyles(), n = this.table.options["rowFormatter" + (this.colVisProp.charAt(0).toUpperCase() + this.colVisProp.slice(1))], r = {};
            return r.rowFormatter = null !== n ? n : this.table.options.rowFormatter, this.table.options.dataTree && !1 !== this.config.dataTree && this.table.modExists("columnCalcs") && (r.treeElementField = this.table.modules.dataTree.elementField), r.groupHeader = this.table.options["groupHeader" + (this.colVisProp.charAt(0).toUpperCase() + this.colVisProp.slice(1))], r.groupHeader && !Array.isArray(r.groupHeader) && (r.groupHeader = [
                r.groupHeader
            ]), t.classList.add("tabulator-print-table"), this.mapElementStyles(this.table.columnManager.getHeadersElement(), i, [
                "border-top",
                "border-left",
                "border-right",
                "border-bottom",
                "background-color",
                "color",
                "font-weight",
                "font-family",
                "font-size"
            ]), e.length > 1e3 && console.warn("It may take a long time to render an HTML table with more than 1000 rows"), e.forEach((e, t)=>{
                let n;
                switch(e.type){
                    case "header":
                        i.appendChild(this.generateHeaderElement(e, r, o));
                        break;
                    case "group":
                        s.appendChild(this.generateGroupElement(e, r, o));
                        break;
                    case "calc":
                        s.appendChild(this.generateCalcElement(e, r, o));
                        break;
                    case "row":
                        n = this.generateRowElement(e, r, o), this.mapElementStyles(t % 2 && o.evenRow ? o.evenRow : o.oddRow, n, [
                            "border-top",
                            "border-left",
                            "border-right",
                            "border-bottom",
                            "color",
                            "font-weight",
                            "font-family",
                            "font-size",
                            "background-color"
                        ]), s.appendChild(n);
                }
            }), i.innerHTML && t.appendChild(i), t.appendChild(s), this.mapElementStyles(this.table.element, t, [
                "border-top",
                "border-left",
                "border-right",
                "border-bottom"
            ]), t;
        }
        lookupTableStyles() {
            var e = {};
            return this.cloneTableStyle && window.getComputedStyle && (e.oddRow = this.table.element.querySelector(".tabulator-row-odd:not(.tabulator-group):not(.tabulator-calcs)"), e.evenRow = this.table.element.querySelector(".tabulator-row-even:not(.tabulator-group):not(.tabulator-calcs)"), e.calcRow = this.table.element.querySelector(".tabulator-row.tabulator-calcs"), e.firstRow = this.table.element.querySelector(".tabulator-row:not(.tabulator-group):not(.tabulator-calcs)"), e.firstGroup = this.table.element.getElementsByClassName("tabulator-group")[0], e.firstRow && (e.styleCells = e.firstRow.getElementsByClassName("tabulator-cell"), e.firstCell = e.styleCells[0], e.lastCell = e.styleCells[e.styleCells.length - 1])), e;
        }
        generateHeaderElement(e, t, i) {
            var s = document.createElement("tr");
            return e.columns.forEach((e)=>{
                if (e) {
                    var t = document.createElement("th"), i = e.component._column.definition.cssClass ? e.component._column.definition.cssClass.split(" ") : [];
                    t.colSpan = e.width, t.rowSpan = e.height, t.innerHTML = e.value, this.cloneTableStyle && (t.style.boxSizing = "border-box"), i.forEach(function(e) {
                        t.classList.add(e);
                    }), this.mapElementStyles(e.component.getElement(), t, [
                        "text-align",
                        "border-top",
                        "border-left",
                        "border-right",
                        "border-bottom",
                        "background-color",
                        "color",
                        "font-weight",
                        "font-family",
                        "font-size"
                    ]), this.mapElementStyles(e.component._column.contentElement, t, [
                        "padding-top",
                        "padding-left",
                        "padding-right",
                        "padding-bottom"
                    ]), e.component._column.visible ? this.mapElementStyles(e.component.getElement(), t, [
                        "width"
                    ]) : e.component._column.definition.width && (t.style.width = e.component._column.definition.width + "px"), e.component._column.parent && this.mapElementStyles(e.component._column.parent.groupElement, t, [
                        "border-top"
                    ]), s.appendChild(t);
                }
            }), s;
        }
        generateGroupElement(e, t, i) {
            var s = document.createElement("tr"), o = document.createElement("td"), n = e.columns[0];
            return s.classList.add("tabulator-print-table-row"), t.groupHeader && t.groupHeader[e.indent] ? n.value = t.groupHeader[e.indent](n.value, e.component._group.getRowCount(), e.component._group.getData(), e.component) : !1 !== t.groupHeader && (n.value = e.component._group.generator(n.value, e.component._group.getRowCount(), e.component._group.getData(), e.component)), o.colSpan = n.width, o.innerHTML = n.value, s.classList.add("tabulator-print-table-group"), s.classList.add("tabulator-group-level-" + e.indent), n.component.isVisible() && s.classList.add("tabulator-group-visible"), this.mapElementStyles(i.firstGroup, s, [
                "border-top",
                "border-left",
                "border-right",
                "border-bottom",
                "color",
                "font-weight",
                "font-family",
                "font-size",
                "background-color"
            ]), this.mapElementStyles(i.firstGroup, o, [
                "padding-top",
                "padding-left",
                "padding-right",
                "padding-bottom"
            ]), s.appendChild(o), s;
        }
        generateCalcElement(e, t, i) {
            var s = this.generateRowElement(e, t, i);
            return s.classList.add("tabulator-print-table-calcs"), this.mapElementStyles(i.calcRow, s, [
                "border-top",
                "border-left",
                "border-right",
                "border-bottom",
                "color",
                "font-weight",
                "font-family",
                "font-size",
                "background-color"
            ]), s;
        }
        generateRowElement(e, t, i) {
            var s = document.createElement("tr");
            return s.classList.add("tabulator-print-table-row"), e.columns.forEach((o, n)=>{
                if (o) {
                    var r, a = document.createElement("td"), l = o.component._column, h = this.table.columnManager.findColumnIndex(l), d = o.value, c = {
                        modules: {},
                        getValue: function() {
                            return d;
                        },
                        getField: function() {
                            return l.definition.field;
                        },
                        getElement: function() {
                            return a;
                        },
                        getColumn: function() {
                            return l.getComponent();
                        },
                        getData: function() {
                            return e.component.getData();
                        },
                        getRow: function() {
                            return e.component;
                        },
                        getComponent: function() {
                            return c;
                        },
                        column: l
                    };
                    if ((l.definition.cssClass ? l.definition.cssClass.split(" ") : []).forEach(function(e) {
                        a.classList.add(e);
                    }), this.table.modExists("format") && !1 !== this.config.formatCells) d = this.table.modules.format.formatExportValue(c, this.colVisProp);
                    else switch(typeof d){
                        case "object":
                            d = null !== d ? JSON.stringify(d) : "";
                            break;
                        case "undefined":
                            d = "";
                    }
                    d instanceof Node ? a.appendChild(d) : a.innerHTML = d, (r = i.styleCells && i.styleCells[h] ? i.styleCells[h] : i.firstCell) && (this.mapElementStyles(r, a, [
                        "padding-top",
                        "padding-left",
                        "padding-right",
                        "padding-bottom",
                        "border-top",
                        "border-left",
                        "border-right",
                        "border-bottom",
                        "color",
                        "font-weight",
                        "font-family",
                        "font-size",
                        "text-align"
                    ]), l.definition.align && (a.style.textAlign = l.definition.align)), this.table.options.dataTree && !1 !== this.config.dataTree && (t.treeElementField && t.treeElementField == l.field || !t.treeElementField && 0 == n) && (e.component._row.modules.dataTree.controlEl && a.insertBefore(e.component._row.modules.dataTree.controlEl.cloneNode(!0), a.firstChild), e.component._row.modules.dataTree.branchEl && a.insertBefore(e.component._row.modules.dataTree.branchEl.cloneNode(!0), a.firstChild)), s.appendChild(a), c.modules.format && c.modules.format.renderedCallback && c.modules.format.renderedCallback(), t.rowFormatter && !1 !== this.config.formatCells && t.rowFormatter(e.component);
                }
            }), s;
        }
        generateHTMLTable(e) {
            var t = document.createElement("div");
            return t.appendChild(this.generateTableElement(e)), t.innerHTML;
        }
        getHtml(e, t, i, s) {
            var o = this.generateExportList(i || this.table.options.htmlOutputConfig, t, e, s || "htmlOutput");
            return this.generateHTMLTable(o);
        }
        mapElementStyles(e, t, i) {
            if (this.cloneTableStyle && e && t) {
                var s = {
                    "background-color": "backgroundColor",
                    color: "fontColor",
                    width: "width",
                    "font-weight": "fontWeight",
                    "font-family": "fontFamily",
                    "font-size": "fontSize",
                    "text-align": "textAlign",
                    "border-top": "borderTop",
                    "border-left": "borderLeft",
                    "border-right": "borderRight",
                    "border-bottom": "borderBottom",
                    "padding-top": "paddingTop",
                    "padding-left": "paddingLeft",
                    "padding-right": "paddingRight",
                    "padding-bottom": "paddingBottom"
                };
                if (window.getComputedStyle) {
                    var o = window.getComputedStyle(e);
                    i.forEach(function(e) {
                        t.style[s[e]] = o.getPropertyValue(e);
                    });
                }
            }
        }
        constructor(e){
            super(e), this.config = {}, this.cloneTableStyle = !0, this.colVisProp = "", this.registerTableOption("htmlOutputConfig", !1), this.registerColumnOption("htmlOutput"), this.registerColumnOption("titleHtmlOutput");
        }
    }
    ie.moduleName = "export";
    var se = {
        "=": function(e, t, i, s) {
            return t == e;
        },
        "<": function(e, t, i, s) {
            return t < e;
        },
        "<=": function(e, t, i, s) {
            return t <= e;
        },
        ">": function(e, t, i, s) {
            return t > e;
        },
        ">=": function(e, t, i, s) {
            return t >= e;
        },
        "!=": function(e, t, i, s) {
            return t != e;
        },
        regex: function(e, t, i, s) {
            return "string" == typeof e && (e = new RegExp(e)), e.test(t);
        },
        like: function(e, t, i, s) {
            return null == e ? t === e : null != t && String(t).toLowerCase().indexOf(e.toLowerCase()) > -1;
        },
        keywords: function(e, t, i, s) {
            var o = e.toLowerCase().split(void 0 === s.separator ? " " : s.separator), n = String(null == t ? "" : t).toLowerCase(), r = [];
            return o.forEach((e)=>{
                n.includes(e) && r.push(!0);
            }), s.matchAll ? r.length === o.length : !!r.length;
        },
        starts: function(e, t, i, s) {
            return null == e ? t === e : null != t && String(t).toLowerCase().startsWith(e.toLowerCase());
        },
        ends: function(e, t, i, s) {
            return null == e ? t === e : null != t && String(t).toLowerCase().endsWith(e.toLowerCase());
        },
        in: function(e, t, i, s) {
            return Array.isArray(e) ? !e.length || e.indexOf(t) > -1 : (console.warn("Filter Error - filter value is not an array:", e), !1);
        }
    };
    class oe extends k {
        initialize() {
            this.subscribe("column-init", this.initializeColumnHeaderFilter.bind(this)), this.subscribe("column-width-fit-before", this.hideHeaderFilterElements.bind(this)), this.subscribe("column-width-fit-after", this.showHeaderFilterElements.bind(this)), this.subscribe("table-built", this.tableBuilt.bind(this)), "remote" === this.table.options.filterMode && this.subscribe("data-params", this.remoteFilterParams.bind(this)), this.registerDataHandler(this.filter.bind(this), 10);
        }
        tableBuilt() {
            this.table.options.initialFilter && this.setFilter(this.table.options.initialFilter), this.table.options.initialHeaderFilter && this.table.options.initialHeaderFilter.forEach((e)=>{
                var t = this.table.columnManager.findColumn(e.field);
                if (!t) return console.warn("Column Filter Error - No matching column found:", e.field), !1;
                this.setHeaderFilterValue(t, e.value);
            }), this.tableInitialized = !0;
        }
        remoteFilterParams(e, t, i, s) {
            return s.filter = this.getFilters(!0, !0), s;
        }
        userSetFilter(e, t, i, s) {
            this.setFilter(e, t, i, s), this.refreshFilter();
        }
        userRefreshFilter() {
            this.refreshFilter();
        }
        userAddFilter(e, t, i, s) {
            this.addFilter(e, t, i, s), this.refreshFilter();
        }
        userSetHeaderFilterFocus(e) {
            var t = this.table.columnManager.findColumn(e);
            if (!t) return console.warn("Column Filter Focus Error - No matching column found:", e), !1;
            this.setHeaderFilterFocus(t);
        }
        userGetHeaderFilterValue(e) {
            var t = this.table.columnManager.findColumn(e);
            if (t) return this.getHeaderFilterValue(t);
            console.warn("Column Filter Error - No matching column found:", e);
        }
        userSetHeaderFilterValue(e, t) {
            var i = this.table.columnManager.findColumn(e);
            if (!i) return console.warn("Column Filter Error - No matching column found:", e), !1;
            this.setHeaderFilterValue(i, t);
        }
        userRemoveFilter(e, t, i) {
            this.removeFilter(e, t, i), this.refreshFilter();
        }
        userClearFilter(e) {
            this.clearFilter(e), this.refreshFilter();
        }
        userClearHeaderFilter() {
            this.clearHeaderFilter(), this.refreshFilter();
        }
        searchRows(e, t, i) {
            return this.search("rows", e, t, i);
        }
        searchData(e, t, i) {
            return this.search("data", e, t, i);
        }
        initializeColumnHeaderFilter(e) {
            var t = e.definition;
            t.headerFilter && (void 0 !== t.headerFilterPlaceholder && t.field && this.module("localize").setHeaderFilterColumnPlaceholder(t.field, t.headerFilterPlaceholder), this.initializeColumn(e));
        }
        initializeColumn(e, t) {
            var i = this, s = e.getField();
            e.modules.filter = {
                success: function(t) {
                    var o, n = "input" == e.modules.filter.tagType && "text" == e.modules.filter.attrType || "textarea" == e.modules.filter.tagType ? "partial" : "match", r = "", a = "";
                    if (void 0 === e.modules.filter.prevSuccess || e.modules.filter.prevSuccess !== t) {
                        if (e.modules.filter.prevSuccess = t, e.modules.filter.emptyFunc(t)) delete i.headerFilters[s];
                        else {
                            switch(e.modules.filter.value = t, typeof e.definition.headerFilterFunc){
                                case "string":
                                    oe.filters[e.definition.headerFilterFunc] ? (r = e.definition.headerFilterFunc, o = function(i) {
                                        var s = e.definition.headerFilterFuncParams || {}, o = e.getFieldValue(i);
                                        return s = "function" == typeof s ? s(t, o, i) : s, oe.filters[e.definition.headerFilterFunc](t, o, i, s);
                                    }) : console.warn("Header Filter Error - Matching filter function not found: ", e.definition.headerFilterFunc);
                                    break;
                                case "function":
                                    r = o = function(i) {
                                        var s = e.definition.headerFilterFuncParams || {}, o = e.getFieldValue(i);
                                        return s = "function" == typeof s ? s(t, o, i) : s, e.definition.headerFilterFunc(t, o, i, s);
                                    };
                            }
                            if (!o) {
                                if ("partial" === n) o = function(i) {
                                    var s = e.getFieldValue(i);
                                    return null != s && String(s).toLowerCase().indexOf(String(t).toLowerCase()) > -1;
                                }, r = "like";
                                else o = function(i) {
                                    return e.getFieldValue(i) == t;
                                }, r = "=";
                            }
                            i.headerFilters[s] = {
                                value: t,
                                func: o,
                                type: r
                            };
                        }
                        e.modules.filter.value = t, a = JSON.stringify(i.headerFilters), i.prevHeaderFilterChangeCheck !== a && (i.prevHeaderFilterChangeCheck = a, i.trackChanges(), i.refreshFilter());
                    }
                    return !0;
                },
                attrType: !1,
                tagType: !1,
                emptyFunc: !1
            }, this.generateHeaderFilterElement(e);
        }
        generateHeaderFilterElement(e, t, i) {
            var s, o, n, r, a, l, h, d = this, c = e.modules.filter.success, u = e.getField();
            if (e.modules.filter.value = t, e.modules.filter.headerElement && e.modules.filter.headerElement.parentNode && e.contentElement.removeChild(e.modules.filter.headerElement.parentNode), u) {
                switch(e.modules.filter.emptyFunc = e.definition.headerFilterEmptyCheck || function(e) {
                    return !e && 0 !== e;
                }, (s = document.createElement("div")).classList.add("tabulator-header-filter"), typeof e.definition.headerFilter){
                    case "string":
                        d.table.modules.edit.editors[e.definition.headerFilter] ? (o = d.table.modules.edit.editors[e.definition.headerFilter], "tick" !== e.definition.headerFilter && "tickCross" !== e.definition.headerFilter || e.definition.headerFilterEmptyCheck || (e.modules.filter.emptyFunc = function(e) {
                            return !0 !== e && !1 !== e;
                        })) : console.warn("Filter Error - Cannot build header filter, No such editor found: ", e.definition.editor);
                        break;
                    case "function":
                        o = e.definition.headerFilter;
                        break;
                    case "boolean":
                        e.modules.edit && e.modules.edit.editor ? o = e.modules.edit.editor : e.definition.formatter && d.table.modules.edit.editors[e.definition.formatter] ? (o = d.table.modules.edit.editors[e.definition.formatter], "tick" !== e.definition.formatter && "tickCross" !== e.definition.formatter || e.definition.headerFilterEmptyCheck || (e.modules.filter.emptyFunc = function(e) {
                            return !0 !== e && !1 !== e;
                        })) : o = d.table.modules.edit.editors.input;
                }
                if (o) {
                    if (r = {
                        getValue: function() {
                            return void 0 !== t ? t : "";
                        },
                        getField: function() {
                            return e.definition.field;
                        },
                        getElement: function() {
                            return s;
                        },
                        getColumn: function() {
                            return e.getComponent();
                        },
                        getTable: ()=>this.table,
                        getRow: function() {
                            return {
                                normalizeHeight: function() {}
                            };
                        }
                    }, h = "function" == typeof (h = e.definition.headerFilterParams || {}) ? h.call(d.table, r) : h, !(n = o.call(this.table.modules.edit, r, function() {}, c, function() {}, h))) return void console.warn("Filter Error - Cannot add filter to " + u + " column, editor returned a value of false");
                    if (!(n instanceof Node)) return void console.warn("Filter Error - Cannot add filter to " + u + " column, editor should return an instance of Node, the editor returned:", n);
                    d.langBind("headerFilters|columns|" + e.definition.field, function(e) {
                        n.setAttribute("placeholder", void 0 !== e && e ? e : d.langText("headerFilters|default"));
                    }), n.addEventListener("click", function(e) {
                        e.stopPropagation(), n.focus();
                    }), n.addEventListener("focus", (e)=>{
                        var t = this.table.columnManager.contentsElement.scrollLeft;
                        t !== this.table.rowManager.element.scrollLeft && (this.table.rowManager.scrollHorizontal(t), this.table.columnManager.scrollHorizontal(t));
                    }), a = !1, l = function(e) {
                        a && clearTimeout(a), a = setTimeout(function() {
                            c(n.value);
                        }, d.table.options.headerFilterLiveFilterDelay);
                    }, e.modules.filter.headerElement = n, e.modules.filter.attrType = n.hasAttribute("type") ? n.getAttribute("type").toLowerCase() : "", e.modules.filter.tagType = n.tagName.toLowerCase(), !1 !== e.definition.headerFilterLiveFilter && ("autocomplete" !== e.definition.headerFilter && "tickCross" !== e.definition.headerFilter && ("autocomplete" !== e.definition.editor && "tickCross" !== e.definition.editor || !0 !== e.definition.headerFilter) && (n.addEventListener("keyup", l), n.addEventListener("search", l), "number" == e.modules.filter.attrType && n.addEventListener("change", function(e) {
                        c(n.value);
                    }), "text" == e.modules.filter.attrType && "ie" !== this.table.browser && n.setAttribute("type", "search")), "input" != e.modules.filter.tagType && "select" != e.modules.filter.tagType && "textarea" != e.modules.filter.tagType || n.addEventListener("mousedown", function(e) {
                        e.stopPropagation();
                    })), s.appendChild(n), e.contentElement.appendChild(s), i || d.headerFilterColumns.push(e);
                }
            } else console.warn("Filter Error - Cannot add header filter, column has no field set:", e.definition.title);
        }
        hideHeaderFilterElements() {
            this.headerFilterColumns.forEach(function(e) {
                e.modules.filter && e.modules.filter.headerElement && (e.modules.filter.headerElement.style.display = "none");
            });
        }
        showHeaderFilterElements() {
            this.headerFilterColumns.forEach(function(e) {
                e.modules.filter && e.modules.filter.headerElement && (e.modules.filter.headerElement.style.display = "");
            });
        }
        setHeaderFilterFocus(e) {
            e.modules.filter && e.modules.filter.headerElement ? e.modules.filter.headerElement.focus() : console.warn("Column Filter Focus Error - No header filter set on column:", e.getField());
        }
        getHeaderFilterValue(e) {
            if (e.modules.filter && e.modules.filter.headerElement) return e.modules.filter.value;
            console.warn("Column Filter Error - No header filter set on column:", e.getField());
        }
        setHeaderFilterValue(e, t) {
            e && (e.modules.filter && e.modules.filter.headerElement ? (this.generateHeaderFilterElement(e, t, !0), e.modules.filter.success(t)) : console.warn("Column Filter Error - No header filter set on column:", e.getField()));
        }
        reloadHeaderFilter(e) {
            e && (e.modules.filter && e.modules.filter.headerElement ? this.generateHeaderFilterElement(e, e.modules.filter.value, !0) : console.warn("Column Filter Error - No header filter set on column:", e.getField()));
        }
        refreshFilter() {
            this.tableInitialized && ("remote" === this.table.options.filterMode ? this.reloadData(null, !1, !1) : this.refreshData(!0));
        }
        trackChanges() {
            this.changed = !0, this.dispatch("filter-changed");
        }
        hasChanged() {
            var e = this.changed;
            return this.changed = !1, e;
        }
        setFilter(e, t, i, s) {
            this.filterList = [], Array.isArray(e) || (e = [
                {
                    field: e,
                    type: t,
                    value: i,
                    params: s
                }
            ]), this.addFilter(e);
        }
        addFilter(e, t, i, s) {
            var o = !1;
            Array.isArray(e) || (e = [
                {
                    field: e,
                    type: t,
                    value: i,
                    params: s
                }
            ]), e.forEach((e)=>{
                (e = this.findFilter(e)) && (this.filterList.push(e), o = !0);
            }), o && this.trackChanges();
        }
        findFilter(e) {
            var t;
            if (Array.isArray(e)) return this.findSubFilters(e);
            var i = !1;
            return "function" == typeof e.field ? i = function(t) {
                return e.field(t, e.type || {});
            } : oe.filters[e.type] ? i = (t = this.table.columnManager.getColumnByField(e.field)) ? function(i) {
                return oe.filters[e.type](e.value, t.getFieldValue(i), i, e.params || {});
            } : function(t) {
                return oe.filters[e.type](e.value, t[e.field], t, e.params || {});
            } : console.warn("Filter Error - No such filter type found, ignoring: ", e.type), e.func = i, !!e.func && e;
        }
        findSubFilters(e) {
            var t = [];
            return e.forEach((e)=>{
                (e = this.findFilter(e)) && t.push(e);
            }), !!t.length && t;
        }
        getFilters(e, t) {
            var i = [];
            return e && (i = this.getHeaderFilters()), t && i.forEach(function(e) {
                "function" == typeof e.type && (e.type = "function");
            }), i = i.concat(this.filtersToArray(this.filterList, t));
        }
        filtersToArray(e, t) {
            var i = [];
            return e.forEach((e)=>{
                var s;
                Array.isArray(e) ? i.push(this.filtersToArray(e, t)) : (s = {
                    field: e.field,
                    type: e.type,
                    value: e.value
                }, t && "function" == typeof s.type && (s.type = "function"), i.push(s));
            }), i;
        }
        getHeaderFilters() {
            var e = [];
            for(var t in this.headerFilters)e.push({
                field: t,
                type: this.headerFilters[t].type,
                value: this.headerFilters[t].value
            });
            return e;
        }
        removeFilter(e, t, i) {
            Array.isArray(e) || (e = [
                {
                    field: e,
                    type: t,
                    value: i
                }
            ]), e.forEach((e)=>{
                var t = -1;
                (t = "object" == typeof e.field ? this.filterList.findIndex((t)=>e === t) : this.filterList.findIndex((t)=>e.field === t.field && e.type === t.type && e.value === t.value)) > -1 ? this.filterList.splice(t, 1) : console.warn("Filter Error - No matching filter type found, ignoring: ", e.type);
            }), this.trackChanges();
        }
        clearFilter(e) {
            this.filterList = [], e && this.clearHeaderFilter(), this.trackChanges();
        }
        clearHeaderFilter() {
            this.headerFilters = {}, this.prevHeaderFilterChangeCheck = "{}", this.headerFilterColumns.forEach((e)=>{
                void 0 !== e.modules.filter.value && delete e.modules.filter.value, e.modules.filter.prevSuccess = void 0, this.reloadHeaderFilter(e);
            }), this.trackChanges();
        }
        search(e, t, i, s) {
            var o = [], n = [];
            return Array.isArray(t) || (t = [
                {
                    field: t,
                    type: i,
                    value: s
                }
            ]), t.forEach((e)=>{
                (e = this.findFilter(e)) && n.push(e);
            }), this.table.rowManager.rows.forEach((t)=>{
                var i = !0;
                n.forEach((e)=>{
                    this.filterRecurse(e, t.getData()) || (i = !1);
                }), i && o.push("data" === e ? t.getData("data") : t.getComponent());
            }), o;
        }
        filter(e, t) {
            var i = [], s = [];
            return this.subscribedExternal("dataFiltering") && this.dispatchExternal("dataFiltering", this.getFilters(!0)), "remote" !== this.table.options.filterMode && (this.filterList.length || Object.keys(this.headerFilters).length) ? e.forEach((e)=>{
                this.filterRow(e) && i.push(e);
            }) : i = e.slice(0), this.subscribedExternal("dataFiltered") && (i.forEach((e)=>{
                s.push(e.getComponent());
            }), this.dispatchExternal("dataFiltered", this.getFilters(!0), s)), i;
        }
        filterRow(e, t) {
            var i = !0, s = e.getData();
            for(var o in this.filterList.forEach((e)=>{
                this.filterRecurse(e, s) || (i = !1);
            }), this.headerFilters)this.headerFilters[o].func(s) || (i = !1);
            return i;
        }
        filterRecurse(e, t) {
            var i = !1;
            return Array.isArray(e) ? e.forEach((e)=>{
                this.filterRecurse(e, t) && (i = !0);
            }) : i = e.func(t), i;
        }
        constructor(e){
            super(e), this.filterList = [], this.headerFilters = {}, this.headerFilterColumns = [], this.prevHeaderFilterChangeCheck = "", this.prevHeaderFilterChangeCheck = "{}", this.changed = !1, this.tableInitialized = !1, this.registerTableOption("filterMode", "local"), this.registerTableOption("initialFilter", !1), this.registerTableOption("initialHeaderFilter", !1), this.registerTableOption("headerFilterLiveFilterDelay", 300), this.registerColumnOption("headerFilter"), this.registerColumnOption("headerFilterPlaceholder"), this.registerColumnOption("headerFilterParams"), this.registerColumnOption("headerFilterEmptyCheck"), this.registerColumnOption("headerFilterFunc"), this.registerColumnOption("headerFilterFuncParams"), this.registerColumnOption("headerFilterLiveFilter"), this.registerTableFunction("searchRows", this.searchRows.bind(this)), this.registerTableFunction("searchData", this.searchData.bind(this)), this.registerTableFunction("setFilter", this.userSetFilter.bind(this)), this.registerTableFunction("refreshFilter", this.userRefreshFilter.bind(this)), this.registerTableFunction("addFilter", this.userAddFilter.bind(this)), this.registerTableFunction("getFilters", this.getFilters.bind(this)), this.registerTableFunction("setHeaderFilterFocus", this.userSetHeaderFilterFocus.bind(this)), this.registerTableFunction("getHeaderFilterValue", this.userGetHeaderFilterValue.bind(this)), this.registerTableFunction("setHeaderFilterValue", this.userSetHeaderFilterValue.bind(this)), this.registerTableFunction("getHeaderFilters", this.getHeaderFilters.bind(this)), this.registerTableFunction("removeFilter", this.userRemoveFilter.bind(this)), this.registerTableFunction("clearFilter", this.userClearFilter.bind(this)), this.registerTableFunction("clearHeaderFilter", this.userClearHeaderFilter.bind(this)), this.registerComponentFunction("column", "headerFilterFocus", this.setHeaderFilterFocus.bind(this)), this.registerComponentFunction("column", "reloadHeaderFilter", this.reloadHeaderFilter.bind(this)), this.registerComponentFunction("column", "getHeaderFilterValue", this.getHeaderFilterValue.bind(this)), this.registerComponentFunction("column", "setHeaderFilterValue", this.setHeaderFilterValue.bind(this));
        }
    }
    oe.moduleName = "filter", oe.filters = se;
    var ne = {
        plaintext: function(e, t, i) {
            return this.emptyToSpace(this.sanitizeHTML(e.getValue()));
        },
        html: function(e, t, i) {
            return e.getValue();
        },
        textarea: function(e, t, i) {
            return e.getElement().style.whiteSpace = "pre-wrap", this.emptyToSpace(this.sanitizeHTML(e.getValue()));
        },
        money: function(e, t, i) {
            var s, o, n, r, a = parseFloat(e.getValue()), l = "", h = t.decimal || ".", d = t.thousand || ",", c = t.negativeSign || "-", u = t.symbol || "", p = !!t.symbolAfter, m = void 0 !== t.precision ? t.precision : 2;
            if (isNaN(a)) return this.emptyToSpace(this.sanitizeHTML(e.getValue()));
            if (a < 0 && (a = Math.abs(a), l = c), s = !1 !== m ? a.toFixed(m) : a, o = (s = String(s).split("."))[0], n = s.length > 1 ? h + s[1] : "", !1 !== t.thousand) for(r = /(\d+)(\d{3})/; r.test(o);)o = o.replace(r, "$1" + d + "$2");
            return p ? l + o + n + u : l + u + o + n;
        },
        link: function(e, t, i) {
            var s, o = e.getValue(), n = t.urlPrefix || "", r = t.download, a = o, l = document.createElement("a");
            if (t.labelField && (s = e.getData(), a = function e(t, i) {
                var s = i[t.shift()];
                return t.length && "object" == typeof s ? e(t, s) : s;
            }(t.labelField.split(this.table.options.nestedFieldSeparator), s)), t.label) switch(typeof t.label){
                case "string":
                    a = t.label;
                    break;
                case "function":
                    a = t.label(e);
            }
            if (a) {
                if (t.urlField && (o = (s = e.getData())[t.urlField]), t.url) switch(typeof t.url){
                    case "string":
                        o = t.url;
                        break;
                    case "function":
                        o = t.url(e);
                }
                return l.setAttribute("href", n + o), t.target && l.setAttribute("target", t.target), t.download && (r = "function" == typeof r ? r(e) : !0 === r ? "" : r, l.setAttribute("download", r)), l.innerHTML = this.emptyToSpace(this.sanitizeHTML(a)), l;
            }
            return "&nbsp;";
        },
        image: function(e, t, i) {
            var s = document.createElement("img"), o = e.getValue();
            switch(t.urlPrefix && (o = t.urlPrefix + e.getValue()), t.urlSuffix && (o += t.urlSuffix), s.setAttribute("src", o), typeof t.height){
                case "number":
                    s.style.height = t.height + "px";
                    break;
                case "string":
                    s.style.height = t.height;
            }
            switch(typeof t.width){
                case "number":
                    s.style.width = t.width + "px";
                    break;
                case "string":
                    s.style.width = t.width;
            }
            return s.addEventListener("load", function() {
                e.getRow().normalizeHeight();
            }), s;
        },
        tickCross: function(e, t, i) {
            var s = e.getValue(), o = e.getElement(), n = t.allowEmpty, r = t.allowTruthy, a = Object.keys(t).includes("trueValue"), l = void 0 !== t.tickElement ? t.tickElement : '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>', h = void 0 !== t.crossElement ? t.crossElement : '<svg enable-background="new 0 0 24 24" height="14" width="14"  viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';
            return a && s === t.trueValue || !a && (r && s || !0 === s || "true" === s || "True" === s || 1 === s || "1" === s) ? (o.setAttribute("aria-checked", !0), l || "") : !n || "null" !== s && "" !== s && null != s ? (o.setAttribute("aria-checked", !1), h || "") : (o.setAttribute("aria-checked", "mixed"), "");
        },
        datetime: function(e, t, i) {
            var s, o = window.DateTime || luxon.DateTime, n = t.inputFormat || "yyyy-MM-dd HH:mm:ss", r = t.outputFormat || "dd/MM/yyyy HH:mm:ss", a = void 0 !== t.invalidPlaceholder ? t.invalidPlaceholder : "", l = e.getValue();
            if (void 0 !== o) return (s = o.isDateTime(l) ? l : "iso" === n ? o.fromISO(String(l)) : o.fromFormat(String(l), n)).isValid ? (t.timezone && (s = s.setZone(t.timezone)), s.toFormat(r)) : !0 !== a && l ? "function" == typeof a ? a(l) : a : l;
            console.error("Format Error - 'datetime' formatter is dependant on luxon.js");
        },
        datetimediff: function(e, t, i) {
            var s, o = window.DateTime || luxon.DateTime, n = t.inputFormat || "yyyy-MM-dd HH:mm:ss", r = void 0 !== t.invalidPlaceholder ? t.invalidPlaceholder : "", a = void 0 !== t.suffix && t.suffix, l = void 0 !== t.unit ? t.unit : "days", h = void 0 !== t.humanize && t.humanize, d = void 0 !== t.date ? t.date : o.now(), c = e.getValue();
            if (void 0 !== o) return (s = o.isDateTime(c) ? c : "iso" === n ? o.fromISO(String(c)) : o.fromFormat(String(c), n)).isValid ? h ? s.diff(d, l).toHuman() + (a ? " " + a : "") : parseInt(s.diff(d, l)[l]) + (a ? " " + a : "") : !0 === r ? c : "function" == typeof r ? r(c) : r;
            console.error("Format Error - 'datetimediff' formatter is dependant on luxon.js");
        },
        lookup: function(e, t, i) {
            var s = e.getValue();
            return void 0 === t[s] ? (console.warn("Missing display value for " + s), s) : t[s];
        },
        star: function(e, t, i) {
            var s = e.getValue(), o = e.getElement(), n = t && t.stars ? t.stars : 5, r = document.createElement("span"), a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            r.style.verticalAlign = "middle", a.setAttribute("width", "14"), a.setAttribute("height", "14"), a.setAttribute("viewBox", "0 0 512 512"), a.setAttribute("xml:space", "preserve"), a.style.padding = "0 1px", s = s && !isNaN(s) ? parseInt(s) : 0, s = Math.max(0, Math.min(s, n));
            for(var l = 1; l <= n; l++){
                var h = a.cloneNode(!0);
                h.innerHTML = l <= s ? '<polygon fill="#FFEA00" stroke="#C1AB60" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>' : '<polygon fill="#D2D2D2" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>', r.appendChild(h);
            }
            return o.style.whiteSpace = "nowrap", o.style.overflow = "hidden", o.style.textOverflow = "ellipsis", o.setAttribute("aria-label", s), r;
        },
        traffic: function(e, t, i) {
            var s, o, n = this.sanitizeHTML(e.getValue()) || 0, r = document.createElement("span"), a = t && t.max ? t.max : 100, l = t && t.min ? t.min : 0, h = t && void 0 !== t.color ? t.color : [
                "red",
                "orange",
                "green"
            ], d = "#666666";
            if (!isNaN(n) && void 0 !== e.getValue()) {
                switch(r.classList.add("tabulator-traffic-light"), o = parseFloat(n) <= a ? parseFloat(n) : a, o = parseFloat(o) >= l ? parseFloat(o) : l, s = (a - l) / 100, o = Math.round((o - l) / s), typeof h){
                    case "string":
                        d = h;
                        break;
                    case "function":
                        d = h(n);
                        break;
                    case "object":
                        if (Array.isArray(h)) {
                            var c = 100 / h.length, u = Math.floor(o / c);
                            u = Math.min(u, h.length - 1), d = h[u = Math.max(u, 0)];
                            break;
                        }
                }
                return r.style.backgroundColor = d, r;
            }
        },
        progress: function(e, t = {}, i) {
            var o, n, r, a, l, h = this.sanitizeHTML(e.getValue()) || 0, d = e.getElement(), c = t.max ? t.max : 100, u = t.min ? t.min : 0, p = t.legendAlign ? t.legendAlign : "center";
            switch(n = parseFloat(h) <= c ? parseFloat(h) : c, n = parseFloat(n) >= u ? parseFloat(n) : u, o = (c - u) / 100, n = Math.round((n - u) / o), typeof t.color){
                case "string":
                    r = t.color;
                    break;
                case "function":
                    r = t.color(h);
                    break;
                case "object":
                    if (Array.isArray(t.color)) {
                        let e1 = 100 / t.color.length, i1 = Math.floor(n / e1);
                        i1 = Math.min(i1, t.color.length - 1), i1 = Math.max(i1, 0), r = t.color[i1];
                        break;
                    }
                default:
                    r = "#2DC214";
            }
            switch(typeof t.legend){
                case "string":
                    a = t.legend;
                    break;
                case "function":
                    a = t.legend(h);
                    break;
                case "boolean":
                    a = h;
                    break;
                default:
                    a = !1;
            }
            switch(typeof t.legendColor){
                case "string":
                    l = t.legendColor;
                    break;
                case "function":
                    l = t.legendColor(h);
                    break;
                case "object":
                    if (Array.isArray(t.legendColor)) {
                        let e2 = 100 / t.legendColor.length, i2 = Math.floor(n / e2);
                        i2 = Math.min(i2, t.legendColor.length - 1), i2 = Math.max(i2, 0), l = t.legendColor[i2];
                    }
                    break;
                default:
                    l = "#000";
            }
            d.style.minWidth = "30px", d.style.position = "relative", d.setAttribute("aria-label", n);
            var m = document.createElement("div");
            m.style.display = "inline-block", m.style.width = n + "%", m.style.backgroundColor = r, m.style.height = "100%", m.setAttribute("data-max", c), m.setAttribute("data-min", u);
            var g = document.createElement("div");
            if (g.style.position = "relative", g.style.width = "100%", g.style.height = "100%", a) {
                var b = document.createElement("div");
                b.style.position = "absolute", b.style.top = 0, b.style.left = 0, b.style.textAlign = p, b.style.width = "100%", b.style.color = l, b.innerHTML = a;
            }
            return i(function() {
                if (!(e instanceof s)) {
                    var t = document.createElement("div");
                    t.style.position = "absolute", t.style.top = "4px", t.style.bottom = "4px", t.style.left = "4px", t.style.right = "4px", d.appendChild(t), d = t;
                }
                d.appendChild(g), g.appendChild(m), a && g.appendChild(b);
            }), "";
        },
        color: function(e, t, i) {
            return e.getElement().style.backgroundColor = this.sanitizeHTML(e.getValue()), "";
        },
        buttonTick: function(e, t, i) {
            return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>';
        },
        buttonCross: function(e, t, i) {
            return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';
        },
        rownum: function(e, t, i) {
            var s = document.createElement("span");
            return e.getRow().watchPosition((e)=>{
                s.innerText = e;
            }), s;
        },
        handle: function(e, t, i) {
            return e.getElement().classList.add("tabulator-row-handle"), "<div class='tabulator-row-handle-box'><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div></div>";
        },
        responsiveCollapse: function(e, t, i) {
            var s = document.createElement("div"), o = e.getRow()._row.modules.responsiveLayout;
            function n(e) {
                var t = o.element;
                o.open = e, t && (o.open ? (s.classList.add("open"), t.style.display = "") : (s.classList.remove("open"), t.style.display = "none"));
            }
            return s.classList.add("tabulator-responsive-collapse-toggle"), s.innerHTML = '<svg class=\'tabulator-responsive-collapse-toggle-open\' viewbox="0 0 24 24">\n  <line x1="7" y1="12" x2="17" y2="12" fill="none" stroke-width="3" stroke-linecap="round" />\n  <line y1="7" x1="12" y2="17" x2="12" fill="none" stroke-width="3" stroke-linecap="round" />\n</svg>\n\n<svg class=\'tabulator-responsive-collapse-toggle-close\' viewbox="0 0 24 24">\n  <line x1="7" y1="12" x2="17" y2="12"  fill="none" stroke-width="3" stroke-linecap="round" />\n</svg>', e.getElement().classList.add("tabulator-row-handle"), s.addEventListener("click", function(t) {
                t.stopImmediatePropagation(), n(!o.open), e.getTable().rowManager.adjustTableSize();
            }), n(o.open), s;
        },
        rowSelection: function(e, t, i) {
            var s = document.createElement("input"), o = !1;
            if (s.type = "checkbox", s.setAttribute("aria-label", "Select Row"), this.table.modExists("selectRow", !0)) {
                if (s.addEventListener("click", (e)=>{
                    e.stopPropagation();
                }), "function" == typeof e.getRow) {
                    var n = e.getRow();
                    n instanceof u ? (s.addEventListener("change", (e)=>{
                        "click" === this.table.options.selectableRangeMode && o ? o = !1 : n.toggleSelect();
                    }), "click" === this.table.options.selectableRangeMode && s.addEventListener("click", (e)=>{
                        o = !0, this.table.modules.selectRow.handleComplexRowClick(n._row, e);
                    }), s.checked = n.isSelected && n.isSelected(), this.table.modules.selectRow.registerRowSelectCheckbox(n, s)) : s = "";
                } else s.addEventListener("change", (e)=>{
                    this.table.modules.selectRow.selectedRows.length ? this.table.deselectRow() : this.table.selectRow(t.rowRange);
                }), this.table.modules.selectRow.registerHeaderSelectCheckbox(s);
            }
            return s;
        }
    };
    class re extends k {
        initialize() {
            this.subscribe("cell-format", this.formatValue.bind(this)), this.subscribe("cell-rendered", this.cellRendered.bind(this)), this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("column-format", this.formatHeader.bind(this));
        }
        initializeColumn(e) {
            e.modules.format = this.lookupFormatter(e, ""), void 0 !== e.definition.formatterPrint && (e.modules.format.print = this.lookupFormatter(e, "Print")), void 0 !== e.definition.formatterClipboard && (e.modules.format.clipboard = this.lookupFormatter(e, "Clipboard")), void 0 !== e.definition.formatterHtmlOutput && (e.modules.format.htmlOutput = this.lookupFormatter(e, "HtmlOutput"));
        }
        lookupFormatter(e, t) {
            var i = {
                params: e.definition["formatter" + t + "Params"] || {}
            }, s = e.definition["formatter" + t];
            switch(typeof s){
                case "string":
                    re.formatters[s] ? i.formatter = re.formatters[s] : (console.warn("Formatter Error - No such formatter found: ", s), i.formatter = re.formatters.plaintext);
                    break;
                case "function":
                    i.formatter = s;
                    break;
                default:
                    i.formatter = re.formatters.plaintext;
            }
            return i;
        }
        cellRendered(e) {
            e.modules.format && e.modules.format.renderedCallback && !e.modules.format.rendered && (e.modules.format.renderedCallback(), e.modules.format.rendered = !0);
        }
        formatHeader(e, t, i) {
            var s, o, n, r;
            return e.definition.titleFormatter ? (s = this.getFormatter(e.definition.titleFormatter), n = (t)=>{
                e.titleFormatterRendered = t;
            }, r = {
                getValue: function() {
                    return t;
                },
                getElement: function() {
                    return i;
                },
                getColumn: function() {
                    return e.getComponent();
                },
                getTable: ()=>this.table
            }, o = "function" == typeof (o = e.definition.titleFormatterParams || {}) ? o() : o, s.call(this, r, o, n)) : t;
        }
        formatValue(e) {
            var t = e.getComponent(), i = "function" == typeof e.column.modules.format.params ? e.column.modules.format.params(t) : e.column.modules.format.params;
            return e.column.modules.format.formatter.call(this, t, i, function(t) {
                e.modules.format || (e.modules.format = {}), e.modules.format.renderedCallback = t, e.modules.format.rendered = !1;
            });
        }
        formatExportValue(e, t) {
            var i, s = e.column.modules.format[t];
            if (s) {
                function o(t) {
                    e.modules.format || (e.modules.format = {}), e.modules.format.renderedCallback = t, e.modules.format.rendered = !1;
                }
                return i = "function" == typeof s.params ? s.params(e.getComponent()) : s.params, s.formatter.call(this, e.getComponent(), i, o);
            }
            return this.formatValue(e);
        }
        sanitizeHTML(e) {
            if (e) {
                var t = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                };
                return String(e).replace(/[&<>"'`=/]/g, function(e) {
                    return t[e];
                });
            }
            return e;
        }
        emptyToSpace(e) {
            return null == e || "" === e ? "&nbsp;" : e;
        }
        getFormatter(e) {
            switch(typeof e){
                case "string":
                    re.formatters[e] ? e = re.formatters[e] : (console.warn("Formatter Error - No such formatter found: ", e), e = re.formatters.plaintext);
                    break;
                case "function":
                    break;
                default:
                    e = re.formatters.plaintext;
            }
            return e;
        }
        constructor(e){
            super(e), this.registerColumnOption("formatter"), this.registerColumnOption("formatterParams"), this.registerColumnOption("formatterPrint"), this.registerColumnOption("formatterPrintParams"), this.registerColumnOption("formatterClipboard"), this.registerColumnOption("formatterClipboardParams"), this.registerColumnOption("formatterHtmlOutput"), this.registerColumnOption("formatterHtmlOutputParams"), this.registerColumnOption("titleFormatter"), this.registerColumnOption("titleFormatterParams");
        }
    }
    re.moduleName = "format", re.formatters = ne;
    class ae extends k {
        reset() {
            this.initializationMode = "left", this.leftColumns = [], this.rightColumns = [], this.active = !1;
        }
        initialize() {
            this.subscribe("cell-layout", this.layoutCell.bind(this)), this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("column-width", this.layout.bind(this)), this.subscribe("row-layout-after", this.layoutRow.bind(this)), this.subscribe("table-layout", this.layout.bind(this)), this.subscribe("columns-loading", this.reset.bind(this)), this.subscribe("column-add", this.reinitializeColumns.bind(this)), this.subscribe("column-delete", this.reinitializeColumns.bind(this)), this.subscribe("table-redraw", this.layout.bind(this)), this.subscribe("layout-refreshing", this.blockLayout.bind(this)), this.subscribe("layout-refreshed", this.unblockLayout.bind(this)), this.subscribe("scrollbar-vertical", this.adjustForScrollbar.bind(this));
        }
        blockLayout() {
            this.blocked = !0;
        }
        unblockLayout() {
            this.blocked = !1;
        }
        layoutCell(e) {
            this.layoutElement(e.element, e.column);
        }
        reinitializeColumns() {
            this.reset(), this.table.columnManager.columnsByIndex.forEach((e)=>{
                this.initializeColumn(e);
            });
        }
        initializeColumn(e) {
            var t = {
                margin: 0,
                edge: !1
            };
            e.isGroup || (this.frozenCheck(e) ? (t.position = this.initializationMode, "left" == this.initializationMode ? this.leftColumns.push(e) : this.rightColumns.unshift(e), this.active = !0, e.modules.frozen = t) : this.initializationMode = "right");
        }
        frozenCheck(e) {
            return e.parent.isGroup && e.definition.frozen && console.warn("Frozen Column Error - Parent column group must be frozen, not individual columns or sub column groups"), e.parent.isGroup ? this.frozenCheck(e.parent) : e.definition.frozen;
        }
        layoutCalcRows() {
            this.table.modExists("columnCalcs") && (this.table.modules.columnCalcs.topInitialized && this.table.modules.columnCalcs.topRow && this.layoutRow(this.table.modules.columnCalcs.topRow), this.table.modules.columnCalcs.botInitialized && this.table.modules.columnCalcs.botRow && this.layoutRow(this.table.modules.columnCalcs.botRow), this.table.modExists("groupRows") && this.layoutGroupCalcs(this.table.modules.groupRows.getGroups()));
        }
        layoutGroupCalcs(e) {
            e.forEach((e)=>{
                e.calcs.top && this.layoutRow(e.calcs.top), e.calcs.bottom && this.layoutRow(e.calcs.bottom), e.groupList && e.groupList.length && this.layoutGroupCalcs(e.groupList);
            });
        }
        layoutColumnPosition(e) {
            var t = [], i = 0, s = 0;
            this.leftColumns.forEach((s, o)=>{
                if (s.modules.frozen.marginValue = i, s.modules.frozen.margin = s.modules.frozen.marginValue + "px", s.visible && (i += s.getWidth()), o == this.leftColumns.length - 1 ? s.modules.frozen.edge = !0 : s.modules.frozen.edge = !1, s.parent.isGroup) {
                    var n = this.getColGroupParentElement(s);
                    t.includes(n) || (this.layoutElement(n, s), t.push(n)), s.modules.frozen.edge && n.classList.add("tabulator-frozen-" + s.modules.frozen.position);
                } else this.layoutElement(s.getElement(), s);
                e && s.cells.forEach((e)=>{
                    this.layoutElement(e.getElement(!0), s);
                });
            }), this.rightColumns.forEach((t, i)=>{
                t.modules.frozen.marginValue = s, t.modules.frozen.margin = t.modules.frozen.marginValue + "px", t.visible && (s += t.getWidth()), i == this.rightColumns.length - 1 ? t.modules.frozen.edge = !0 : t.modules.frozen.edge = !1, t.parent.isGroup ? this.layoutElement(this.getColGroupParentElement(t), t) : this.layoutElement(t.getElement(), t), e && t.cells.forEach((e)=>{
                    this.layoutElement(e.getElement(!0), t);
                });
            });
        }
        getColGroupParentElement(e) {
            return e.parent.isGroup ? this.getColGroupParentElement(e.parent) : e.getElement();
        }
        layout() {
            this.active && !this.blocked && (this.layoutColumnPosition(), this.reinitializeRows(), this.layoutCalcRows());
        }
        reinitializeRows() {
            var e = this.table.rowManager.getVisibleRows(!0);
            this.table.rowManager.getRows().filter((t)=>!e.includes(t)).forEach((e)=>{
                e.deinitialize();
            }), e.forEach((e)=>{
                "row" === e.type && this.layoutRow(e);
            });
        }
        layoutRow(e) {
            "fitDataFill" === this.table.options.layout && this.rightColumns.length && (this.table.rowManager.getTableElement().style.minWidth = "calc(100% - " + this.rightMargin + ")"), this.leftColumns.forEach((t)=>{
                var i = e.getCell(t);
                i && this.layoutElement(i.getElement(!0), t);
            }), this.rightColumns.forEach((t)=>{
                var i = e.getCell(t);
                i && this.layoutElement(i.getElement(!0), t);
            });
        }
        layoutElement(e, t) {
            var i;
            t.modules.frozen && (e.style.position = "sticky", i = this.table.rtl ? "left" === t.modules.frozen.position ? "right" : "left" : t.modules.frozen.position, e.style[i] = t.modules.frozen.margin, e.classList.add("tabulator-frozen"), t.modules.frozen.edge && e.classList.add("tabulator-frozen-" + t.modules.frozen.position));
        }
        adjustForScrollbar(e) {
            this.rightColumns.length && (this.table.columnManager.getContentsElement().style.width = "calc(100% - " + e + "px)");
        }
        _calcSpace(e, t) {
            var i = 0;
            for(let s = 0; s < t; s++)e[s].visible && (i += e[s].getWidth());
            return i;
        }
        constructor(e){
            super(e), this.leftColumns = [], this.rightColumns = [], this.initializationMode = "left", this.active = !1, this.blocked = !0, this.registerColumnOption("frozen");
        }
    }
    ae.moduleName = "frozenColumns";
    class le extends k {
        initialize() {
            this.rows = [], this.topElement.classList.add("tabulator-frozen-rows-holder"), this.table.columnManager.getContentsElement().insertBefore(this.topElement, this.table.columnManager.headersElement.nextSibling), this.subscribe("row-deleting", this.detachRow.bind(this)), this.subscribe("rows-visible", this.visibleRows.bind(this)), this.registerDisplayHandler(this.getRows.bind(this), 10), this.table.options.frozenRows && (this.subscribe("data-processed", this.initializeRows.bind(this)), this.subscribe("row-added", this.initializeRow.bind(this)));
        }
        initializeRows() {
            this.table.rowManager.getRows().forEach((e)=>{
                this.initializeRow(e);
            });
        }
        initializeRow(e) {
            var t = this.table.options.frozenRows, i = typeof t;
            "number" === i ? e.getPosition() && e.getPosition() + this.rows.length <= t && this.freezeRow(e) : "function" === i ? t.call(this.table, e.getComponent()) && this.freezeRow(e) : Array.isArray(t) && t.includes(e.data[this.options("frozenRowsField")]) && this.freezeRow(e);
        }
        isRowFrozen(e) {
            return this.rows.indexOf(e) > -1;
        }
        isFrozen() {
            return !!this.rows.length;
        }
        visibleRows(e, t) {
            return this.rows.forEach((e)=>{
                t.push(e);
            }), t;
        }
        getRows(e) {
            var t = e.slice(0);
            return this.rows.forEach(function(e) {
                var i = t.indexOf(e);
                i > -1 && t.splice(i, 1);
            }), t;
        }
        freezeRow(e) {
            e.modules.frozen ? console.warn("Freeze Error - Row is already frozen") : (e.modules.frozen = !0, this.topElement.appendChild(e.getElement()), e.initialize(), e.normalizeHeight(), this.rows.push(e), this.refreshData(!1, "display"), this.table.rowManager.adjustTableSize(), this.styleRows());
        }
        unfreezeRow(e) {
            e.modules.frozen ? (e.modules.frozen = !1, this.detachRow(e), this.table.rowManager.adjustTableSize(), this.refreshData(!1, "display"), this.rows.length && this.styleRows()) : console.warn("Freeze Error - Row is already unfrozen");
        }
        detachRow(e) {
            var t = this.rows.indexOf(e);
            if (t > -1) {
                var i = e.getElement();
                i.parentNode && i.parentNode.removeChild(i), this.rows.splice(t, 1);
            }
        }
        styleRows(e) {
            this.rows.forEach((e, t)=>{
                this.table.rowManager.styleRow(e, t);
            });
        }
        constructor(e){
            super(e), this.topElement = document.createElement("div"), this.rows = [], this.registerComponentFunction("row", "freeze", this.freezeRow.bind(this)), this.registerComponentFunction("row", "unfreeze", this.unfreezeRow.bind(this)), this.registerComponentFunction("row", "isFrozen", this.isRowFrozen.bind(this)), this.registerTableOption("frozenRowsField", "id"), this.registerTableOption("frozenRows", !1);
        }
    }
    le.moduleName = "frozenRows";
    class he {
        getKey() {
            return this._group.key;
        }
        getField() {
            return this._group.field;
        }
        getElement() {
            return this._group.element;
        }
        getRows() {
            return this._group.getRows(!0);
        }
        getSubGroups() {
            return this._group.getSubGroups(!0);
        }
        getParentGroup() {
            return !!this._group.parent && this._group.parent.getComponent();
        }
        isVisible() {
            return this._group.visible;
        }
        show() {
            this._group.show();
        }
        hide() {
            this._group.hide();
        }
        toggle() {
            this._group.toggleVisibility();
        }
        _getSelf() {
            return this._group;
        }
        getTable() {
            return this._group.groupManager.table;
        }
        constructor(e){
            return this._group = e, this.type = "GroupComponent", new Proxy(this, {
                get: function(e, t, i) {
                    return void 0 !== e[t] ? e[t] : e._group.groupManager.table.componentFunctionBinder.handle("row", e._group, t);
                }
            });
        }
    }
    class de {
        wipe() {
            this.groupList.length ? this.groupList.forEach(function(e) {
                e.wipe();
            }) : this.rows.forEach((e)=>{
                e.modules && delete e.modules.group;
            }), this.element = !1, this.arrowElement = !1, this.elementContents = !1;
        }
        createElements() {
            var e = document.createElement("div");
            e.classList.add("tabulator-arrow"), this.element = document.createElement("div"), this.element.classList.add("tabulator-row"), this.element.classList.add("tabulator-group"), this.element.classList.add("tabulator-group-level-" + this.level), this.element.setAttribute("role", "rowgroup"), this.arrowElement = document.createElement("div"), this.arrowElement.classList.add("tabulator-group-toggle"), this.arrowElement.appendChild(e), !1 !== this.groupManager.table.options.movableRows && this.groupManager.table.modExists("moveRow") && this.groupManager.table.modules.moveRow.initializeGroupHeader(this);
        }
        createValueGroups() {
            var e = this.level + 1;
            this.groupManager.allowedValues && this.groupManager.allowedValues[e] && this.groupManager.allowedValues[e].forEach((t)=>{
                this._createGroup(t, e);
            });
        }
        addBindings() {
            this.groupManager.table.options.groupToggleElement && ("arrow" == this.groupManager.table.options.groupToggleElement ? this.arrowElement : this.element).addEventListener("click", (e)=>{
                e.stopPropagation(), e.stopImmediatePropagation(), this.toggleVisibility();
            });
        }
        _createGroup(e, t) {
            var i = t + "_" + e, s = new de(this.groupManager, this, t, e, this.groupManager.groupIDLookups[t].field, this.groupManager.headerGenerator[t] || this.groupManager.headerGenerator[0], !!this.old && this.old.groups[i]);
            this.groups[i] = s, this.groupList.push(s);
        }
        _addRowToGroup(e) {
            var t = this.level + 1;
            if (this.hasSubGroups) {
                var i = this.groupManager.groupIDLookups[t].func(e.getData()), s = t + "_" + i;
                this.groupManager.allowedValues && this.groupManager.allowedValues[t] ? this.groups[s] && this.groups[s].addRow(e) : (this.groups[s] || this._createGroup(i, t), this.groups[s].addRow(e));
            }
        }
        _addRow(e) {
            this.rows.push(e), e.modules.group = this;
        }
        insertRow(e, t, i) {
            var s = this.conformRowData({});
            e.updateData(s);
            var o = this.rows.indexOf(t);
            o > -1 ? i ? this.rows.splice(o + 1, 0, e) : this.rows.splice(o, 0, e) : i ? this.rows.push(e) : this.rows.unshift(e), e.modules.group = this, this.generateGroupHeaderContents(), this.groupManager.table.modExists("columnCalcs") && "table" != this.groupManager.table.options.columnCalcs && this.groupManager.table.modules.columnCalcs.recalcGroup(this), this.groupManager.updateGroupRows(!0);
        }
        scrollHeader(e) {
            this.arrowElement && (this.arrowElement.style.marginLeft = e, this.groupList.forEach(function(t) {
                t.scrollHeader(e);
            }));
        }
        getRowIndex(e) {}
        conformRowData(e) {
            return this.field ? e[this.field] = this.key : console.warn("Data Conforming Error - Cannot conform row data to match new group as groupBy is a function"), this.parent && (e = this.parent.conformRowData(e)), e;
        }
        removeRow(e) {
            var t = this.rows.indexOf(e), i = e.getElement();
            t > -1 && this.rows.splice(t, 1), this.groupManager.table.options.groupValues || this.rows.length ? (i.parentNode && i.parentNode.removeChild(i), this.generateGroupHeaderContents(), this.groupManager.table.modExists("columnCalcs") && "table" != this.groupManager.table.options.columnCalcs && this.groupManager.table.modules.columnCalcs.recalcGroup(this)) : (this.parent ? this.parent.removeGroup(this) : this.groupManager.removeGroup(this), this.groupManager.updateGroupRows(!0));
        }
        removeGroup(e) {
            var t, i = e.level + "_" + e.key;
            this.groups[i] && (delete this.groups[i], (t = this.groupList.indexOf(e)) > -1 && this.groupList.splice(t, 1), this.groupList.length || (this.parent ? this.parent.removeGroup(this) : this.groupManager.removeGroup(this)));
        }
        getHeadersAndRows() {
            var e = [];
            return e.push(this), this._visSet(), this.calcs.top && (this.calcs.top.detachElement(), this.calcs.top.deleteCells()), this.calcs.bottom && (this.calcs.bottom.detachElement(), this.calcs.bottom.deleteCells()), this.visible ? this.groupList.length ? this.groupList.forEach(function(t) {
                e = e.concat(t.getHeadersAndRows());
            }) : ("table" != this.groupManager.table.options.columnCalcs && this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.modules.columnCalcs.hasTopCalcs() && (this.calcs.top = this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows), e.push(this.calcs.top)), e = e.concat(this.rows), "table" != this.groupManager.table.options.columnCalcs && this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.modules.columnCalcs.hasBottomCalcs() && (this.calcs.bottom = this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows), e.push(this.calcs.bottom))) : this.groupList.length || "table" == this.groupManager.table.options.columnCalcs || this.groupManager.table.modExists("columnCalcs") && (this.groupManager.table.modules.columnCalcs.hasTopCalcs() && this.groupManager.table.options.groupClosedShowCalcs && (this.calcs.top = this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows), e.push(this.calcs.top)), this.groupManager.table.modules.columnCalcs.hasBottomCalcs() && this.groupManager.table.options.groupClosedShowCalcs && (this.calcs.bottom = this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows), e.push(this.calcs.bottom))), e;
        }
        getData(e, t) {
            var i = [];
            return this._visSet(), (!e || e && this.visible) && this.rows.forEach((e)=>{
                i.push(e.getData(t || "data"));
            }), i;
        }
        getRowCount() {
            var e = 0;
            return this.groupList.length ? this.groupList.forEach((t)=>{
                e += t.getRowCount();
            }) : e = this.rows.length, e;
        }
        toggleVisibility() {
            this.visible ? this.hide() : this.show();
        }
        hide() {
            this.visible = !1, "basic" != this.groupManager.table.rowManager.getRenderMode() || this.groupManager.table.options.pagination || (this.element.classList.remove("tabulator-group-visible"), this.groupList.length ? this.groupList.forEach((e)=>{
                e.getHeadersAndRows().forEach((e)=>{
                    e.detachElement();
                });
            }) : this.rows.forEach((e)=>{
                var t = e.getElement();
                t.parentNode.removeChild(t);
            })), this.groupManager.updateGroupRows(!0), this.groupManager.table.externalEvents.dispatch("groupVisibilityChanged", this.getComponent(), !1);
        }
        show() {
            if (this.visible = !0, "basic" != this.groupManager.table.rowManager.getRenderMode() || this.groupManager.table.options.pagination) this.groupManager.updateGroupRows(!0);
            else {
                this.element.classList.add("tabulator-group-visible");
                var e = this.generateElement();
                this.groupList.length ? this.groupList.forEach((t)=>{
                    t.getHeadersAndRows().forEach((t)=>{
                        var i = t.getElement();
                        e.parentNode.insertBefore(i, e.nextSibling), t.initialize(), e = i;
                    });
                }) : this.rows.forEach((t)=>{
                    var i = t.getElement();
                    e.parentNode.insertBefore(i, e.nextSibling), t.initialize(), e = i;
                }), this.groupManager.updateGroupRows(!0);
            }
            this.groupManager.table.externalEvents.dispatch("groupVisibilityChanged", this.getComponent(), !0);
        }
        _visSet() {
            var e = [];
            "function" == typeof this.visible && (this.rows.forEach(function(t) {
                e.push(t.getData());
            }), this.visible = this.visible(this.key, this.getRowCount(), e, this.getComponent()));
        }
        getRowGroup(e) {
            var t = !1;
            return this.groupList.length ? this.groupList.forEach(function(i) {
                var s = i.getRowGroup(e);
                s && (t = s);
            }) : this.rows.find(function(t) {
                return t === e;
            }) && (t = this), t;
        }
        getSubGroups(e) {
            var t = [];
            return this.groupList.forEach(function(i) {
                t.push(e ? i.getComponent() : i);
            }), t;
        }
        getRows(e) {
            var t = [];
            return this.rows.forEach(function(i) {
                t.push(e ? i.getComponent() : i);
            }), t;
        }
        generateGroupHeaderContents() {
            var e = [];
            for(this.rows.forEach(function(t) {
                e.push(t.getData());
            }), this.elementContents = this.generator(this.key, this.getRowCount(), e, this.getComponent()); this.element.firstChild;)this.element.removeChild(this.element.firstChild);
            "string" == typeof this.elementContents ? this.element.innerHTML = this.elementContents : this.element.appendChild(this.elementContents), this.element.insertBefore(this.arrowElement, this.element.firstChild);
        }
        getPath(e = []) {
            return e.unshift(this.key), this.parent && this.parent.getPath(e), e;
        }
        getElement() {
            return this.elementContents ? this.element : this.generateElement();
        }
        generateElement() {
            this.addBindings = !1, this._visSet(), this.visible ? this.element.classList.add("tabulator-group-visible") : this.element.classList.remove("tabulator-group-visible");
            for(var e = 0; e < this.element.childNodes.length; ++e)this.element.childNodes[e].parentNode.removeChild(this.element.childNodes[e]);
            return this.generateGroupHeaderContents(), this.element;
        }
        detachElement() {
            this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element);
        }
        normalizeHeight() {
            this.setHeight(this.element.clientHeight);
        }
        initialize(e) {
            this.initialized && !e || (this.normalizeHeight(), this.initialized = !0);
        }
        reinitialize() {
            this.initialized = !1, this.height = 0, r.elVisible(this.element) && this.initialize(!0);
        }
        setHeight(e) {
            this.height != e && (this.height = e, this.outerHeight = this.element.offsetHeight);
        }
        getHeight() {
            return this.outerHeight;
        }
        getGroup() {
            return this;
        }
        reinitializeHeight() {}
        calcHeight() {}
        setCellHeight() {}
        clearCellHeight() {}
        deinitializeHeight() {}
        getComponent() {
            return this.component || (this.component = new he(this)), this.component;
        }
        constructor(e, t, i, s, o, n, r){
            this.groupManager = e, this.parent = t, this.key = s, this.level = i, this.field = o, this.hasSubGroups = i < e.groupIDLookups.length - 1, this.addRow = this.hasSubGroups ? this._addRowToGroup : this._addRow, this.type = "group", this.old = r, this.rows = [], this.groups = [], this.groupList = [], this.generator = n, this.element = !1, this.elementContents = !1, this.height = 0, this.outerHeight = 0, this.initialized = !1, this.calcs = {}, this.initialized = !1, this.modules = {}, this.arrowElement = !1, this.visible = r ? r.visible : void 0 !== e.startOpen[i] ? e.startOpen[i] : e.startOpen[0], this.component = null, this.createElements(), this.addBindings(), this.createValueGroups();
        }
    }
    class ce extends k {
        initialize() {
            this.table.options.groupBy && (this.table.options.groupUpdateOnCellEdit && (this.subscribe("cell-value-updated", this.cellUpdated.bind(this)), this.subscribe("row-data-changed", this.reassignRowToGroup.bind(this), 0)), this.subscribe("table-built", this.configureGroupSetup.bind(this)), this.subscribe("row-deleting", this.rowDeleting.bind(this)), this.subscribe("row-deleted", this.rowsUpdated.bind(this)), this.subscribe("scroll-horizontal", this.scrollHeaders.bind(this)), this.subscribe("rows-wipe", this.wipe.bind(this)), this.subscribe("rows-added", this.rowsUpdated.bind(this)), this.subscribe("row-moving", this.rowMoving.bind(this)), this.subscribe("row-adding-index", this.rowAddingIndex.bind(this)), this.subscribe("rows-sample", this.rowSample.bind(this)), this.subscribe("render-virtual-fill", this.virtualRenderFill.bind(this)), this.registerDisplayHandler(this.displayHandler, 20), this.initialized = !0);
        }
        configureGroupSetup() {
            if (this.table.options.groupBy) {
                var e = this.table.options.groupBy, t = this.table.options.groupStartOpen, i = this.table.options.groupHeader;
                if (this.allowedValues = this.table.options.groupValues, Array.isArray(e) && Array.isArray(i) && e.length > i.length && console.warn("Error creating group headers, groupHeader array is shorter than groupBy array"), this.headerGenerator = [
                    function() {
                        return "";
                    }
                ], this.startOpen = [
                    function() {
                        return !1;
                    }
                ], this.langBind("groups|item", (e, t)=>{
                    this.headerGenerator[0] = (i, s, o)=>(void 0 === i ? "" : i) + "<span>(" + s + " " + (1 === s ? e : t.groups.items) + ")</span>";
                }), this.groupIDLookups = [], Array.isArray(e)) this.table.modExists("columnCalcs") && "table" != this.table.options.columnCalcs && "both" != this.table.options.columnCalcs && this.table.modules.columnCalcs.removeCalcs();
                else if (this.table.modExists("columnCalcs") && "group" != this.table.options.columnCalcs) this.table.columnManager.getRealColumns().forEach((e)=>{
                    e.definition.topCalc && this.table.modules.columnCalcs.initializeTopRow(), e.definition.bottomCalc && this.table.modules.columnCalcs.initializeBottomRow();
                });
                Array.isArray(e) || (e = [
                    e
                ]), e.forEach((e, t)=>{
                    var i, s;
                    i = "function" == typeof e ? e : (s = this.table.columnManager.getColumnByField(e)) ? function(e) {
                        return s.getFieldValue(e);
                    } : function(t) {
                        return t[e];
                    }, this.groupIDLookups.push({
                        field: "function" != typeof e && e,
                        func: i,
                        values: !!this.allowedValues && this.allowedValues[t]
                    });
                }), t && (Array.isArray(t) || (t = [
                    t
                ]), t.forEach((e)=>{}), this.startOpen = t), i && (this.headerGenerator = Array.isArray(i) ? i : [
                    i
                ]);
            } else this.groupList = [], this.groups = {};
        }
        rowSample(e, t) {
            if (this.table.options.groupBy) {
                var i = this.getGroups(!1)[0];
                t.push(i.getRows(!1)[0]);
            }
            return t;
        }
        virtualRenderFill() {
            var e = this.table.rowManager.tableElement, t = this.table.rowManager.getVisibleRows();
            if (!this.table.options.groupBy) return t;
            t = t.filter((e)=>"group" !== e.type), e.style.minWidth = t.length ? "" : this.table.columnManager.getWidth() + "px";
        }
        rowAddingIndex(e, t, i) {
            if (this.table.options.groupBy) {
                this.assignRowToGroup(e);
                var s = e.modules.group.rows;
                return s.length > 1 && (!t || t && -1 == s.indexOf(t) ? i ? s[0] !== e && (t = s[0], this.table.rowManager.moveRowInArray(e.modules.group.rows, e, t, !i)) : s[s.length - 1] !== e && (t = s[s.length - 1], this.table.rowManager.moveRowInArray(e.modules.group.rows, e, t, !i)) : this.table.rowManager.moveRowInArray(e.modules.group.rows, e, t, !i)), t;
            }
        }
        trackChanges() {
            this.dispatch("group-changed");
        }
        setGroupBy(e) {
            this.table.options.groupBy = e, this.initialized || this.initialize(), this.configureGroupSetup(), this.refreshData(), this.trackChanges();
        }
        setGroupValues(e) {
            this.table.options.groupValues = e, this.configureGroupSetup(), this.refreshData(), this.trackChanges();
        }
        setGroupStartOpen(e) {
            this.table.options.groupStartOpen = e, this.configureGroupSetup(), this.table.options.groupBy ? (this.refreshData(), this.trackChanges()) : console.warn("Grouping Update - cant refresh view, no groups have been set");
        }
        setGroupHeader(e) {
            this.table.options.groupHeader = e, this.configureGroupSetup(), this.table.options.groupBy ? (this.refreshData(), this.trackChanges()) : console.warn("Grouping Update - cant refresh view, no groups have been set");
        }
        userGetGroups(e) {
            return this.getGroups(!0);
        }
        userGetGroupedData() {
            return this.table.options.groupBy ? this.getGroupedData() : this.getData();
        }
        rowGetGroup(e) {
            return !!e.modules.group && e.modules.group.getComponent();
        }
        rowMoving(e, t, i) {
            if (this.table.options.groupBy) {
                !i && t instanceof de && (t = this.table.rowManager.prevDisplayRow(e) || t);
                var s = t instanceof de ? t : t.modules.group, o = e instanceof de ? e : e.modules.group;
                s === o ? this.table.rowManager.moveRowInArray(s.rows, e, t, i) : (o && o.removeRow(e), s.insertRow(e, t, i));
            }
        }
        rowDeleting(e) {
            this.table.options.groupBy && e.modules.group && e.modules.group.removeRow(e);
        }
        rowsUpdated(e) {
            this.table.options.groupBy && this.updateGroupRows(!0);
        }
        cellUpdated(e) {
            this.table.options.groupBy && this.reassignRowToGroup(e.row);
        }
        getRows(e) {
            return this.table.options.groupBy && this.groupIDLookups.length ? (this.dispatchExternal("dataGrouping"), this.generateGroups(e), this.subscribedExternal("dataGrouped") && this.dispatchExternal("dataGrouped", this.getGroups(!0)), this.updateGroupRows()) : e.slice(0);
        }
        getGroups(e) {
            var t = [];
            return this.groupList.forEach(function(i) {
                t.push(e ? i.getComponent() : i);
            }), t;
        }
        getChildGroups(e) {
            var t = [];
            return e || (e = this), e.groupList.forEach((e)=>{
                e.groupList.length ? t = t.concat(this.getChildGroups(e)) : t.push(e);
            }), t;
        }
        wipe() {
            this.table.options.groupBy && (this.groupList.forEach(function(e) {
                e.wipe();
            }), this.groupList = [], this.groups = {});
        }
        pullGroupListData(e) {
            var t = [];
            return e.forEach((e)=>{
                var i = {
                    level: 0,
                    rowCount: 0,
                    headerContent: ""
                }, s = [];
                e.hasSubGroups ? (s = this.pullGroupListData(e.groupList), i.level = e.level, i.rowCount = s.length - e.groupList.length, i.headerContent = e.generator(e.key, i.rowCount, e.rows, e), t.push(i), t = t.concat(s)) : (i.level = e.level, i.headerContent = e.generator(e.key, e.rows.length, e.rows, e), i.rowCount = e.getRows().length, t.push(i), e.getRows().forEach((e)=>{
                    t.push(e.getData("data"));
                }));
            }), t;
        }
        getGroupedData() {
            return this.pullGroupListData(this.groupList);
        }
        getRowGroup(e) {
            var t = !1;
            return this.options("dataTree") && (e = this.table.modules.dataTree.getTreeParentRoot(e)), this.groupList.forEach((i)=>{
                var s = i.getRowGroup(e);
                s && (t = s);
            }), t;
        }
        countGroups() {
            return this.groupList.length;
        }
        generateGroups(e) {
            var t = this.groups;
            this.groups = {}, this.groupList = [], this.allowedValues && this.allowedValues[0] ? (this.allowedValues[0].forEach((e)=>{
                this.createGroup(e, 0, t);
            }), e.forEach((e)=>{
                this.assignRowToExistingGroup(e, t);
            })) : e.forEach((e)=>{
                this.assignRowToGroup(e, t);
            }), Object.values(t).forEach((e)=>{
                e.wipe();
            });
        }
        createGroup(e, t, i) {
            var s, o = t + "_" + e;
            i = i || [], s = new de(this, !1, t, e, this.groupIDLookups[0].field, this.headerGenerator[0], i[o]), this.groups[o] = s, this.groupList.push(s);
        }
        assignRowToExistingGroup(e, t) {
            var i = "0_" + this.groupIDLookups[0].func(e.getData());
            this.groups[i] && this.groups[i].addRow(e);
        }
        assignRowToGroup(e, t) {
            var i = this.groupIDLookups[0].func(e.getData()), s = !this.groups["0_" + i];
            return s && this.createGroup(i, 0, t), this.groups["0_" + i].addRow(e), !s;
        }
        reassignRowToGroup(e) {
            if ("row" === e.type) {
                var t = e.modules.group, i = t.getPath(), s = this.getExpectedPath(e);
                i.length == s.length && i.every((e, t)=>e === s[t]) || (t.removeRow(e), this.assignRowToGroup(e, this.groups), this.refreshData(!0));
            }
        }
        getExpectedPath(e) {
            var t = [], i = e.getData();
            return this.groupIDLookups.forEach((e)=>{
                t.push(e.func(i));
            }), t;
        }
        updateGroupRows(e) {
            var t = [];
            return this.groupList.forEach((e)=>{
                t = t.concat(e.getHeadersAndRows());
            }), e && this.refreshData(!0, this.displayHandler), t;
        }
        scrollHeaders(e) {
            this.table.options.groupBy && ("virtual" === this.table.options.renderHorizontal && (e -= this.table.columnManager.renderer.vDomPadLeft), e += "px", this.groupList.forEach((t)=>{
                t.scrollHeader(e);
            }));
        }
        removeGroup(e) {
            var t, i = e.level + "_" + e.key;
            this.groups[i] && (delete this.groups[i], (t = this.groupList.indexOf(e)) > -1 && this.groupList.splice(t, 1));
        }
        checkBasicModeGroupHeaderWidth() {
            var e = this.table.rowManager.tableElement, t = !0;
            this.table.rowManager.getDisplayRows().forEach((i, s)=>{
                this.table.rowManager.styleRow(i, s), e.appendChild(i.getElement()), i.initialize(!0), "group" !== i.type && (t = !1);
            }), e.style.minWidth = t ? this.table.columnManager.getWidth() + "px" : "";
        }
        constructor(e){
            super(e), this.groupIDLookups = !1, this.startOpen = [
                function() {
                    return !1;
                }
            ], this.headerGenerator = [
                function() {
                    return "";
                }
            ], this.groupList = [], this.allowedValues = !1, this.groups = {}, this.displayHandler = this.getRows.bind(this), this.registerTableOption("groupBy", !1), this.registerTableOption("groupStartOpen", !0), this.registerTableOption("groupValues", !1), this.registerTableOption("groupUpdateOnCellEdit", !1), this.registerTableOption("groupHeader", !1), this.registerTableOption("groupHeaderPrint", null), this.registerTableOption("groupHeaderClipboard", null), this.registerTableOption("groupHeaderHtmlOutput", null), this.registerTableOption("groupHeaderDownload", null), this.registerTableOption("groupToggleElement", "arrow"), this.registerTableOption("groupClosedShowCalcs", !1), this.registerTableFunction("setGroupBy", this.setGroupBy.bind(this)), this.registerTableFunction("setGroupValues", this.setGroupValues.bind(this)), this.registerTableFunction("setGroupStartOpen", this.setGroupStartOpen.bind(this)), this.registerTableFunction("setGroupHeader", this.setGroupHeader.bind(this)), this.registerTableFunction("getGroups", this.userGetGroups.bind(this)), this.registerTableFunction("getGroupedData", this.userGetGroupedData.bind(this)), this.registerComponentFunction("row", "getGroup", this.rowGetGroup.bind(this));
        }
    }
    ce.moduleName = "groupRows";
    class ue extends k {
        initialize() {
            this.table.options.history && (this.subscribe("cell-value-updated", this.cellUpdated.bind(this)), this.subscribe("cell-delete", this.clearComponentHistory.bind(this)), this.subscribe("row-delete", this.rowDeleted.bind(this)), this.subscribe("rows-wipe", this.clear.bind(this)), this.subscribe("row-added", this.rowAdded.bind(this)), this.subscribe("row-move", this.rowMoved.bind(this))), this.registerTableFunction("undo", this.undo.bind(this)), this.registerTableFunction("redo", this.redo.bind(this)), this.registerTableFunction("getHistoryUndoSize", this.getHistoryUndoSize.bind(this)), this.registerTableFunction("getHistoryRedoSize", this.getHistoryRedoSize.bind(this)), this.registerTableFunction("clearHistory", this.clear.bind(this));
        }
        rowMoved(e, t, i) {
            this.action("rowMove", e, {
                posFrom: e.getPosition(),
                posTo: t.getPosition(),
                to: t,
                after: i
            });
        }
        rowAdded(e, t, i, s) {
            this.action("rowAdd", e, {
                data: t,
                pos: i,
                index: s
            });
        }
        rowDeleted(e) {
            var t, i;
            this.table.options.groupBy ? (t = (i = e.getComponent().getGroup()._getSelf().rows).indexOf(e)) && (t = i[t - 1]) : (t = e.table.rowManager.getRowIndex(e)) && (t = e.table.rowManager.rows[t - 1]), this.action("rowDelete", e, {
                data: e.getData(),
                pos: !t,
                index: t
            });
        }
        cellUpdated(e) {
            this.action("cellEdit", e, {
                oldValue: e.oldValue,
                newValue: e.value
            });
        }
        clear() {
            this.history = [], this.index = -1;
        }
        action(e, t, i) {
            this.history = this.history.slice(0, this.index + 1), this.history.push({
                type: e,
                component: t,
                data: i
            }), this.index++;
        }
        getHistoryUndoSize() {
            return this.index + 1;
        }
        getHistoryRedoSize() {
            return this.history.length - (this.index + 1);
        }
        clearComponentHistory(e) {
            var t = this.history.findIndex(function(t) {
                return t.component === e;
            });
            t > -1 && (this.history.splice(t, 1), t <= this.index && this.index--, this.clearComponentHistory(e));
        }
        undo() {
            if (this.index > -1) {
                let e = this.history[this.index];
                return ue.undoers[e.type].call(this, e), this.index--, this.dispatchExternal("historyUndo", e.type, e.component.getComponent(), e.data), !0;
            }
            return console.warn("History Undo Error - No more history to undo"), !1;
        }
        redo() {
            if (this.history.length - 1 > this.index) {
                this.index++;
                let e = this.history[this.index];
                return ue.redoers[e.type].call(this, e), this.dispatchExternal("historyRedo", e.type, e.component.getComponent(), e.data), !0;
            }
            return console.warn("History Redo Error - No more history to redo"), !1;
        }
        _rebindRow(e, t) {
            this.history.forEach(function(i) {
                if (i.component instanceof p) i.component === e && (i.component = t);
                else if (i.component instanceof o && i.component.row === e) {
                    var s = i.component.column.getField();
                    s && (i.component = t.getCell(s));
                }
            });
        }
        constructor(e){
            super(e), this.history = [], this.index = -1, this.registerTableOption("history", !1);
        }
    }
    ue.moduleName = "history", ue.undoers = {
        cellEdit: function(e) {
            e.component.setValueProcessData(e.data.oldValue), e.component.cellRendered();
        },
        rowAdd: function(e) {
            e.component.deleteActual();
        },
        rowDelete: function(e) {
            var t = this.table.rowManager.addRowActual(e.data.data, e.data.pos, e.data.index);
            this.table.options.groupBy && this.table.modExists("groupRows") && this.table.modules.groupRows.updateGroupRows(!0), this._rebindRow(e.component, t);
        },
        rowMove: function(e) {
            this.table.rowManager.moveRowActual(e.component, this.table.rowManager.rows[e.data.posFrom], !e.data.after), this.table.rowManager.redraw();
        }
    }, ue.redoers = {
        cellEdit: function(e) {
            e.component.setValueProcessData(e.data.newValue), e.component.cellRendered();
        },
        rowAdd: function(e) {
            var t = this.table.rowManager.addRowActual(e.data.data, e.data.pos, e.data.index);
            this.table.options.groupBy && this.table.modExists("groupRows") && this.table.modules.groupRows.updateGroupRows(!0), this._rebindRow(e.component, t);
        },
        rowDelete: function(e) {
            e.component.deleteActual();
        },
        rowMove: function(e) {
            this.table.rowManager.moveRowActual(e.component, this.table.rowManager.rows[e.data.posTo], e.data.after), this.table.rowManager.redraw();
        }
    };
    class pe extends k {
        initialize() {
            this.tableElementCheck();
        }
        tableElementCheck() {
            this.table.originalElement && "TABLE" === this.table.originalElement.tagName && (this.table.originalElement.childNodes.length ? this.parseTable() : console.warn("Unable to parse data from empty table tag, Tabulator should be initialized on a div tag unless importing data from a table element."));
        }
        parseTable() {
            var e = this.table.originalElement, t = this.table.options, i = e.getElementsByTagName("th"), s = e.getElementsByTagName("tbody")[0], o = [];
            this.hasIndex = !1, this.dispatchExternal("htmlImporting"), s = s ? s.getElementsByTagName("tr") : [], this._extractOptions(e, t), i.length ? this._extractHeaders(i, s) : this._generateBlankHeaders(i, s);
            for(var n = 0; n < s.length; n++){
                var r = s[n].getElementsByTagName("td"), a = {};
                this.hasIndex || (a[t.index] = n);
                for(var l = 0; l < r.length; l++){
                    var h = r[l];
                    void 0 !== this.fieldIndex[l] && (a[this.fieldIndex[l]] = h.innerHTML);
                }
                o.push(a);
            }
            t.data = o, this.dispatchExternal("htmlImported");
        }
        _extractOptions(e, t, i) {
            var s = e.attributes, o = i ? Object.keys(i) : Object.keys(t), n = {};
            for(var r in o.forEach((e)=>{
                n[e.toLowerCase()] = e;
            }), s){
                var a, l = s[r];
                l && "object" == typeof l && l.name && 0 === l.name.indexOf("tabulator-") && (a = l.name.replace("tabulator-", ""), void 0 !== n[a] && (t[n[a]] = this._attribValue(l.value)));
            }
        }
        _attribValue(e) {
            return "true" === e || "false" !== e && e;
        }
        _findCol(e) {
            return this.table.options.columns.find((t)=>t.title === e) || !1;
        }
        _extractHeaders(e, t) {
            for(var i = 0; i < e.length; i++){
                var s, o = e[i], n = !1, r = this._findCol(o.textContent);
                r ? n = !0 : r = {
                    title: o.textContent.trim()
                }, r.field || (r.field = o.textContent.trim().toLowerCase().replace(" ", "_")), (s = o.getAttribute("width")) && !r.width && (r.width = s), this._extractOptions(o, r, this.table.columnManager.optionsList.registeredDefaults), this.fieldIndex[i] = r.field, r.field == this.table.options.index && (this.hasIndex = !0), n || this.table.options.columns.push(r);
            }
        }
        _generateBlankHeaders(e, t) {
            for(var i = 0; i < e.length; i++){
                var s = e[i], o = {
                    title: "",
                    field: "col" + i
                };
                this.fieldIndex[i] = o.field;
                var n = s.getAttribute("width");
                n && (o.width = n), this.table.options.columns.push(o);
            }
        }
        constructor(e){
            super(e), this.fieldIndex = [], this.hasIndex = !1;
        }
    }
    pe.moduleName = "htmlTableImport";
    var me = {
        csv: function(e) {
            var t = [], i = 0, s = 0, o = !1;
            for(let n = 0; n < e.length; n++){
                let r = e[n], a = e[n + 1];
                t[i] || (t[i] = []), t[i][s] || (t[i][s] = ""), '"' == r && o && '"' == a ? (t[i][s] += r, n++) : '"' != r ? "," != r || o ? "\r" != r || "\n" != a || o ? "\r" != r && "\n" != r || o ? t[i][s] += r : (s = 0, i++) : (s = 0, i++, n++) : s++ : o = !o;
            }
            return t;
        },
        json: function(e) {
            try {
                return JSON.parse(e);
            } catch (e1) {
                return console.warn("JSON Import Error - File contents is invalid JSON", e1), Promise.reject();
            }
        },
        array: function(e) {
            return e;
        }
    };
    class ge extends k {
        initialize() {
            this.registerTableFunction("import", this.importFromFile.bind(this)), this.table.options.importFormat && (this.subscribe("data-loading", this.loadDataCheck.bind(this), 10), this.subscribe("data-load", this.loadData.bind(this), 10));
        }
        loadDataCheck(e) {
            return this.table.options.importFormat && ("string" == typeof e || Array.isArray(e) && e.length && Array.isArray(e));
        }
        loadData(e, t, i, s, o) {
            return this.importData(this.lookupImporter(), e).then(this.structureData.bind(this)).catch((e)=>(console.error("Import Error:", e || "Unable to import data"), Promise.reject(e)));
        }
        lookupImporter(e) {
            var t;
            return e || (e = this.table.options.importFormat), (t = "string" == typeof e ? ge.importers[e] : e) || console.error("Import Error - Importer not found:", e), t;
        }
        importFromFile(e, t) {
            var i = this.lookupImporter(e);
            if (i) return this.pickFile(t).then(this.importData.bind(this, i)).then(this.structureData.bind(this)).then(this.setData.bind(this)).catch((e)=>(console.error("Import Error:", e || "Unable to import file"), Promise.reject(e)));
        }
        pickFile(e) {
            return new Promise((t, i)=>{
                var s = document.createElement("input");
                s.type = "file", s.accept = e, s.addEventListener("change", (e)=>{
                    var o = s.files[0], n = new FileReader;
                    switch(this.table.options.importReader){
                        case "buffer":
                            n.readAsArrayBuffer(o);
                            break;
                        case "binary":
                            n.readAsBinaryString(o);
                            break;
                        case "url":
                            n.readAsDataURL(o);
                            break;
                        default:
                            n.readAsText(o);
                    }
                    n.onload = (e)=>{
                        t(n.result);
                    }, n.onerror = (e)=>{
                        console.warn("File Load Error - Unable to read file"), i();
                    };
                }), s.click();
            });
        }
        importData(e, t) {
            var i = e.call(this.table, t);
            return i instanceof Promise ? i : i ? Promise.resolve(i) : Promise.reject();
        }
        structureData(e) {
            return Array.isArray(e) && e.length && Array.isArray(e[0]) ? this.table.options.autoColumns ? this.structureArrayToObject(e) : this.structureArrayToColumns(e) : e;
        }
        structureArrayToObject(e) {
            var t = e.shift();
            return e.map((e)=>{
                var i = {};
                return t.forEach((t, s)=>{
                    i[t] = e[s];
                }), i;
            });
        }
        structureArrayToColumns(e) {
            var t = [], i = this.table.getColumns();
            return i[0] && e[0][0] && i[0].getDefinition().title === e[0][0] && e.shift(), e.forEach((e)=>{
                var s = {};
                e.forEach((e, t)=>{
                    var o = i[t];
                    o && (s[o.getField()] = e);
                }), t.push(s);
            }), t;
        }
        setData(e) {
            return this.table.setData(e);
        }
        constructor(e){
            super(e), this.registerTableOption("importFormat"), this.registerTableOption("importReader", "text");
        }
    }
    ge.moduleName = "import", ge.importers = me;
    class be extends k {
        initialize() {
            this.initializeExternalEvents(), this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("cell-dblclick", this.cellContentsSelectionFixer.bind(this));
        }
        cellContentsSelectionFixer(e, t) {
            var i;
            if (!this.table.modExists("edit") || this.table.modules.edit.currentCell !== t) {
                e.preventDefault();
                try {
                    document.selection ? ((i = document.body.createTextRange()).moveToElementText(t.getElement()), i.select()) : window.getSelection && ((i = document.createRange()).selectNode(t.getElement()), window.getSelection().removeAllRanges(), window.getSelection().addRange(i));
                } catch (e1) {}
            }
        }
        initializeExternalEvents() {
            for(let e in this.eventMap)this.subscriptionChangeExternal(e, this.subscriptionChanged.bind(this, e));
        }
        subscriptionChanged(e, t) {
            t ? this.subscribers[e] || (this.eventMap[e].includes("-") ? (this.subscribers[e] = this.handle.bind(this, e), this.subscribe(this.eventMap[e], this.subscribers[e])) : this.subscribeTouchEvents(e)) : this.eventMap[e].includes("-") ? !this.subscribers[e] || this.columnSubscribers[e] || this.subscribedExternal(e) || (this.unsubscribe(this.eventMap[e], this.subscribers[e]), delete this.subscribers[e]) : this.unsubscribeTouchEvents(e);
        }
        subscribeTouchEvents(e) {
            var t = this.eventMap[e];
            this.touchSubscribers[t + "-touchstart"] || (this.touchSubscribers[t + "-touchstart"] = this.handleTouch.bind(this, t, "start"), this.touchSubscribers[t + "-touchend"] = this.handleTouch.bind(this, t, "end"), this.subscribe(t + "-touchstart", this.touchSubscribers[t + "-touchstart"]), this.subscribe(t + "-touchend", this.touchSubscribers[t + "-touchend"])), this.subscribers[e] = !0;
        }
        unsubscribeTouchEvents(e) {
            var t = !0, i = this.eventMap[e];
            if (this.subscribers[e] && !this.subscribedExternal(e)) {
                delete this.subscribers[e];
                for(let e1 in this.eventMap)this.eventMap[e1] === i && this.subscribers[e1] && (t = !1);
                t && (this.unsubscribe(i + "-touchstart", this.touchSubscribers[i + "-touchstart"]), this.unsubscribe(i + "-touchend", this.touchSubscribers[i + "-touchend"]), delete this.touchSubscribers[i + "-touchstart"], delete this.touchSubscribers[i + "-touchend"]);
            }
        }
        initializeColumn(e) {
            var t = e.definition;
            for(let i in this.eventMap)t[i] && (this.subscriptionChanged(i, !0), this.columnSubscribers[i] || (this.columnSubscribers[i] = []), this.columnSubscribers[i].push(e));
        }
        handle(e, t, i) {
            this.dispatchEvent(e, t, i);
        }
        handleTouch(e, t, i, s) {
            var o = this.touchWatchers[e];
            switch("column" === e && (e = "header"), t){
                case "start":
                    o.tap = !0, clearTimeout(o.tapHold), o.tapHold = setTimeout(()=>{
                        clearTimeout(o.tapHold), o.tapHold = null, o.tap = null, clearTimeout(o.tapDbl), o.tapDbl = null, this.dispatchEvent(e + "TapHold", i, s);
                    }, 1e3);
                    break;
                case "end":
                    o.tap && (o.tap = null, this.dispatchEvent(e + "Tap", i, s)), o.tapDbl ? (clearTimeout(o.tapDbl), o.tapDbl = null, this.dispatchEvent(e + "DblTap", i, s)) : o.tapDbl = setTimeout(()=>{
                        clearTimeout(o.tapDbl), o.tapDbl = null;
                    }, 300), clearTimeout(o.tapHold), o.tapHold = null;
            }
        }
        dispatchEvent(e, t, i) {
            var s, r = i.getComponent();
            this.columnSubscribers[e] && (i instanceof o ? s = i.column.definition[e] : i instanceof n && (s = i.definition[e]), s && s(t, r)), this.dispatchExternal(e, t, r);
        }
        constructor(e){
            super(e), this.eventMap = {
                rowClick: "row-click",
                rowDblClick: "row-dblclick",
                rowContext: "row-contextmenu",
                rowMouseEnter: "row-mouseenter",
                rowMouseLeave: "row-mouseleave",
                rowMouseOver: "row-mouseover",
                rowMouseOut: "row-mouseout",
                rowMouseMove: "row-mousemove",
                rowMouseDown: "row-mousedown",
                rowMouseUp: "row-mouseup",
                rowTap: "row",
                rowDblTap: "row",
                rowTapHold: "row",
                cellClick: "cell-click",
                cellDblClick: "cell-dblclick",
                cellContext: "cell-contextmenu",
                cellMouseEnter: "cell-mouseenter",
                cellMouseLeave: "cell-mouseleave",
                cellMouseOver: "cell-mouseover",
                cellMouseOut: "cell-mouseout",
                cellMouseMove: "cell-mousemove",
                cellMouseDown: "cell-mousedown",
                cellMouseUp: "cell-mouseup",
                cellTap: "cell",
                cellDblTap: "cell",
                cellTapHold: "cell",
                headerClick: "column-click",
                headerDblClick: "column-dblclick",
                headerContext: "column-contextmenu",
                headerMouseEnter: "column-mouseenter",
                headerMouseLeave: "column-mouseleave",
                headerMouseOver: "column-mouseover",
                headerMouseOut: "column-mouseout",
                headerMouseMove: "column-mousemove",
                headerMouseDown: "column-mousedown",
                headerMouseUp: "column-mouseup",
                headerTap: "column",
                headerDblTap: "column",
                headerTapHold: "column",
                groupClick: "group-click",
                groupDblClick: "group-dblclick",
                groupContext: "group-contextmenu",
                groupMouseEnter: "group-mouseenter",
                groupMouseLeave: "group-mouseleave",
                groupMouseOver: "group-mouseover",
                groupMouseOut: "group-mouseout",
                groupMouseMove: "group-mousemove",
                groupMouseDown: "group-mousedown",
                groupMouseUp: "group-mouseup",
                groupTap: "group",
                groupDblTap: "group",
                groupTapHold: "group"
            }, this.subscribers = {}, this.touchSubscribers = {}, this.columnSubscribers = {}, this.touchWatchers = {
                row: {
                    tap: null,
                    tapDbl: null,
                    tapHold: null
                },
                cell: {
                    tap: null,
                    tapDbl: null,
                    tapHold: null
                },
                column: {
                    tap: null,
                    tapDbl: null,
                    tapHold: null
                },
                group: {
                    tap: null,
                    tapDbl: null,
                    tapHold: null
                }
            }, this.registerColumnOption("headerClick"), this.registerColumnOption("headerDblClick"), this.registerColumnOption("headerContext"), this.registerColumnOption("headerMouseEnter"), this.registerColumnOption("headerMouseLeave"), this.registerColumnOption("headerMouseOver"), this.registerColumnOption("headerMouseOut"), this.registerColumnOption("headerMouseMove"), this.registerColumnOption("headerMouseDown"), this.registerColumnOption("headerMouseUp"), this.registerColumnOption("headerTap"), this.registerColumnOption("headerDblTap"), this.registerColumnOption("headerTapHold"), this.registerColumnOption("cellClick"), this.registerColumnOption("cellDblClick"), this.registerColumnOption("cellContext"), this.registerColumnOption("cellMouseEnter"), this.registerColumnOption("cellMouseLeave"), this.registerColumnOption("cellMouseOver"), this.registerColumnOption("cellMouseOut"), this.registerColumnOption("cellMouseMove"), this.registerColumnOption("cellMouseDown"), this.registerColumnOption("cellMouseUp"), this.registerColumnOption("cellTap"), this.registerColumnOption("cellDblTap"), this.registerColumnOption("cellTapHold");
        }
    }
    be.moduleName = "interaction";
    class fe extends k {
        initialize() {
            var e = this.table.options.keybindings, t = {};
            this.watchKeys = {}, this.pressedKeys = [], !1 !== e && (Object.assign(t, fe.bindings), Object.assign(t, e), this.mapBindings(t), this.bindEvents()), this.subscribe("table-destroy", this.clearBindings.bind(this));
        }
        mapBindings(e) {
            for(let t in e)fe.actions[t] ? e[t] && ("object" != typeof e[t] && (e[t] = [
                e[t]
            ]), e[t].forEach((e)=>{
                (Array.isArray(e) ? e : [
                    e
                ]).forEach((e)=>{
                    this.mapBinding(t, e);
                });
            })) : console.warn("Key Binding Error - no such action:", t);
        }
        mapBinding(e, t) {
            var i = {
                action: fe.actions[e],
                keys: [],
                ctrl: !1,
                shift: !1,
                meta: !1
            };
            t.toString().toLowerCase().split(" ").join("").split("+").forEach((e)=>{
                switch(e){
                    case "ctrl":
                        i.ctrl = !0;
                        break;
                    case "shift":
                        i.shift = !0;
                        break;
                    case "meta":
                        i.meta = !0;
                        break;
                    default:
                        e = isNaN(e) ? e.toUpperCase().charCodeAt(0) : parseInt(e), i.keys.push(e), this.watchKeys[e] || (this.watchKeys[e] = []), this.watchKeys[e].push(i);
                }
            });
        }
        bindEvents() {
            var e = this;
            this.keyupBinding = function(t) {
                var i = t.keyCode, s = e.watchKeys[i];
                s && (e.pressedKeys.push(i), s.forEach(function(i) {
                    e.checkBinding(t, i);
                }));
            }, this.keydownBinding = function(t) {
                var i = t.keyCode;
                if (e.watchKeys[i]) {
                    var s = e.pressedKeys.indexOf(i);
                    s > -1 && e.pressedKeys.splice(s, 1);
                }
            }, this.table.element.addEventListener("keydown", this.keyupBinding), this.table.element.addEventListener("keyup", this.keydownBinding);
        }
        clearBindings() {
            this.keyupBinding && this.table.element.removeEventListener("keydown", this.keyupBinding), this.keydownBinding && this.table.element.removeEventListener("keyup", this.keydownBinding);
        }
        checkBinding(e, t) {
            var i = !0;
            return e.ctrlKey == t.ctrl && e.shiftKey == t.shift && e.metaKey == t.meta && (t.keys.forEach((e)=>{
                -1 == this.pressedKeys.indexOf(e) && (i = !1);
            }), i && t.action.call(this, e), !0);
        }
        constructor(e){
            super(e), this.watchKeys = null, this.pressedKeys = null, this.keyupBinding = !1, this.keydownBinding = !1, this.registerTableOption("keybindings", {}), this.registerTableOption("tabEndNewRow", !1);
        }
    }
    fe.moduleName = "keybindings", fe.bindings = {
        navPrev: "shift + 9",
        navNext: 9,
        navUp: 38,
        navDown: 40,
        scrollPageUp: 33,
        scrollPageDown: 34,
        scrollToStart: 36,
        scrollToEnd: 35,
        undo: [
            "ctrl + 90",
            "meta + 90"
        ],
        redo: [
            "ctrl + 89",
            "meta + 89"
        ],
        copyToClipboard: [
            "ctrl + 67",
            "meta + 89"
        ]
    }, fe.actions = {
        keyBlock: function(e) {
            e.stopPropagation(), e.preventDefault();
        },
        scrollPageUp: function(e) {
            var t = this.table.rowManager, i = t.scrollTop - t.element.clientHeight;
            e.preventDefault(), t.displayRowsCount && (i >= 0 ? t.element.scrollTop = i : t.scrollToRow(t.getDisplayRows()[0])), this.table.element.focus();
        },
        scrollPageDown: function(e) {
            var t = this.table.rowManager, i = t.scrollTop + t.element.clientHeight, s = t.element.scrollHeight;
            e.preventDefault(), t.displayRowsCount && (i <= s ? t.element.scrollTop = i : t.scrollToRow(t.getDisplayRows()[t.displayRowsCount - 1])), this.table.element.focus();
        },
        scrollToStart: function(e) {
            var t = this.table.rowManager;
            e.preventDefault(), t.displayRowsCount && t.scrollToRow(t.getDisplayRows()[0]), this.table.element.focus();
        },
        scrollToEnd: function(e) {
            var t = this.table.rowManager;
            e.preventDefault(), t.displayRowsCount && t.scrollToRow(t.getDisplayRows()[t.displayRowsCount - 1]), this.table.element.focus();
        },
        navPrev: function(e) {
            this.dispatch("keybinding-nav-prev", e);
        },
        navNext: function(e) {
            this.dispatch("keybinding-nav-next", e);
        },
        navLeft: function(e) {
            this.dispatch("keybinding-nav-left", e);
        },
        navRight: function(e) {
            this.dispatch("keybinding-nav-right", e);
        },
        navUp: function(e) {
            this.dispatch("keybinding-nav-up", e);
        },
        navDown: function(e) {
            this.dispatch("keybinding-nav-down", e);
        },
        undo: function(e) {
            this.table.options.history && this.table.modExists("history") && this.table.modExists("edit") && (this.table.modules.edit.currentCell || (e.preventDefault(), this.table.modules.history.undo()));
        },
        redo: function(e) {
            this.table.options.history && this.table.modExists("history") && this.table.modExists("edit") && (this.table.modules.edit.currentCell || (e.preventDefault(), this.table.modules.history.redo()));
        },
        copyToClipboard: function(e) {
            this.table.modules.edit.currentCell || this.table.modExists("clipboard", !0) && this.table.modules.clipboard.copy(!1, !0);
        }
    };
    class ve extends k {
        initialize() {
            this.deprecatedOptionsCheck(), this.initializeRowWatchers(), this.initializeGroupWatchers(), this.subscribe("column-init", this.initializeColumn.bind(this));
        }
        deprecatedOptionsCheck() {
            this.deprecationCheck("menuContainer", "popupContainer") || (this.table.options.popupContainer = this.table.options.menuContainer);
        }
        initializeRowWatchers() {
            this.table.options.rowContextMenu && (this.subscribe("row-contextmenu", this.loadMenuEvent.bind(this, this.table.options.rowContextMenu)), this.table.on("rowTapHold", this.loadMenuEvent.bind(this, this.table.options.rowContextMenu))), this.table.options.rowClickMenu && this.subscribe("row-click", this.loadMenuEvent.bind(this, this.table.options.rowClickMenu)), this.table.options.rowDblClickMenu && this.subscribe("row-dblclick", this.loadMenuEvent.bind(this, this.table.options.rowDblClickMenu));
        }
        initializeGroupWatchers() {
            this.table.options.groupContextMenu && (this.subscribe("group-contextmenu", this.loadMenuEvent.bind(this, this.table.options.groupContextMenu)), this.table.on("groupTapHold", this.loadMenuEvent.bind(this, this.table.options.groupContextMenu))), this.table.options.groupClickMenu && this.subscribe("group-click", this.loadMenuEvent.bind(this, this.table.options.groupClickMenu)), this.table.options.groupDblClickMenu && this.subscribe("group-dblclick", this.loadMenuEvent.bind(this, this.table.options.groupDblClickMenu));
        }
        initializeColumn(e) {
            var t = e.definition;
            t.headerContextMenu && !this.columnSubscribers.headerContextMenu && (this.columnSubscribers.headerContextMenu = this.loadMenuTableColumnEvent.bind(this, "headerContextMenu"), this.subscribe("column-contextmenu", this.columnSubscribers.headerContextMenu), this.table.on("headerTapHold", this.loadMenuTableColumnEvent.bind(this, "headerContextMenu"))), t.headerClickMenu && !this.columnSubscribers.headerClickMenu && (this.columnSubscribers.headerClickMenu = this.loadMenuTableColumnEvent.bind(this, "headerClickMenu"), this.subscribe("column-click", this.columnSubscribers.headerClickMenu)), t.headerDblClickMenu && !this.columnSubscribers.headerDblClickMenu && (this.columnSubscribers.headerDblClickMenu = this.loadMenuTableColumnEvent.bind(this, "headerDblClickMenu"), this.subscribe("column-dblclick", this.columnSubscribers.headerDblClickMenu)), t.headerMenu && this.initializeColumnHeaderMenu(e), t.contextMenu && !this.columnSubscribers.contextMenu && (this.columnSubscribers.contextMenu = this.loadMenuTableCellEvent.bind(this, "contextMenu"), this.subscribe("cell-contextmenu", this.columnSubscribers.contextMenu), this.table.on("cellTapHold", this.loadMenuTableCellEvent.bind(this, "contextMenu"))), t.clickMenu && !this.columnSubscribers.clickMenu && (this.columnSubscribers.clickMenu = this.loadMenuTableCellEvent.bind(this, "clickMenu"), this.subscribe("cell-click", this.columnSubscribers.clickMenu)), t.dblClickMenu && !this.columnSubscribers.dblClickMenu && (this.columnSubscribers.dblClickMenu = this.loadMenuTableCellEvent.bind(this, "dblClickMenu"), this.subscribe("cell-dblclick", this.columnSubscribers.dblClickMenu));
        }
        initializeColumnHeaderMenu(e) {
            var t, i = e.definition.headerMenuIcon;
            (t = document.createElement("span")).classList.add("tabulator-header-popup-button"), i ? ("function" == typeof i && (i = i(e.getComponent())), i instanceof HTMLElement ? t.appendChild(i) : t.innerHTML = i) : t.innerHTML = "&vellip;", t.addEventListener("click", (t)=>{
                t.stopPropagation(), t.preventDefault(), this.loadMenuEvent(e.definition.headerMenu, t, e);
            }), e.titleElement.insertBefore(t, e.titleElement.firstChild);
        }
        loadMenuTableCellEvent(e, t, i) {
            i._cell && (i = i._cell), i.column.definition[e] && this.loadMenuEvent(i.column.definition[e], t, i);
        }
        loadMenuTableColumnEvent(e, t, i) {
            i._column && (i = i._column), i.definition[e] && this.loadMenuEvent(i.definition[e], t, i);
        }
        loadMenuEvent(e, t, i) {
            i._group ? i = i._group : i._row && (i = i._row), e = "function" == typeof e ? e.call(this.table, t, i.getComponent()) : e, this.loadMenu(t, i, e);
        }
        loadMenu(e, t, i, s, o) {
            var n, r = !(e instanceof MouseEvent), a = document.createElement("div");
            if (a.classList.add("tabulator-menu"), r || e.preventDefault(), i && i.length) {
                if (s) n = o.child(a);
                else {
                    if (this.nestedMenuBlock) {
                        if (this.rootPopup) return;
                    } else this.nestedMenuBlock = setTimeout(()=>{
                        this.nestedMenuBlock = !1;
                    }, 100);
                    this.rootPopup && this.rootPopup.hide(), this.rootPopup = n = this.popup(a);
                }
                i.forEach((e)=>{
                    var i = document.createElement("div"), s = e.label, o = e.disabled;
                    e.separator ? i.classList.add("tabulator-menu-separator") : (i.classList.add("tabulator-menu-item"), "function" == typeof s && (s = s.call(this.table, t.getComponent())), s instanceof Node ? i.appendChild(s) : i.innerHTML = s, "function" == typeof o && (o = o.call(this.table, t.getComponent())), o ? (i.classList.add("tabulator-menu-item-disabled"), i.addEventListener("click", (e)=>{
                        e.stopPropagation();
                    })) : e.menu && e.menu.length ? i.addEventListener("click", (s)=>{
                        s.stopPropagation(), this.loadMenu(s, t, e.menu, i, n);
                    }) : e.action && i.addEventListener("click", (i)=>{
                        e.action(i, t.getComponent());
                    }), e.menu && e.menu.length && i.classList.add("tabulator-menu-item-submenu")), a.appendChild(i);
                }), a.addEventListener("click", (e)=>{
                    this.rootPopup && this.rootPopup.hide();
                }), n.show(s || e), n === this.rootPopup && (this.rootPopup.hideOnBlur(()=>{
                    this.rootPopup = null, this.currentComponent && (this.dispatchExternal("menuClosed", this.currentComponent.getComponent()), this.currentComponent = null);
                }), this.currentComponent = t, this.dispatchExternal("menuOpened", t.getComponent()));
            }
        }
        constructor(e){
            super(e), this.menuContainer = null, this.nestedMenuBlock = !1, this.currentComponent = null, this.rootPopup = null, this.columnSubscribers = {}, this.registerTableOption("menuContainer", void 0), this.registerTableOption("rowContextMenu", !1), this.registerTableOption("rowClickMenu", !1), this.registerTableOption("rowDblClickMenu", !1), this.registerTableOption("groupContextMenu", !1), this.registerTableOption("groupClickMenu", !1), this.registerTableOption("groupDblClickMenu", !1), this.registerColumnOption("headerContextMenu"), this.registerColumnOption("headerClickMenu"), this.registerColumnOption("headerDblClickMenu"), this.registerColumnOption("headerMenu"), this.registerColumnOption("headerMenuIcon"), this.registerColumnOption("contextMenu"), this.registerColumnOption("clickMenu"), this.registerColumnOption("dblClickMenu");
        }
    }
    ve.moduleName = "menu";
    class we extends k {
        createPlaceholderElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-col"), e.classList.add("tabulator-col-placeholder"), e;
        }
        initialize() {
            this.table.options.movableColumns && this.subscribe("column-init", this.initializeColumn.bind(this));
        }
        initializeColumn(e) {
            var t, i = this, s = {};
            e.modules.frozen || e.isGroup || (t = e.getElement(), s.mousemove = (function(s) {
                e.parent === i.moving.parent && ((i.touchMove ? s.touches[0].pageX : s.pageX) - r.elOffset(t).left + i.table.columnManager.element.scrollLeft > e.getWidth() / 2 ? i.toCol === e && i.toColAfter || (t.parentNode.insertBefore(i.placeholderElement, t.nextSibling), i.moveColumn(e, !0)) : (i.toCol !== e || i.toColAfter) && (t.parentNode.insertBefore(i.placeholderElement, t), i.moveColumn(e, !1)));
            }).bind(i), t.addEventListener("mousedown", function(t) {
                i.touchMove = !1, 1 === t.which && (i.checkTimeout = setTimeout(function() {
                    i.startMove(t, e);
                }, i.checkPeriod));
            }), t.addEventListener("mouseup", function(e) {
                1 === e.which && i.checkTimeout && clearTimeout(i.checkTimeout);
            }), i.bindTouchEvents(e)), e.modules.moveColumn = s;
        }
        bindTouchEvents(e) {
            var t, i, s, o, n, r, a = e.getElement(), l = !1;
            a.addEventListener("touchstart", (a)=>{
                this.checkTimeout = setTimeout(()=>{
                    this.touchMove = !0, t = e.nextColumn(), s = t ? t.getWidth() / 2 : 0, i = e.prevColumn(), o = i ? i.getWidth() / 2 : 0, n = 0, r = 0, l = !1, this.startMove(a, e);
                }, this.checkPeriod);
            }, {
                passive: !0
            }), a.addEventListener("touchmove", (a)=>{
                var h, d;
                this.moving && (this.moveHover(a), l || (l = a.touches[0].pageX), (h = a.touches[0].pageX - l) > 0 ? t && h - n > s && (d = t) !== e && (l = a.touches[0].pageX, d.getElement().parentNode.insertBefore(this.placeholderElement, d.getElement().nextSibling), this.moveColumn(d, !0)) : i && -h - r > o && (d = i) !== e && (l = a.touches[0].pageX, d.getElement().parentNode.insertBefore(this.placeholderElement, d.getElement()), this.moveColumn(d, !1)), d && (t = d.nextColumn(), n = s, s = t ? t.getWidth() / 2 : 0, i = d.prevColumn(), r = o, o = i ? i.getWidth() / 2 : 0));
            }, {
                passive: !0
            }), a.addEventListener("touchend", (e)=>{
                this.checkTimeout && clearTimeout(this.checkTimeout), this.moving && this.endMove(e);
            });
        }
        startMove(e, t) {
            var i = t.getElement(), s = this.table.columnManager.getContentsElement(), o = this.table.columnManager.getHeadersElement();
            this.moving = t, this.startX = (this.touchMove ? e.touches[0].pageX : e.pageX) - r.elOffset(i).left, this.table.element.classList.add("tabulator-block-select"), this.placeholderElement.style.width = t.getWidth() + "px", this.placeholderElement.style.height = t.getHeight() + "px", i.parentNode.insertBefore(this.placeholderElement, i), i.parentNode.removeChild(i), this.hoverElement = i.cloneNode(!0), this.hoverElement.classList.add("tabulator-moving"), s.appendChild(this.hoverElement), this.hoverElement.style.left = "0", this.hoverElement.style.bottom = s.clientHeight - o.offsetHeight + "px", this.touchMove || (this._bindMouseMove(), document.body.addEventListener("mousemove", this.moveHover), document.body.addEventListener("mouseup", this.endMove)), this.moveHover(e);
        }
        _bindMouseMove() {
            this.table.columnManager.columnsByIndex.forEach(function(e) {
                e.modules.moveColumn.mousemove && e.getElement().addEventListener("mousemove", e.modules.moveColumn.mousemove);
            });
        }
        _unbindMouseMove() {
            this.table.columnManager.columnsByIndex.forEach(function(e) {
                e.modules.moveColumn.mousemove && e.getElement().removeEventListener("mousemove", e.modules.moveColumn.mousemove);
            });
        }
        moveColumn(e, t) {
            var i = this.moving.getCells();
            this.toCol = e, this.toColAfter = t, t ? e.getCells().forEach(function(e, t) {
                var s = e.getElement(!0);
                s.parentNode && i[t] && s.parentNode.insertBefore(i[t].getElement(), s.nextSibling);
            }) : e.getCells().forEach(function(e, t) {
                var s = e.getElement(!0);
                s.parentNode && i[t] && s.parentNode.insertBefore(i[t].getElement(), s);
            });
        }
        endMove(e) {
            (1 === e.which || this.touchMove) && (this._unbindMouseMove(), this.placeholderElement.parentNode.insertBefore(this.moving.getElement(), this.placeholderElement.nextSibling), this.placeholderElement.parentNode.removeChild(this.placeholderElement), this.hoverElement.parentNode.removeChild(this.hoverElement), this.table.element.classList.remove("tabulator-block-select"), this.toCol && this.table.columnManager.moveColumnActual(this.moving, this.toCol, this.toColAfter), this.moving = !1, this.toCol = !1, this.toColAfter = !1, this.touchMove || (document.body.removeEventListener("mousemove", this.moveHover), document.body.removeEventListener("mouseup", this.endMove)));
        }
        moveHover(e) {
            var t, i = this.table.columnManager.getContentsElement(), s = i.scrollLeft, o = (this.touchMove ? e.touches[0].pageX : e.pageX) - r.elOffset(i).left + s;
            this.hoverElement.style.left = o - this.startX + "px", o - s < this.autoScrollMargin && (this.autoScrollTimeout || (this.autoScrollTimeout = setTimeout(()=>{
                t = Math.max(0, s - 5), this.table.rowManager.getElement().scrollLeft = t, this.autoScrollTimeout = !1;
            }, 1))), s + i.clientWidth - o < this.autoScrollMargin && (this.autoScrollTimeout || (this.autoScrollTimeout = setTimeout(()=>{
                t = Math.min(i.clientWidth, s + 5), this.table.rowManager.getElement().scrollLeft = t, this.autoScrollTimeout = !1;
            }, 1)));
        }
        constructor(e){
            super(e), this.placeholderElement = this.createPlaceholderElement(), this.hoverElement = !1, this.checkTimeout = !1, this.checkPeriod = 250, this.moving = !1, this.toCol = !1, this.toColAfter = !1, this.startX = 0, this.autoScrollMargin = 40, this.autoScrollStep = 5, this.autoScrollTimeout = !1, this.touchMove = !1, this.moveHover = this.moveHover.bind(this), this.endMove = this.endMove.bind(this), this.registerTableOption("movableColumns", !1);
        }
    }
    we.moduleName = "moveColumn";
    class Ce extends k {
        createPlaceholderElement() {
            var e = document.createElement("div");
            return e.classList.add("tabulator-row"), e.classList.add("tabulator-row-placeholder"), e;
        }
        initialize() {
            this.table.options.movableRows && (this.connectionSelectorsTables = this.table.options.movableRowsConnectedTables, this.connectionSelectorsElements = this.table.options.movableRowsConnectedElements, this.connection = this.connectionSelectorsTables || this.connectionSelectorsElements, this.subscribe("cell-init", this.initializeCell.bind(this)), this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("row-init", this.initializeRow.bind(this)));
        }
        initializeGroupHeader(e) {
            var t = this, i = {};
            i.mouseup = (function(i) {
                t.tableRowDrop(i, e);
            }).bind(t), i.mousemove = (function(i) {
                var s;
                i.pageY - r.elOffset(e.element).top + t.table.rowManager.element.scrollTop > e.getHeight() / 2 ? t.toRow === e && t.toRowAfter || ((s = e.getElement()).parentNode.insertBefore(t.placeholderElement, s.nextSibling), t.moveRow(e, !0)) : (t.toRow !== e || t.toRowAfter) && (s = e.getElement()).previousSibling && (s.parentNode.insertBefore(t.placeholderElement, s), t.moveRow(e, !1));
            }).bind(t), e.modules.moveRow = i;
        }
        initializeRow(e) {
            var t, i = this, s = {};
            s.mouseup = (function(t) {
                i.tableRowDrop(t, e);
            }).bind(i), s.mousemove = (function(t) {
                var s = e.getElement();
                t.pageY - r.elOffset(s).top + i.table.rowManager.element.scrollTop > e.getHeight() / 2 ? i.toRow === e && i.toRowAfter || (s.parentNode.insertBefore(i.placeholderElement, s.nextSibling), i.moveRow(e, !0)) : (i.toRow !== e || i.toRowAfter) && (s.parentNode.insertBefore(i.placeholderElement, s), i.moveRow(e, !1));
            }).bind(i), this.hasHandle || ((t = e.getElement()).addEventListener("mousedown", function(t) {
                1 === t.which && (i.checkTimeout = setTimeout(function() {
                    i.startMove(t, e);
                }, i.checkPeriod));
            }), t.addEventListener("mouseup", function(e) {
                1 === e.which && i.checkTimeout && clearTimeout(i.checkTimeout);
            }), this.bindTouchEvents(e, e.getElement())), e.modules.moveRow = s;
        }
        initializeColumn(e) {
            e.definition.rowHandle && !1 !== this.table.options.movableRows && (this.hasHandle = !0);
        }
        initializeCell(e) {
            if (e.column.definition.rowHandle && !1 !== this.table.options.movableRows) {
                var t = this, i = e.getElement(!0);
                i.addEventListener("mousedown", function(i) {
                    1 === i.which && (t.checkTimeout = setTimeout(function() {
                        t.startMove(i, e.row);
                    }, t.checkPeriod));
                }), i.addEventListener("mouseup", function(e) {
                    1 === e.which && t.checkTimeout && clearTimeout(t.checkTimeout);
                }), this.bindTouchEvents(e.row, i);
            }
        }
        bindTouchEvents(e, t) {
            var i, s, o, n, r, a, l = !1;
            t.addEventListener("touchstart", (t)=>{
                this.checkTimeout = setTimeout(()=>{
                    this.touchMove = !0, i = e.nextRow(), o = i ? i.getHeight() / 2 : 0, s = e.prevRow(), n = s ? s.getHeight() / 2 : 0, r = 0, a = 0, l = !1, this.startMove(t, e);
                }, this.checkPeriod);
            }, {
                passive: !0
            }), this.moving, this.toRow, this.toRowAfter, t.addEventListener("touchmove", (t)=>{
                var h, d;
                this.moving && (t.preventDefault(), this.moveHover(t), l || (l = t.touches[0].pageY), (h = t.touches[0].pageY - l) > 0 ? i && h - r > o && (d = i) !== e && (l = t.touches[0].pageY, d.getElement().parentNode.insertBefore(this.placeholderElement, d.getElement().nextSibling), this.moveRow(d, !0)) : s && -h - a > n && (d = s) !== e && (l = t.touches[0].pageY, d.getElement().parentNode.insertBefore(this.placeholderElement, d.getElement()), this.moveRow(d, !1)), d && (i = d.nextRow(), r = o, o = i ? i.getHeight() / 2 : 0, s = d.prevRow(), a = n, n = s ? s.getHeight() / 2 : 0));
            }), t.addEventListener("touchend", (e)=>{
                this.checkTimeout && clearTimeout(this.checkTimeout), this.moving && (this.endMove(e), this.touchMove = !1);
            });
        }
        _bindMouseMove() {
            this.table.rowManager.getDisplayRows().forEach((e)=>{
                ("row" === e.type || "group" === e.type) && e.modules.moveRow && e.modules.moveRow.mousemove && e.getElement().addEventListener("mousemove", e.modules.moveRow.mousemove);
            });
        }
        _unbindMouseMove() {
            this.table.rowManager.getDisplayRows().forEach((e)=>{
                ("row" === e.type || "group" === e.type) && e.modules.moveRow && e.modules.moveRow.mousemove && e.getElement().removeEventListener("mousemove", e.modules.moveRow.mousemove);
            });
        }
        startMove(e, t) {
            var i = t.getElement();
            this.setStartPosition(e, t), this.moving = t, this.table.element.classList.add("tabulator-block-select"), this.placeholderElement.style.width = t.getWidth() + "px", this.placeholderElement.style.height = t.getHeight() + "px", this.connection ? (this.table.element.classList.add("tabulator-movingrow-sending"), this.connectToTables(t)) : (i.parentNode.insertBefore(this.placeholderElement, i), i.parentNode.removeChild(i)), this.hoverElement = i.cloneNode(!0), this.hoverElement.classList.add("tabulator-moving"), this.connection ? (document.body.appendChild(this.hoverElement), this.hoverElement.style.left = "0", this.hoverElement.style.top = "0", this.hoverElement.style.width = this.table.element.clientWidth + "px", this.hoverElement.style.whiteSpace = "nowrap", this.hoverElement.style.overflow = "hidden", this.hoverElement.style.pointerEvents = "none") : (this.table.rowManager.getTableElement().appendChild(this.hoverElement), this.hoverElement.style.left = "0", this.hoverElement.style.top = "0", this._bindMouseMove()), document.body.addEventListener("mousemove", this.moveHover), document.body.addEventListener("mouseup", this.endMove), this.dispatchExternal("rowMoving", t.getComponent()), this.moveHover(e);
        }
        setStartPosition(e, t) {
            var i, s, o = this.touchMove ? e.touches[0].pageX : e.pageX, n = this.touchMove ? e.touches[0].pageY : e.pageY;
            i = t.getElement(), this.connection ? (s = i.getBoundingClientRect(), this.startX = s.left - o + window.pageXOffset, this.startY = s.top - n + window.pageYOffset) : this.startY = n - i.getBoundingClientRect().top;
        }
        endMove(e) {
            e && 1 !== e.which && !this.touchMove || (this._unbindMouseMove(), this.connection || (this.placeholderElement.parentNode.insertBefore(this.moving.getElement(), this.placeholderElement.nextSibling), this.placeholderElement.parentNode.removeChild(this.placeholderElement)), this.hoverElement.parentNode.removeChild(this.hoverElement), this.table.element.classList.remove("tabulator-block-select"), this.toRow ? this.table.rowManager.moveRow(this.moving, this.toRow, this.toRowAfter) : this.dispatchExternal("rowMoveCancelled", this.moving.getComponent()), this.moving = !1, this.toRow = !1, this.toRowAfter = !1, document.body.removeEventListener("mousemove", this.moveHover), document.body.removeEventListener("mouseup", this.endMove), this.connection && (this.table.element.classList.remove("tabulator-movingrow-sending"), this.disconnectFromTables()));
        }
        moveRow(e, t) {
            this.toRow = e, this.toRowAfter = t;
        }
        moveHover(e) {
            this.connection ? this.moveHoverConnections.call(this, e) : this.moveHoverTable.call(this, e);
        }
        moveHoverTable(e) {
            var t = this.table.rowManager.getElement(), i = t.scrollTop, s = (this.touchMove ? e.touches[0].pageY : e.pageY) - t.getBoundingClientRect().top + i;
            this.hoverElement.style.top = Math.min(s - this.startY, this.table.rowManager.element.scrollHeight - this.hoverElement.offsetHeight) + "px";
        }
        moveHoverConnections(e) {
            this.hoverElement.style.left = this.startX + (this.touchMove ? e.touches[0].pageX : e.pageX) + "px", this.hoverElement.style.top = this.startY + (this.touchMove ? e.touches[0].pageY : e.pageY) + "px";
        }
        elementRowDrop(e, t, i) {
            this.dispatchExternal("movableRowsElementDrop", e, t, !!i && i.getComponent());
        }
        connectToTables(e) {
            var t;
            this.connectionSelectorsTables && (t = this.commsConnections(this.connectionSelectorsTables), this.dispatchExternal("movableRowsSendingStart", t), this.commsSend(this.connectionSelectorsTables, "moveRow", "connect", {
                row: e
            })), this.connectionSelectorsElements && (this.connectionElements = [], Array.isArray(this.connectionSelectorsElements) || (this.connectionSelectorsElements = [
                this.connectionSelectorsElements
            ]), this.connectionSelectorsElements.forEach((e)=>{
                "string" == typeof e ? this.connectionElements = this.connectionElements.concat(Array.prototype.slice.call(document.querySelectorAll(e))) : this.connectionElements.push(e);
            }), this.connectionElements.forEach((e)=>{
                var t = (t)=>{
                    this.elementRowDrop(t, e, this.moving);
                };
                e.addEventListener("mouseup", t), e.tabulatorElementDropEvent = t, e.classList.add("tabulator-movingrow-receiving");
            }));
        }
        disconnectFromTables() {
            var e;
            this.connectionSelectorsTables && (e = this.commsConnections(this.connectionSelectorsTables), this.dispatchExternal("movableRowsSendingStop", e), this.commsSend(this.connectionSelectorsTables, "moveRow", "disconnect")), this.connectionElements.forEach((e)=>{
                e.classList.remove("tabulator-movingrow-receiving"), e.removeEventListener("mouseup", e.tabulatorElementDropEvent), delete e.tabulatorElementDropEvent;
            });
        }
        connect(e, t) {
            return this.connectedTable ? (console.warn("Move Row Error - Table cannot accept connection, already connected to table:", this.connectedTable), !1) : (this.connectedTable = e, this.connectedRow = t, this.table.element.classList.add("tabulator-movingrow-receiving"), this.table.rowManager.getDisplayRows().forEach((e)=>{
                "row" === e.type && e.modules.moveRow && e.modules.moveRow.mouseup && e.getElement().addEventListener("mouseup", e.modules.moveRow.mouseup);
            }), this.tableRowDropEvent = this.tableRowDrop.bind(this), this.table.element.addEventListener("mouseup", this.tableRowDropEvent), this.dispatchExternal("movableRowsReceivingStart", t, e), !0);
        }
        disconnect(e) {
            e === this.connectedTable ? (this.connectedTable = !1, this.connectedRow = !1, this.table.element.classList.remove("tabulator-movingrow-receiving"), this.table.rowManager.getDisplayRows().forEach((e)=>{
                "row" === e.type && e.modules.moveRow && e.modules.moveRow.mouseup && e.getElement().removeEventListener("mouseup", e.modules.moveRow.mouseup);
            }), this.table.element.removeEventListener("mouseup", this.tableRowDropEvent), this.dispatchExternal("movableRowsReceivingStop", e)) : console.warn("Move Row Error - trying to disconnect from non connected table");
        }
        dropComplete(e, t, i) {
            var s = !1;
            if (i) {
                switch(typeof this.table.options.movableRowsSender){
                    case "string":
                        s = this.senders[this.table.options.movableRowsSender];
                        break;
                    case "function":
                        s = this.table.options.movableRowsSender;
                }
                s ? s.call(this, this.moving ? this.moving.getComponent() : void 0, t ? t.getComponent() : void 0, e) : this.table.options.movableRowsSender && console.warn("Mover Row Error - no matching sender found:", this.table.options.movableRowsSender), this.dispatchExternal("movableRowsSent", this.moving.getComponent(), t ? t.getComponent() : void 0, e);
            } else this.dispatchExternal("movableRowsSentFailed", this.moving.getComponent(), t ? t.getComponent() : void 0, e);
            this.endMove();
        }
        tableRowDrop(e, t) {
            var i = !1, s = !1;
            switch(e.stopImmediatePropagation(), typeof this.table.options.movableRowsReceiver){
                case "string":
                    i = this.receivers[this.table.options.movableRowsReceiver];
                    break;
                case "function":
                    i = this.table.options.movableRowsReceiver;
            }
            i ? s = i.call(this, this.connectedRow.getComponent(), t ? t.getComponent() : void 0, this.connectedTable) : console.warn("Mover Row Error - no matching receiver found:", this.table.options.movableRowsReceiver), s ? this.dispatchExternal("movableRowsReceived", this.connectedRow.getComponent(), t ? t.getComponent() : void 0, this.connectedTable) : this.dispatchExternal("movableRowsReceivedFailed", this.connectedRow.getComponent(), t ? t.getComponent() : void 0, this.connectedTable), this.commsSend(this.connectedTable, "moveRow", "dropcomplete", {
                row: t,
                success: s
            });
        }
        commsReceived(e, t, i) {
            switch(t){
                case "connect":
                    return this.connect(e, i.row);
                case "disconnect":
                    return this.disconnect(e);
                case "dropcomplete":
                    return this.dropComplete(e, i.row, i.success);
            }
        }
        constructor(e){
            super(e), this.placeholderElement = this.createPlaceholderElement(), this.hoverElement = !1, this.checkTimeout = !1, this.checkPeriod = 150, this.moving = !1, this.toRow = !1, this.toRowAfter = !1, this.hasHandle = !1, this.startY = 0, this.startX = 0, this.moveHover = this.moveHover.bind(this), this.endMove = this.endMove.bind(this), this.tableRowDropEvent = !1, this.touchMove = !1, this.connection = !1, this.connectionSelectorsTables = !1, this.connectionSelectorsElements = !1, this.connectionElements = [], this.connections = [], this.connectedTable = !1, this.connectedRow = !1, this.registerTableOption("movableRows", !1), this.registerTableOption("movableRowsConnectedTables", !1), this.registerTableOption("movableRowsConnectedElements", !1), this.registerTableOption("movableRowsSender", !1), this.registerTableOption("movableRowsReceiver", "insert"), this.registerColumnOption("rowHandle");
        }
    }
    Ce.prototype.receivers = {
        insert: function(e, t, i) {
            return this.table.addRow(e.getData(), void 0, t), !0;
        },
        add: function(e, t, i) {
            return this.table.addRow(e.getData()), !0;
        },
        update: function(e, t, i) {
            return !!t && (t.update(e.getData()), !0);
        },
        replace: function(e, t, i) {
            return !!t && (this.table.addRow(e.getData(), void 0, t), t.delete(), !0);
        }
    }, Ce.prototype.senders = {
        delete: function(e, t, i) {
            e.delete();
        }
    }, Ce.moduleName = "moveRow";
    class Ee extends k {
        initialize() {
            this.subscribe("cell-value-changing", this.transformCell.bind(this)), this.subscribe("cell-value-changed", this.mutateLink.bind(this)), this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("row-data-init-before", this.rowDataChanged.bind(this)), this.subscribe("row-data-changing", this.rowDataChanged.bind(this));
        }
        rowDataChanged(e, t, i) {
            return this.transformRow(t, "data", i);
        }
        initializeColumn(e) {
            var t = !1, i = {};
            this.allowedTypes.forEach((s)=>{
                var o, n = "mutator" + (s.charAt(0).toUpperCase() + s.slice(1));
                e.definition[n] && (o = this.lookupMutator(e.definition[n])) && (t = !0, i[n] = {
                    mutator: o,
                    params: e.definition[n + "Params"] || {}
                });
            }), t && (e.modules.mutate = i);
        }
        lookupMutator(e) {
            var t = !1;
            switch(typeof e){
                case "string":
                    Ee.mutators[e] ? t = Ee.mutators[e] : console.warn("Mutator Error - No such mutator found, ignoring: ", e);
                    break;
                case "function":
                    t = e;
            }
            return t;
        }
        transformRow(e, t, i) {
            var s, o = "mutator" + (t.charAt(0).toUpperCase() + t.slice(1));
            return this.enabled && this.table.columnManager.traverse((n)=>{
                var r, a, l;
                n.modules.mutate && (r = n.modules.mutate[o] || n.modules.mutate.mutator || !1) && (s = n.getFieldValue(void 0 !== i ? i : e), "data" != t && void 0 === s || (l = n.getComponent(), a = "function" == typeof r.params ? r.params(s, e, t, l) : r.params, n.setFieldValue(e, r.mutator(s, e, t, a, l))));
            }), e;
        }
        transformCell(e, t) {
            if (e.column.modules.mutate) {
                var i = e.column.modules.mutate.mutatorEdit || e.column.modules.mutate.mutator || !1, s = {};
                if (i) return s = Object.assign(s, e.row.getData()), e.column.setFieldValue(s, t), i.mutator(t, s, "edit", i.params, e.getComponent());
            }
            return t;
        }
        mutateLink(e) {
            var t = e.column.definition.mutateLink;
            t && (Array.isArray(t) || (t = [
                t
            ]), t.forEach((t)=>{
                var i = e.row.getCell(t);
                i && i.setValue(i.getValue(), !0, !0);
            }));
        }
        enable() {
            this.enabled = !0;
        }
        disable() {
            this.enabled = !1;
        }
        constructor(e){
            super(e), this.allowedTypes = [
                "",
                "data",
                "edit",
                "clipboard"
            ], this.enabled = !0, this.registerColumnOption("mutator"), this.registerColumnOption("mutatorParams"), this.registerColumnOption("mutatorData"), this.registerColumnOption("mutatorDataParams"), this.registerColumnOption("mutatorEdit"), this.registerColumnOption("mutatorEditParams"), this.registerColumnOption("mutatorClipboard"), this.registerColumnOption("mutatorClipboardParams"), this.registerColumnOption("mutateLink");
        }
    }
    Ee.moduleName = "mutator", Ee.mutators = {};
    var ye = {
        rows: function(e, t, i, s, o) {
            var n = document.createElement("span"), r = document.createElement("span"), a = document.createElement("span"), l = document.createElement("span"), h = document.createElement("span"), d = document.createElement("span");
            return this.table.modules.localize.langBind("pagination|counter|showing", (e)=>{
                r.innerHTML = e;
            }), this.table.modules.localize.langBind("pagination|counter|of", (e)=>{
                l.innerHTML = e;
            }), this.table.modules.localize.langBind("pagination|counter|rows", (e)=>{
                d.innerHTML = e;
            }), s ? (a.innerHTML = " " + t + "-" + Math.min(t + e - 1, s) + " ", h.innerHTML = " " + s + " ", n.appendChild(r), n.appendChild(a), n.appendChild(l), n.appendChild(h), n.appendChild(d)) : (a.innerHTML = " 0 ", n.appendChild(r), n.appendChild(a), n.appendChild(d)), n;
        },
        pages: function(e, t, i, s, o) {
            var n = document.createElement("span"), r = document.createElement("span"), a = document.createElement("span"), l = document.createElement("span"), h = document.createElement("span"), d = document.createElement("span");
            return this.table.modules.localize.langBind("pagination|counter|showing", (e)=>{
                r.innerHTML = e;
            }), a.innerHTML = " " + i + " ", this.table.modules.localize.langBind("pagination|counter|of", (e)=>{
                l.innerHTML = e;
            }), h.innerHTML = " " + o + " ", this.table.modules.localize.langBind("pagination|counter|pages", (e)=>{
                d.innerHTML = e;
            }), n.appendChild(r), n.appendChild(a), n.appendChild(l), n.appendChild(h), n.appendChild(d), n;
        }
    };
    class Re extends k {
        initialize() {
            this.table.options.pagination ? (this.subscribe("row-deleted", this.rowsUpdated.bind(this)), this.subscribe("row-added", this.rowsUpdated.bind(this)), this.subscribe("data-processed", this.initialLoadComplete.bind(this)), this.subscribe("table-built", this.calculatePageSizes.bind(this)), this.subscribe("footer-redraw", this.footerRedraw.bind(this)), "page" == this.table.options.paginationAddRow && this.subscribe("row-adding-position", this.rowAddingPosition.bind(this)), "remote" === this.table.options.paginationMode && (this.subscribe("data-params", this.remotePageParams.bind(this)), this.subscribe("data-loaded", this._parseRemoteData.bind(this))), this.table.options.progressiveLoad && console.error("Progressive Load Error - Pagination and progressive load cannot be used at the same time"), this.registerDisplayHandler(this.restOnRenderBefore.bind(this), 40), this.registerDisplayHandler(this.getRows.bind(this), 50), this.createElements(), this.initializePageCounter(), this.initializePaginator()) : this.table.options.progressiveLoad && (this.subscribe("data-params", this.remotePageParams.bind(this)), this.subscribe("data-loaded", this._parseRemoteData.bind(this)), this.subscribe("table-built", this.calculatePageSizes.bind(this)), this.subscribe("data-processed", this.initialLoadComplete.bind(this)), this.initializeProgressive(this.table.options.progressiveLoad), "scroll" === this.table.options.progressiveLoad && this.subscribe("scroll-vertical", this.scrollVertical.bind(this)));
        }
        rowAddingPosition(e, t) {
            var i, s = this.table.rowManager, o = s.getDisplayRows();
            return t ? o.length ? i = o[0] : s.activeRows.length && (i = s.activeRows[s.activeRows.length - 1], t = !1) : o.length && (i = o[o.length - 1], t = !(o.length < this.size)), {
                index: i,
                top: t
            };
        }
        calculatePageSizes() {
            var e, t;
            this.table.options.paginationSize ? this.size = this.table.options.paginationSize : ((e = document.createElement("div")).classList.add("tabulator-row"), e.style.visibility = "hidden", (t = document.createElement("div")).classList.add("tabulator-cell"), t.innerHTML = "Page Row Test", e.appendChild(t), this.table.rowManager.getTableElement().appendChild(e), this.size = Math.floor(this.table.rowManager.getElement().clientHeight / e.offsetHeight), this.table.rowManager.getTableElement().removeChild(e)), this.dispatchExternal("pageSizeChanged", this.size), this.generatePageSizeSelectList();
        }
        initialLoadComplete() {
            this.initialLoad = !1;
        }
        remotePageParams(e, t, i, s) {
            return this.initialLoad || (this.progressiveLoad && !i || !this.progressiveLoad && !this.dataChanging) && this.reset(!0), s.page = this.page, this.size && (s.size = this.size), s;
        }
        userSetPageToRow(e) {
            return this.table.options.pagination && (e = this.rowManager.findRow(e)) ? this.setPageToRow(e) : Promise.reject();
        }
        userSetPageSize(e) {
            return !!this.table.options.pagination && (this.setPageSize(e), this.setPage(1));
        }
        scrollVertical(e, t) {
            var i;
            t || this.table.dataLoader.loading || (i = this.table.rowManager.getElement()).scrollHeight - i.clientHeight - e < (this.table.options.progressiveLoadScrollMargin || 2 * i.clientHeight) && this.nextPage().catch(()=>{});
        }
        restOnRenderBefore(e, t) {
            return t || "local" === this.mode && this.reset(), e;
        }
        rowsUpdated() {
            this.refreshData(!0, "all");
        }
        createElements() {
            var e;
            this.element = document.createElement("span"), this.element.classList.add("tabulator-paginator"), this.pagesElement = document.createElement("span"), this.pagesElement.classList.add("tabulator-pages"), (e = document.createElement("button")).classList.add("tabulator-page"), e.setAttribute("type", "button"), e.setAttribute("role", "button"), e.setAttribute("aria-label", ""), e.setAttribute("title", ""), this.firstBut = e.cloneNode(!0), this.firstBut.setAttribute("data-page", "first"), this.prevBut = e.cloneNode(!0), this.prevBut.setAttribute("data-page", "prev"), this.nextBut = e.cloneNode(!0), this.nextBut.setAttribute("data-page", "next"), this.lastBut = e.cloneNode(!0), this.lastBut.setAttribute("data-page", "last"), this.table.options.paginationSizeSelector && (this.pageSizeSelect = document.createElement("select"), this.pageSizeSelect.classList.add("tabulator-page-size"));
        }
        generatePageSizeSelectList() {
            var e = [];
            if (this.pageSizeSelect) {
                if (Array.isArray(this.table.options.paginationSizeSelector)) e = this.table.options.paginationSizeSelector, this.pageSizes = e, -1 == this.pageSizes.indexOf(this.size) && e.unshift(this.size);
                else if (-1 == this.pageSizes.indexOf(this.size)) {
                    e = [];
                    for(let t = 1; t < 5; t++)e.push(this.size * t);
                    this.pageSizes = e;
                } else e = this.pageSizes;
                for(; this.pageSizeSelect.firstChild;)this.pageSizeSelect.removeChild(this.pageSizeSelect.firstChild);
                e.forEach((e)=>{
                    var t = document.createElement("option");
                    t.value = e, !0 === e ? this.langBind("pagination|all", function(e) {
                        t.innerHTML = e;
                    }) : t.innerHTML = e, this.pageSizeSelect.appendChild(t);
                }), this.pageSizeSelect.value = this.size;
            }
        }
        initializePageCounter() {
            var e = this.table.options.paginationCounter, t = null;
            e && ((t = "function" == typeof e ? e : Re.pageCounters[e]) ? (this.pageCounter = t, this.pageCounterElement = document.createElement("span"), this.pageCounterElement.classList.add("tabulator-page-counter")) : console.warn("Pagination Error - No such page counter found: ", e));
        }
        initializePaginator(e) {
            var t, i;
            e || (this.langBind("pagination|first", (e)=>{
                this.firstBut.innerHTML = e;
            }), this.langBind("pagination|first_title", (e)=>{
                this.firstBut.setAttribute("aria-label", e), this.firstBut.setAttribute("title", e);
            }), this.langBind("pagination|prev", (e)=>{
                this.prevBut.innerHTML = e;
            }), this.langBind("pagination|prev_title", (e)=>{
                this.prevBut.setAttribute("aria-label", e), this.prevBut.setAttribute("title", e);
            }), this.langBind("pagination|next", (e)=>{
                this.nextBut.innerHTML = e;
            }), this.langBind("pagination|next_title", (e)=>{
                this.nextBut.setAttribute("aria-label", e), this.nextBut.setAttribute("title", e);
            }), this.langBind("pagination|last", (e)=>{
                this.lastBut.innerHTML = e;
            }), this.langBind("pagination|last_title", (e)=>{
                this.lastBut.setAttribute("aria-label", e), this.lastBut.setAttribute("title", e);
            }), this.firstBut.addEventListener("click", ()=>{
                this.setPage(1);
            }), this.prevBut.addEventListener("click", ()=>{
                this.previousPage();
            }), this.nextBut.addEventListener("click", ()=>{
                this.nextPage();
            }), this.lastBut.addEventListener("click", ()=>{
                this.setPage(this.max);
            }), this.table.options.paginationElement && (this.element = this.table.options.paginationElement), this.pageSizeSelect && (t = document.createElement("label"), this.langBind("pagination|page_size", (e)=>{
                this.pageSizeSelect.setAttribute("aria-label", e), this.pageSizeSelect.setAttribute("title", e), t.innerHTML = e;
            }), this.element.appendChild(t), this.element.appendChild(this.pageSizeSelect), this.pageSizeSelect.addEventListener("change", (e)=>{
                this.setPageSize("true" == this.pageSizeSelect.value || this.pageSizeSelect.value), this.setPage(1);
            })), this.element.appendChild(this.firstBut), this.element.appendChild(this.prevBut), this.element.appendChild(this.pagesElement), this.element.appendChild(this.nextBut), this.element.appendChild(this.lastBut), this.table.options.paginationElement || (this.table.options.paginationCounter && (this.table.options.paginationCounterElement ? this.table.options.paginationCounterElement instanceof HTMLElement ? this.table.options.paginationCounterElement.appendChild(this.pageCounterElement) : "string" == typeof this.table.options.paginationCounterElement && ((i = document.querySelector(this.table.options.paginationCounterElement)) ? i.appendChild(this.pageCounterElement) : console.warn("Pagination Error - Unable to find element matching paginationCounterElement selector:", this.table.options.paginationCounterElement)) : this.footerAppend(this.pageCounterElement)), this.footerAppend(this.element)), this.page = this.table.options.paginationInitialPage, this.count = this.table.options.paginationButtonCount), this.mode = this.table.options.paginationMode;
        }
        initializeProgressive(e) {
            this.initializePaginator(!0), this.mode = "progressive_" + e, this.progressiveLoad = !0;
        }
        trackChanges() {
            this.dispatch("page-changed");
        }
        setMaxRows(e) {
            this.max = e ? !0 === this.size ? 1 : Math.ceil(e / this.size) : 1, this.page > this.max && (this.page = this.max);
        }
        reset(e) {
            this.initialLoad || ("local" == this.mode || e) && (this.page = 1, this.trackChanges());
        }
        setMaxPage(e) {
            e = parseInt(e), this.max = e || 1, this.page > this.max && (this.page = this.max, this.trigger());
        }
        setPage(e) {
            switch(e){
                case "first":
                    return this.setPage(1);
                case "prev":
                    return this.previousPage();
                case "next":
                    return this.nextPage();
                case "last":
                    return this.setPage(this.max);
            }
            return (e = parseInt(e)) > 0 && e <= this.max || "local" !== this.mode ? (this.page = e, this.trackChanges(), this.trigger()) : (console.warn("Pagination Error - Requested page is out of range of 1 - " + this.max + ":", e), Promise.reject());
        }
        setPageToRow(e) {
            var t = this.displayRows(-1).indexOf(e);
            if (t > -1) {
                var i = !0 === this.size ? 1 : Math.ceil((t + 1) / this.size);
                return this.setPage(i);
            }
            return console.warn("Pagination Error - Requested row is not visible"), Promise.reject();
        }
        setPageSize(e) {
            !0 !== e && (e = parseInt(e)), e > 0 && (this.size = e, this.dispatchExternal("pageSizeChanged", e)), this.pageSizeSelect && this.generatePageSizeSelectList(), this.trackChanges();
        }
        _setPageCounter(e, t, i) {
            var s;
            if (this.pageCounter) switch("remote" === this.mode && (t = this.size, i = (this.page - 1) * this.size + 1, e = this.remoteRowCountEstimate), typeof (s = this.pageCounter.call(this, t, i, this.page, e, this.max))){
                case "object":
                    if (s instanceof Node) {
                        for(; this.pageCounterElement.firstChild;)this.pageCounterElement.removeChild(this.pageCounterElement.firstChild);
                        this.pageCounterElement.appendChild(s);
                    } else this.pageCounterElement.innerHTML = "", null != s && console.warn("Page Counter Error - Page Counter has returned a type of object, the only valid page counter object return is an instance of Node, the page counter returned:", s);
                    break;
                case "undefined":
                    this.pageCounterElement.innerHTML = "";
                    break;
                default:
                    this.pageCounterElement.innerHTML = s;
            }
        }
        _setPageButtons() {
            let e = Math.floor((this.count - 1) / 2), t = Math.ceil((this.count - 1) / 2), i = this.max - this.page + e + 1 < this.count ? this.max - this.count + 1 : Math.max(this.page - e, 1), s = this.page <= t ? Math.min(this.count, this.max) : Math.min(this.page + t, this.max);
            for(; this.pagesElement.firstChild;)this.pagesElement.removeChild(this.pagesElement.firstChild);
            1 == this.page ? (this.firstBut.disabled = !0, this.prevBut.disabled = !0) : (this.firstBut.disabled = !1, this.prevBut.disabled = !1), this.page == this.max ? (this.lastBut.disabled = !0, this.nextBut.disabled = !0) : (this.lastBut.disabled = !1, this.nextBut.disabled = !1);
            for(let e1 = i; e1 <= s; e1++)e1 > 0 && e1 <= this.max && this.pagesElement.appendChild(this._generatePageButton(e1));
            this.footerRedraw();
        }
        _generatePageButton(e) {
            var t = document.createElement("button");
            return t.classList.add("tabulator-page"), e == this.page && t.classList.add("active"), t.setAttribute("type", "button"), t.setAttribute("role", "button"), this.langBind("pagination|page_title", (i)=>{
                t.setAttribute("aria-label", i + " " + e), t.setAttribute("title", i + " " + e);
            }), t.setAttribute("data-page", e), t.textContent = e, t.addEventListener("click", (t)=>{
                this.setPage(e);
            }), t;
        }
        previousPage() {
            return this.page > 1 ? (this.page--, this.trackChanges(), this.trigger()) : (console.warn("Pagination Error - Previous page would be less than page 1:", 0), Promise.reject());
        }
        nextPage() {
            return this.page < this.max ? (this.page++, this.trackChanges(), this.trigger()) : (this.progressiveLoad || console.warn("Pagination Error - Next page would be greater than maximum page of " + this.max + ":", this.max + 1), Promise.reject());
        }
        getPage() {
            return this.page;
        }
        getPageMax() {
            return this.max;
        }
        getPageSize(e) {
            return this.size;
        }
        getMode() {
            return this.mode;
        }
        getRows(e) {
            var t, i, s, o, n = 0, r = e.filter((e)=>"row" === e.type);
            if ("local" == this.mode) {
                t = [], this.setMaxRows(e.length), !0 === this.size ? (i = 0, s = e.length) : s = (i = this.size * (this.page - 1)) + parseInt(this.size), this._setPageButtons();
                for(let r1 = i; r1 < s; r1++){
                    let i1 = e[r1];
                    i1 && (t.push(i1), "row" === i1.type && (o || (o = i1), n++));
                }
                return this._setPageCounter(r.length, n, o ? r.indexOf(o) + 1 : 0), t;
            }
            return this._setPageButtons(), this._setPageCounter(r.length), e.slice(0);
        }
        trigger() {
            var e;
            switch(this.mode){
                case "local":
                    return e = this.table.rowManager.scrollLeft, this.refreshData(), this.table.rowManager.scrollHorizontal(e), this.dispatchExternal("pageLoaded", this.getPage()), Promise.resolve();
                case "remote":
                    return this.dataChanging = !0, this.reloadData(null).finally(()=>{
                        this.dataChanging = !1;
                    });
                case "progressive_load":
                case "progressive_scroll":
                    return this.reloadData(null, !0);
                default:
                    return console.warn("Pagination Error - no such pagination mode:", this.mode), Promise.reject();
            }
        }
        _parseRemoteData(e) {
            var t;
            if (void 0 === e.last_page && console.warn("Remote Pagination Error - Server response missing '" + (this.options("dataReceiveParams").last_page || "last_page") + "' property"), e.data) {
                if (this.max = parseInt(e.last_page) || 1, this.remoteRowCountEstimate = void 0 !== e.last_row ? e.last_row : e.last_page * this.size - (this.page == e.last_page ? this.size - e.data.length : 0), this.progressiveLoad) {
                    switch(this.mode){
                        case "progressive_load":
                            1 == this.page ? this.table.rowManager.setData(e.data, !1, 1 == this.page) : this.table.rowManager.addRows(e.data), this.page < this.max && setTimeout(()=>{
                                this.nextPage();
                            }, this.table.options.progressiveLoadDelay);
                            break;
                        case "progressive_scroll":
                            e = 1 === this.page ? e.data : this.table.rowManager.getData().concat(e.data), this.table.rowManager.setData(e, 1 !== this.page, 1 == this.page), t = this.table.options.progressiveLoadScrollMargin || 2 * this.table.rowManager.element.clientHeight, this.table.rowManager.element.scrollHeight <= this.table.rowManager.element.clientHeight + t && this.page < this.max && setTimeout(()=>{
                                this.nextPage();
                            });
                    }
                    return !1;
                }
                this.dispatchExternal("pageLoaded", this.getPage());
            } else console.warn("Remote Pagination Error - Server response missing '" + (this.options("dataReceiveParams").data || "data") + "' property");
            return e.data;
        }
        footerRedraw() {
            var e = this.table.footerManager.containerElement;
            Math.ceil(e.clientWidth) - e.scrollWidth < 0 ? this.pagesElement.style.display = "none" : (this.pagesElement.style.display = "", Math.ceil(e.clientWidth) - e.scrollWidth < 0 && (this.pagesElement.style.display = "none"));
        }
        constructor(e){
            super(e), this.mode = "local", this.progressiveLoad = !1, this.element = null, this.pageCounterElement = null, this.pageCounter = null, this.size = 0, this.page = 1, this.count = 5, this.max = 1, this.remoteRowCountEstimate = null, this.initialLoad = !0, this.dataChanging = !1, this.pageSizes = [], this.registerTableOption("pagination", !1), this.registerTableOption("paginationMode", "local"), this.registerTableOption("paginationSize", !1), this.registerTableOption("paginationInitialPage", 1), this.registerTableOption("paginationCounter", !1), this.registerTableOption("paginationCounterElement", !1), this.registerTableOption("paginationButtonCount", 5), this.registerTableOption("paginationSizeSelector", !1), this.registerTableOption("paginationElement", !1), this.registerTableOption("paginationAddRow", "page"), this.registerTableOption("progressiveLoad", !1), this.registerTableOption("progressiveLoadDelay", 0), this.registerTableOption("progressiveLoadScrollMargin", 0), this.registerTableFunction("setMaxPage", this.setMaxPage.bind(this)), this.registerTableFunction("setPage", this.setPage.bind(this)), this.registerTableFunction("setPageToRow", this.userSetPageToRow.bind(this)), this.registerTableFunction("setPageSize", this.userSetPageSize.bind(this)), this.registerTableFunction("getPageSize", this.getPageSize.bind(this)), this.registerTableFunction("previousPage", this.previousPage.bind(this)), this.registerTableFunction("nextPage", this.nextPage.bind(this)), this.registerTableFunction("getPage", this.getPage.bind(this)), this.registerTableFunction("getPageMax", this.getPageMax.bind(this)), this.registerComponentFunction("row", "pageTo", this.setPageToRow.bind(this));
        }
    }
    Re.moduleName = "page", Re.pageCounters = ye;
    var xe = {
        local: function(e, t) {
            var i = localStorage.getItem(e + "-" + t);
            return !!i && JSON.parse(i);
        },
        cookie: function(e, t) {
            var i, s, o = document.cookie, n = e + "-" + t, r = o.indexOf(n + "=");
            return r > -1 && ((i = (o = o.slice(r)).indexOf(";")) > -1 && (o = o.slice(0, i)), s = o.replace(n + "=", "")), !!s && JSON.parse(s);
        }
    }, Te = {
        local: function(e, t, i) {
            localStorage.setItem(e + "-" + t, JSON.stringify(i));
        },
        cookie: function(e, t, i) {
            var s = new Date;
            s.setDate(s.getDate() + 1e4), document.cookie = e + "-" + t + "=" + JSON.stringify(i) + "; expires=" + s.toUTCString();
        }
    };
    class ke extends k {
        localStorageTest() {
            var e = "_tabulator_test";
            try {
                return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0;
            } catch (e1) {
                return !1;
            }
        }
        initialize() {
            if (this.table.options.persistence) {
                var e, t = this.table.options.persistenceMode, i = this.table.options.persistenceID;
                this.mode = !0 !== t ? t : this.localStorageTest() ? "local" : "cookie", this.table.options.persistenceReaderFunc ? "function" == typeof this.table.options.persistenceReaderFunc ? this.readFunc = this.table.options.persistenceReaderFunc : ke.readers[this.table.options.persistenceReaderFunc] ? this.readFunc = ke.readers[this.table.options.persistenceReaderFunc] : console.warn("Persistence Read Error - invalid reader set", this.table.options.persistenceReaderFunc) : ke.readers[this.mode] ? this.readFunc = ke.readers[this.mode] : console.warn("Persistence Read Error - invalid reader set", this.mode), this.table.options.persistenceWriterFunc ? "function" == typeof this.table.options.persistenceWriterFunc ? this.writeFunc = this.table.options.persistenceWriterFunc : ke.writers[this.table.options.persistenceWriterFunc] ? this.writeFunc = ke.writers[this.table.options.persistenceWriterFunc] : console.warn("Persistence Write Error - invalid reader set", this.table.options.persistenceWriterFunc) : ke.writers[this.mode] ? this.writeFunc = ke.writers[this.mode] : console.warn("Persistence Write Error - invalid writer set", this.mode), this.id = "tabulator-" + (i || this.table.element.getAttribute("id") || ""), this.config = {
                    sort: !0 === this.table.options.persistence || this.table.options.persistence.sort,
                    filter: !0 === this.table.options.persistence || this.table.options.persistence.filter,
                    group: !0 === this.table.options.persistence || this.table.options.persistence.group,
                    page: !0 === this.table.options.persistence || this.table.options.persistence.page,
                    columns: !0 === this.table.options.persistence ? [
                        "title",
                        "width",
                        "visible"
                    ] : this.table.options.persistence.columns
                }, this.config.page && (e = this.retrieveData("page")) && (void 0 === e.paginationSize || !0 !== this.config.page && !this.config.page.size || (this.table.options.paginationSize = e.paginationSize), void 0 === e.paginationInitialPage || !0 !== this.config.page && !this.config.page.page || (this.table.options.paginationInitialPage = e.paginationInitialPage)), this.config.group && (e = this.retrieveData("group")) && (void 0 === e.groupBy || !0 !== this.config.group && !this.config.group.groupBy || (this.table.options.groupBy = e.groupBy), void 0 === e.groupStartOpen || !0 !== this.config.group && !this.config.group.groupStartOpen || (this.table.options.groupStartOpen = e.groupStartOpen), void 0 === e.groupHeader || !0 !== this.config.group && !this.config.group.groupHeader || (this.table.options.groupHeader = e.groupHeader)), this.config.columns && (this.table.options.columns = this.load("columns", this.table.options.columns), this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("column-show", this.save.bind(this, "columns")), this.subscribe("column-hide", this.save.bind(this, "columns")), this.subscribe("column-moved", this.save.bind(this, "columns"))), this.subscribe("table-built", this.tableBuilt.bind(this), 0), this.subscribe("table-redraw", this.tableRedraw.bind(this)), this.subscribe("filter-changed", this.eventSave.bind(this, "filter")), this.subscribe("sort-changed", this.eventSave.bind(this, "sort")), this.subscribe("group-changed", this.eventSave.bind(this, "group")), this.subscribe("page-changed", this.eventSave.bind(this, "page")), this.subscribe("column-resized", this.eventSave.bind(this, "columns")), this.subscribe("column-width", this.eventSave.bind(this, "columns")), this.subscribe("layout-refreshed", this.eventSave.bind(this, "columns"));
            }
            this.registerTableFunction("getColumnLayout", this.getColumnLayout.bind(this)), this.registerTableFunction("setColumnLayout", this.setColumnLayout.bind(this));
        }
        eventSave(e) {
            this.config[e] && this.save(e);
        }
        tableBuilt() {
            var e, t;
            this.config.sort && !1 == !(e = this.load("sort")) && (this.table.options.initialSort = e), this.config.filter && !1 == !(t = this.load("filter")) && (this.table.options.initialFilter = t);
        }
        tableRedraw(e) {
            e && this.config.columns && this.save("columns");
        }
        getColumnLayout() {
            return this.parseColumns(this.table.columnManager.getColumns());
        }
        setColumnLayout(e) {
            return this.table.columnManager.setColumns(this.mergeDefinition(this.table.options.columns, e)), !0;
        }
        initializeColumn(e) {
            var t;
            this.config.columns && (this.defWatcherBlock = !0, t = e.getDefinition(), (!0 === this.config.columns ? Object.keys(t) : this.config.columns).forEach((e)=>{
                var i = Object.getOwnPropertyDescriptor(t, e), s = t[e];
                i && Object.defineProperty(t, e, {
                    set: (e)=>{
                        s = e, this.defWatcherBlock || this.save("columns"), i.set && i.set(e);
                    },
                    get: ()=>(i.get && i.get(), s)
                });
            }), this.defWatcherBlock = !1);
        }
        load(e, t) {
            var i = this.retrieveData(e);
            return t && (i = i ? this.mergeDefinition(t, i) : t), i;
        }
        retrieveData(e) {
            return !!this.readFunc && this.readFunc(this.id, e);
        }
        mergeDefinition(e, t) {
            var i = [];
            return (t = t || []).forEach((t, s)=>{
                var o, n = this._findColumn(e, t);
                n && (!0 === this.config.columns || null == this.config.columns ? (o = Object.keys(n)).push("width") : o = this.config.columns, o.forEach((e)=>{
                    "columns" !== e && void 0 !== t[e] && (n[e] = t[e]);
                }), n.columns && (n.columns = this.mergeDefinition(n.columns, t.columns)), i.push(n));
            }), e.forEach((e, s)=>{
                this._findColumn(t, e) || (i.length > s ? i.splice(s, 0, e) : i.push(e));
            }), i;
        }
        _findColumn(e, t) {
            var i = t.columns ? "group" : t.field ? "field" : "object";
            return e.find(function(e) {
                switch(i){
                    case "group":
                        return e.title === t.title && e.columns.length === t.columns.length;
                    case "field":
                        return e.field === t.field;
                    case "object":
                        return e === t;
                }
            });
        }
        save(e) {
            var t = {};
            switch(e){
                case "columns":
                    t = this.parseColumns(this.table.columnManager.getColumns());
                    break;
                case "filter":
                    t = this.table.modules.filter.getFilters();
                    break;
                case "sort":
                    t = this.validateSorters(this.table.modules.sort.getSort());
                    break;
                case "group":
                    t = this.getGroupConfig();
                    break;
                case "page":
                    t = this.getPageConfig();
            }
            this.writeFunc && this.writeFunc(this.id, e, t);
        }
        validateSorters(e) {
            return e.forEach(function(e) {
                e.column = e.field, delete e.field;
            }), e;
        }
        getGroupConfig() {
            var e = {};
            return this.config.group && ((!0 === this.config.group || this.config.group.groupBy) && (e.groupBy = this.table.options.groupBy), (!0 === this.config.group || this.config.group.groupStartOpen) && (e.groupStartOpen = this.table.options.groupStartOpen), (!0 === this.config.group || this.config.group.groupHeader) && (e.groupHeader = this.table.options.groupHeader)), e;
        }
        getPageConfig() {
            var e = {};
            return this.config.page && ((!0 === this.config.page || this.config.page.size) && (e.paginationSize = this.table.modules.page.getPageSize()), (!0 === this.config.page || this.config.page.page) && (e.paginationInitialPage = this.table.modules.page.getPage())), e;
        }
        parseColumns(e) {
            var t = [], i = [
                "headerContextMenu",
                "headerMenu",
                "contextMenu",
                "clickMenu"
            ];
            return e.forEach((e)=>{
                var s, o = {}, n = e.getDefinition();
                e.isGroup ? (o.title = n.title, o.columns = this.parseColumns(e.getColumns())) : (o.field = e.getField(), !0 === this.config.columns || null == this.config.columns ? ((s = Object.keys(n)).push("width"), s.push("visible")) : s = this.config.columns, s.forEach((t)=>{
                    switch(t){
                        case "width":
                            o.width = e.getWidth();
                            break;
                        case "visible":
                            o.visible = e.visible;
                            break;
                        default:
                            "function" != typeof n[t] && -1 === i.indexOf(t) && (o[t] = n[t]);
                    }
                })), t.push(o);
            }), t;
        }
        constructor(e){
            super(e), this.mode = "", this.id = "", this.defWatcherBlock = !1, this.config = {}, this.readFunc = !1, this.writeFunc = !1, this.registerTableOption("persistence", !1), this.registerTableOption("persistenceID", ""), this.registerTableOption("persistenceMode", !0), this.registerTableOption("persistenceReaderFunc", !1), this.registerTableOption("persistenceWriterFunc", !1);
        }
    }
    ke.moduleName = "persistence", ke.moduleInitOrder = -10, ke.readers = xe, ke.writers = Te;
    class Me extends k {
        initialize() {
            this.initializeRowWatchers(), this.initializeGroupWatchers(), this.subscribe("column-init", this.initializeColumn.bind(this));
        }
        _componentPopupCall(e, t, i) {
            this.loadPopupEvent(t, null, e, i);
        }
        initializeRowWatchers() {
            this.table.options.rowContextPopup && (this.subscribe("row-contextmenu", this.loadPopupEvent.bind(this, this.table.options.rowContextPopup)), this.table.on("rowTapHold", this.loadPopupEvent.bind(this, this.table.options.rowContextPopup))), this.table.options.rowClickPopup && this.subscribe("row-click", this.loadPopupEvent.bind(this, this.table.options.rowClickPopup)), this.table.options.rowDblClickPopup && this.subscribe("row-dblclick", this.loadPopupEvent.bind(this, this.table.options.rowDblClickPopup));
        }
        initializeGroupWatchers() {
            this.table.options.groupContextPopup && (this.subscribe("group-contextmenu", this.loadPopupEvent.bind(this, this.table.options.groupContextPopup)), this.table.on("groupTapHold", this.loadPopupEvent.bind(this, this.table.options.groupContextPopup))), this.table.options.groupClickPopup && this.subscribe("group-click", this.loadPopupEvent.bind(this, this.table.options.groupClickPopup)), this.table.options.groupDblClickPopup && this.subscribe("group-dblclick", this.loadPopupEvent.bind(this, this.table.options.groupDblClickPopup));
        }
        initializeColumn(e) {
            var t = e.definition;
            t.headerContextPopup && !this.columnSubscribers.headerContextPopup && (this.columnSubscribers.headerContextPopup = this.loadPopupTableColumnEvent.bind(this, "headerContextPopup"), this.subscribe("column-contextmenu", this.columnSubscribers.headerContextPopup), this.table.on("headerTapHold", this.loadPopupTableColumnEvent.bind(this, "headerContextPopup"))), t.headerClickPopup && !this.columnSubscribers.headerClickPopup && (this.columnSubscribers.headerClickPopup = this.loadPopupTableColumnEvent.bind(this, "headerClickPopup"), this.subscribe("column-click", this.columnSubscribers.headerClickPopup)), t.headerDblClickPopup && !this.columnSubscribers.headerDblClickPopup && (this.columnSubscribers.headerDblClickPopup = this.loadPopupTableColumnEvent.bind(this, "headerDblClickPopup"), this.subscribe("column-dblclick", this.columnSubscribers.headerDblClickPopup)), t.headerPopup && this.initializeColumnHeaderPopup(e), t.contextPopup && !this.columnSubscribers.contextPopup && (this.columnSubscribers.contextPopup = this.loadPopupTableCellEvent.bind(this, "contextPopup"), this.subscribe("cell-contextmenu", this.columnSubscribers.contextPopup), this.table.on("cellTapHold", this.loadPopupTableCellEvent.bind(this, "contextPopup"))), t.clickPopup && !this.columnSubscribers.clickPopup && (this.columnSubscribers.clickPopup = this.loadPopupTableCellEvent.bind(this, "clickPopup"), this.subscribe("cell-click", this.columnSubscribers.clickPopup)), t.dblClickPopup && !this.columnSubscribers.dblClickPopup && (this.columnSubscribers.dblClickPopup = this.loadPopupTableCellEvent.bind(this, "dblClickPopup"), this.subscribe("cell-click", this.columnSubscribers.dblClickPopup));
        }
        initializeColumnHeaderPopup(e) {
            var t, i = e.definition.headerPopupIcon;
            (t = document.createElement("span")).classList.add("tabulator-header-popup-button"), i ? ("function" == typeof i && (i = i(e.getComponent())), i instanceof HTMLElement ? t.appendChild(i) : t.innerHTML = i) : t.innerHTML = "&vellip;", t.addEventListener("click", (t)=>{
                t.stopPropagation(), t.preventDefault(), this.loadPopupEvent(e.definition.headerPopup, t, e);
            }), e.titleElement.insertBefore(t, e.titleElement.firstChild);
        }
        loadPopupTableCellEvent(e, t, i) {
            i._cell && (i = i._cell), i.column.definition[e] && this.loadPopupEvent(i.column.definition[e], t, i);
        }
        loadPopupTableColumnEvent(e, t, i) {
            i._column && (i = i._column), i.definition[e] && this.loadPopupEvent(i.definition[e], t, i);
        }
        loadPopupEvent(e, t, i, s) {
            var o;
            i._group ? i = i._group : i._row && (i = i._row), e = "function" == typeof e ? e.call(this.table, t, i.getComponent(), function(e) {
                o = e;
            }) : e, this.loadPopup(t, i, e, o, s);
        }
        loadPopup(e, t, i, s, o) {
            var n, r, a = !(e instanceof MouseEvent);
            i instanceof HTMLElement ? n = i : (n = document.createElement("div")).innerHTML = i, n.classList.add("tabulator-popup"), n.addEventListener("click", (e)=>{
                e.stopPropagation();
            }), a || e.preventDefault(), r = this.popup(n), "function" == typeof s && r.renderCallback(s), e ? r.show(e) : r.show(t.getElement(), o || "center"), r.hideOnBlur(()=>{
                this.dispatchExternal("popupClosed", t.getComponent());
            }), this.dispatchExternal("popupOpened", t.getComponent());
        }
        constructor(e){
            super(e), this.columnSubscribers = {}, this.registerTableOption("rowContextPopup", !1), this.registerTableOption("rowClickPopup", !1), this.registerTableOption("rowDblClickPopup", !1), this.registerTableOption("groupContextPopup", !1), this.registerTableOption("groupClickPopup", !1), this.registerTableOption("groupDblClickPopup", !1), this.registerColumnOption("headerContextPopup"), this.registerColumnOption("headerClickPopup"), this.registerColumnOption("headerDblClickPopup"), this.registerColumnOption("headerPopup"), this.registerColumnOption("headerPopupIcon"), this.registerColumnOption("contextPopup"), this.registerColumnOption("clickPopup"), this.registerColumnOption("dblClickPopup"), this.registerComponentFunction("cell", "popup", this._componentPopupCall.bind(this)), this.registerComponentFunction("column", "popup", this._componentPopupCall.bind(this)), this.registerComponentFunction("row", "popup", this._componentPopupCall.bind(this)), this.registerComponentFunction("group", "popup", this._componentPopupCall.bind(this));
        }
    }
    Me.moduleName = "popup";
    class Le extends k {
        initialize() {
            this.table.options.printAsHtml && (window.addEventListener("beforeprint", this.replaceTable.bind(this)), window.addEventListener("afterprint", this.cleanup.bind(this))), this.registerTableFunction("print", this.printFullscreen.bind(this));
        }
        replaceTable() {
            this.manualBlock || (this.element = document.createElement("div"), this.element.classList.add("tabulator-print-table"), this.element.appendChild(this.table.modules.export.generateTable(this.table.options.printConfig, this.table.options.printStyled, this.table.options.printRowRange, "print")), this.table.element.style.display = "none", this.table.element.parentNode.insertBefore(this.element, this.table.element));
        }
        cleanup() {
            document.body.classList.remove("tabulator-print-fullscreen-hide"), this.element && this.element.parentNode && (this.element.parentNode.removeChild(this.element), this.table.element.style.display = "");
        }
        printFullscreen(e, t, i) {
            var s, o, n = window.scrollX, r = window.scrollY, a = document.createElement("div"), l = document.createElement("div"), h = this.table.modules.export.generateTable(void 0 !== i ? i : this.table.options.printConfig, void 0 !== t ? t : this.table.options.printStyled, e || this.table.options.printRowRange, "print");
            this.manualBlock = !0, this.element = document.createElement("div"), this.element.classList.add("tabulator-print-fullscreen"), this.table.options.printHeader && (a.classList.add("tabulator-print-header"), "string" == typeof (s = "function" == typeof this.table.options.printHeader ? this.table.options.printHeader.call(this.table) : this.table.options.printHeader) ? a.innerHTML = s : a.appendChild(s), this.element.appendChild(a)), this.element.appendChild(h), this.table.options.printFooter && (l.classList.add("tabulator-print-footer"), "string" == typeof (o = "function" == typeof this.table.options.printFooter ? this.table.options.printFooter.call(this.table) : this.table.options.printFooter) ? l.innerHTML = o : l.appendChild(o), this.element.appendChild(l)), document.body.classList.add("tabulator-print-fullscreen-hide"), document.body.appendChild(this.element), this.table.options.printFormatter && this.table.options.printFormatter(this.element, h), window.print(), this.cleanup(), window.scrollTo(n, r), this.manualBlock = !1;
        }
        constructor(e){
            super(e), this.element = !1, this.manualBlock = !1, this.registerTableOption("printAsHtml", !1), this.registerTableOption("printFormatter", !1), this.registerTableOption("printHeader", !1), this.registerTableOption("printFooter", !1), this.registerTableOption("printStyled", !0), this.registerTableOption("printRowRange", "visible"), this.registerTableOption("printConfig", {}), this.registerColumnOption("print"), this.registerColumnOption("titlePrint");
        }
    }
    Le.moduleName = "print";
    class De extends k {
        initialize() {
            this.table.options.reactiveData && (this.subscribe("cell-value-save-before", this.block.bind(this, "cellsave")), this.subscribe("cell-value-save-after", this.unblock.bind(this, "cellsave")), this.subscribe("row-data-save-before", this.block.bind(this, "rowsave")), this.subscribe("row-data-save-after", this.unblock.bind(this, "rowsave")), this.subscribe("row-data-init-after", this.watchRow.bind(this)), this.subscribe("data-processing", this.watchData.bind(this)), this.subscribe("table-destroy", this.unwatchData.bind(this)));
        }
        watchData(e) {
            var t, i = this;
            this.currentVersion++, t = this.currentVersion, this.unwatchData(), this.data = e, this.origFuncs.push = e.push, Object.defineProperty(this.data, "push", {
                enumerable: !1,
                configurable: !0,
                value: function() {
                    var s, o = Array.from(arguments);
                    return i.blocked || t !== i.currentVersion || (i.block("data-push"), o.forEach((e)=>{
                        i.table.rowManager.addRowActual(e, !1);
                    }), s = i.origFuncs.push.apply(e, arguments), i.unblock("data-push")), s;
                }
            }), this.origFuncs.unshift = e.unshift, Object.defineProperty(this.data, "unshift", {
                enumerable: !1,
                configurable: !0,
                value: function() {
                    var s, o = Array.from(arguments);
                    return i.blocked || t !== i.currentVersion || (i.block("data-unshift"), o.forEach((e)=>{
                        i.table.rowManager.addRowActual(e, !0);
                    }), s = i.origFuncs.unshift.apply(e, arguments), i.unblock("data-unshift")), s;
                }
            }), this.origFuncs.shift = e.shift, Object.defineProperty(this.data, "shift", {
                enumerable: !1,
                configurable: !0,
                value: function() {
                    var s, o;
                    return i.blocked || t !== i.currentVersion || (i.block("data-shift"), i.data.length && (s = i.table.rowManager.getRowFromDataObject(i.data[0])) && s.deleteActual(), o = i.origFuncs.shift.call(e), i.unblock("data-shift")), o;
                }
            }), this.origFuncs.pop = e.pop, Object.defineProperty(this.data, "pop", {
                enumerable: !1,
                configurable: !0,
                value: function() {
                    var s, o;
                    return i.blocked || t !== i.currentVersion || (i.block("data-pop"), i.data.length && (s = i.table.rowManager.getRowFromDataObject(i.data[i.data.length - 1])) && s.deleteActual(), o = i.origFuncs.pop.call(e), i.unblock("data-pop")), o;
                }
            }), this.origFuncs.splice = e.splice, Object.defineProperty(this.data, "splice", {
                enumerable: !1,
                configurable: !0,
                value: function() {
                    var s, o, n = Array.from(arguments), r = n[0] < 0 ? e.length + n[0] : n[0], a = n[1], l = !!n[2] && n.slice(2);
                    if (!i.blocked && t === i.currentVersion) {
                        if (i.block("data-splice"), l && ((s = !!e[r] && i.table.rowManager.getRowFromDataObject(e[r])) ? l.forEach((e)=>{
                            i.table.rowManager.addRowActual(e, !0, s, !0);
                        }) : (l = l.slice().reverse()).forEach((e)=>{
                            i.table.rowManager.addRowActual(e, !0, !1, !0);
                        })), 0 !== a) {
                            var h = e.slice(r, void 0 === n[1] ? n[1] : r + a);
                            h.forEach((e, t)=>{
                                var s = i.table.rowManager.getRowFromDataObject(e);
                                s && s.deleteActual(t !== h.length - 1);
                            });
                        }
                        (l || 0 !== a) && i.table.rowManager.reRenderInPosition(), o = i.origFuncs.splice.apply(e, arguments), i.unblock("data-splice");
                    }
                    return o;
                }
            });
        }
        unwatchData() {
            if (!1 !== this.data) for(var e in this.origFuncs)Object.defineProperty(this.data, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this.origFuncs.key
            });
        }
        watchRow(e) {
            var t = e.getData();
            for(var i in t)this.watchKey(e, t, i);
            this.table.options.dataTree && this.watchTreeChildren(e);
        }
        watchTreeChildren(e) {
            var t = this, i = e.getData()[this.table.options.dataTreeChildField], s = {};
            i && (s.push = i.push, Object.defineProperty(i, "push", {
                enumerable: !1,
                configurable: !0,
                value: ()=>{
                    if (!t.blocked) {
                        t.block("tree-push");
                        var o = s.push.apply(i, arguments);
                        this.rebuildTree(e), t.unblock("tree-push");
                    }
                    return o;
                }
            }), s.unshift = i.unshift, Object.defineProperty(i, "unshift", {
                enumerable: !1,
                configurable: !0,
                value: ()=>{
                    if (!t.blocked) {
                        t.block("tree-unshift");
                        var o = s.unshift.apply(i, arguments);
                        this.rebuildTree(e), t.unblock("tree-unshift");
                    }
                    return o;
                }
            }), s.shift = i.shift, Object.defineProperty(i, "shift", {
                enumerable: !1,
                configurable: !0,
                value: ()=>{
                    if (!t.blocked) {
                        t.block("tree-shift");
                        var o = s.shift.call(i);
                        this.rebuildTree(e), t.unblock("tree-shift");
                    }
                    return o;
                }
            }), s.pop = i.pop, Object.defineProperty(i, "pop", {
                enumerable: !1,
                configurable: !0,
                value: ()=>{
                    if (!t.blocked) {
                        t.block("tree-pop");
                        var o = s.pop.call(i);
                        this.rebuildTree(e), t.unblock("tree-pop");
                    }
                    return o;
                }
            }), s.splice = i.splice, Object.defineProperty(i, "splice", {
                enumerable: !1,
                configurable: !0,
                value: ()=>{
                    if (!t.blocked) {
                        t.block("tree-splice");
                        var o = s.splice.apply(i, arguments);
                        this.rebuildTree(e), t.unblock("tree-splice");
                    }
                    return o;
                }
            }));
        }
        rebuildTree(e) {
            this.table.modules.dataTree.initializeRow(e), this.table.modules.dataTree.layoutRow(e), this.table.rowManager.refreshActiveData("tree", !1, !0);
        }
        watchKey(e, t, i) {
            var s = this, o = Object.getOwnPropertyDescriptor(t, i), n = t[i], r = this.currentVersion;
            Object.defineProperty(t, i, {
                set: (t)=>{
                    if (n = t, !s.blocked && r === s.currentVersion) {
                        s.block("key");
                        var a = {};
                        a[i] = t, e.updateData(a), s.unblock("key");
                    }
                    o.set && o.set(t);
                },
                get: ()=>(o.get && o.get(), n)
            });
        }
        unwatchRow(e) {
            var t = e.getData();
            for(var i in t)Object.defineProperty(t, i, {
                value: t[i]
            });
        }
        block(e) {
            this.blocked || (this.blocked = e);
        }
        unblock(e) {
            this.blocked === e && (this.blocked = !1);
        }
        constructor(e){
            super(e), this.data = !1, this.blocked = !1, this.origFuncs = {}, this.currentVersion = 0, this.registerTableOption("reactiveData", !1);
        }
    }
    De.moduleName = "reactiveData";
    class Se extends k {
        initialize() {
            this.subscribe("column-rendered", this.layoutColumnHeader.bind(this));
        }
        initializeEventWatchers() {
            this.initialized || (this.subscribe("cell-rendered", this.layoutCellHandles.bind(this)), this.subscribe("cell-delete", this.deInitializeComponent.bind(this)), this.subscribe("cell-height", this.resizeHandle.bind(this)), this.subscribe("column-moved", this.columnLayoutUpdated.bind(this)), this.subscribe("column-hide", this.deInitializeColumn.bind(this)), this.subscribe("column-show", this.columnLayoutUpdated.bind(this)), this.subscribe("column-width", this.columnWidthUpdated.bind(this)), this.subscribe("column-delete", this.deInitializeComponent.bind(this)), this.subscribe("column-height", this.resizeHandle.bind(this)), this.initialized = !0);
        }
        layoutCellHandles(e) {
            "row" === e.row.type && (this.deInitializeComponent(e), this.initializeColumn("cell", e, e.column, e.element));
        }
        layoutColumnHeader(e) {
            e.definition.resizable && (this.initializeEventWatchers(), this.deInitializeComponent(e), this.initializeColumn("header", e, e, e.element));
        }
        columnLayoutUpdated(e) {
            var t = e.prevColumn();
            this.reinitializeColumn(e), t && this.reinitializeColumn(t);
        }
        columnWidthUpdated(e) {
            e.modules.frozen && (this.table.modules.frozenColumns.leftColumns.includes(e) ? this.table.modules.frozenColumns.leftColumns.forEach((e)=>{
                this.reinitializeColumn(e);
            }) : this.table.modules.frozenColumns.rightColumns.includes(e) && this.table.modules.frozenColumns.rightColumns.forEach((e)=>{
                this.reinitializeColumn(e);
            }));
        }
        frozenColumnOffset(e) {
            var t = !1;
            return e.modules.frozen && (t = e.modules.frozen.marginValue, "left" === e.modules.frozen.position ? t += e.getWidth() - 3 : t && (t -= 3)), !1 !== t && t + "px";
        }
        reinitializeColumn(e) {
            var t = this.frozenColumnOffset(e);
            e.cells.forEach((i)=>{
                i.modules.resize && i.modules.resize.handleEl && (t && (i.modules.resize.handleEl.style[e.modules.frozen.position] = t), i.element.after(i.modules.resize.handleEl));
            }), e.modules.resize && e.modules.resize.handleEl && (t && (e.modules.resize.handleEl.style[e.modules.frozen.position] = t), e.element.after(e.modules.resize.handleEl));
        }
        initializeColumn(e, t, i, s) {
            var o = this, n = i.definition.resizable, r = {}, a = i.getLastColumn();
            if ("header" === e && (r = {
                variableHeight: "textarea" == i.definition.formatter || i.definition.variableHeight
            }), (!0 === n || n == e) && this._checkResizability(a)) {
                var l = document.createElement("span");
                l.className = "tabulator-col-resize-handle", l.addEventListener("click", function(e) {
                    e.stopPropagation();
                });
                var h = function(e) {
                    o.startColumn = i, o.initialNextColumn = o.nextColumn = a.nextColumn(), o._mouseDown(e, a, l);
                };
                l.addEventListener("mousedown", h), l.addEventListener("touchstart", h, {
                    passive: !0
                }), l.addEventListener("dblclick", (e)=>{
                    var t = a.getWidth();
                    e.stopPropagation(), a.reinitializeWidth(!0), t !== a.getWidth() && (o.dispatch("column-resized", a), o.table.externalEvents.dispatch("columnResized", a.getComponent()));
                }), i.modules.frozen && (l.style.position = "sticky", l.style[i.modules.frozen.position] = this.frozenColumnOffset(i)), r.handleEl = l, s.parentNode && i.visible && s.after(l);
            }
            t.modules.resize = r;
        }
        deInitializeColumn(e) {
            this.deInitializeComponent(e), e.cells.forEach((e)=>{
                this.deInitializeComponent(e);
            });
        }
        deInitializeComponent(e) {
            var t;
            e.modules.resize && (t = e.modules.resize.handleEl) && t.parentElement && t.parentElement.removeChild(t);
        }
        resizeHandle(e, t) {
            e.modules.resize && e.modules.resize.handleEl && (e.modules.resize.handleEl.style.height = t);
        }
        _checkResizability(e) {
            return e.definition.resizable;
        }
        _mouseDown(e, t, i) {
            var s = this;
            function o(e) {
                var i, o, n = void 0 === e.screenX ? e.touches[0].screenX : e.screenX, r = n - s.startX, a = n - s.latestX;
                if (s.latestX = n, s.table.rtl && (r = -r, a = -a), i = t.width == t.minWidth || t.width == t.maxWidth, t.setWidth(s.startWidth + r), o = t.width == t.minWidth || t.width == t.maxWidth, a < 0 && (s.nextColumn = s.initialNextColumn), s.table.options.resizableColumnFit && s.nextColumn && (!i || !o)) {
                    let e1 = s.nextColumn.getWidth();
                    a > 0 && e1 <= s.nextColumn.minWidth && (s.nextColumn = s.nextColumn.nextColumn()), s.nextColumn && s.nextColumn.setWidth(s.nextColumn.getWidth() - a);
                }
                s.table.columnManager.rerenderColumns(!0), !s.table.browserSlow && t.modules.resize && t.modules.resize.variableHeight && t.checkCellHeights();
            }
            function n(e) {
                s.startColumn.modules.edit && (s.startColumn.modules.edit.blocked = !1), s.table.browserSlow && t.modules.resize && t.modules.resize.variableHeight && t.checkCellHeights(), document.body.removeEventListener("mouseup", n), document.body.removeEventListener("mousemove", o), i.removeEventListener("touchmove", o), i.removeEventListener("touchend", n), s.table.element.classList.remove("tabulator-block-select"), s.startWidth !== t.getWidth() && (s.table.columnManager.verticalAlignHeaders(), s.dispatch("column-resized", t), s.table.externalEvents.dispatch("columnResized", t.getComponent()));
            }
            s.table.element.classList.add("tabulator-block-select"), e.stopPropagation(), s.startColumn.modules.edit && (s.startColumn.modules.edit.blocked = !0), s.startX = void 0 === e.screenX ? e.touches[0].screenX : e.screenX, s.latestX = s.startX, s.startWidth = t.getWidth(), document.body.addEventListener("mousemove", o), document.body.addEventListener("mouseup", n), i.addEventListener("touchmove", o, {
                passive: !0
            }), i.addEventListener("touchend", n);
        }
        constructor(e){
            super(e), this.startColumn = !1, this.startX = !1, this.startWidth = !1, this.latestX = !1, this.handle = null, this.initialNextColumn = null, this.nextColumn = null, this.initialized = !1, this.registerColumnOption("resizable", !0), this.registerTableOption("resizableColumnFit", !1);
        }
    }
    Se.moduleName = "resizeColumns";
    class Pe extends k {
        initialize() {
            this.table.options.resizableRows && this.subscribe("row-layout-after", this.initializeRow.bind(this));
        }
        initializeRow(e) {
            var t = this, i = e.getElement(), s = document.createElement("div");
            s.className = "tabulator-row-resize-handle";
            var o = document.createElement("div");
            o.className = "tabulator-row-resize-handle prev", s.addEventListener("click", function(e) {
                e.stopPropagation();
            });
            var n = function(i) {
                t.startRow = e, t._mouseDown(i, e, s);
            };
            s.addEventListener("mousedown", n), s.addEventListener("touchstart", n, {
                passive: !0
            }), o.addEventListener("click", function(e) {
                e.stopPropagation();
            });
            var r = function(i) {
                var s = t.table.rowManager.prevDisplayRow(e);
                s && (t.startRow = s, t._mouseDown(i, s, o));
            };
            o.addEventListener("mousedown", r), o.addEventListener("touchstart", r, {
                passive: !0
            }), i.appendChild(s), i.appendChild(o);
        }
        _mouseDown(e, t, i) {
            var s = this;
            function o(e) {
                t.setHeight(s.startHeight + ((void 0 === e.screenY ? e.touches[0].screenY : e.screenY) - s.startY));
            }
            function n(e) {
                document.body.removeEventListener("mouseup", o), document.body.removeEventListener("mousemove", o), i.removeEventListener("touchmove", o), i.removeEventListener("touchend", n), s.table.element.classList.remove("tabulator-block-select"), s.dispatchExternal("rowResized", t.getComponent());
            }
            s.table.element.classList.add("tabulator-block-select"), e.stopPropagation(), s.startY = void 0 === e.screenY ? e.touches[0].screenY : e.screenY, s.startHeight = t.getHeight(), document.body.addEventListener("mousemove", o), document.body.addEventListener("mouseup", n), i.addEventListener("touchmove", o, {
                passive: !0
            }), i.addEventListener("touchend", n);
        }
        constructor(e){
            super(e), this.startColumn = !1, this.startY = !1, this.startHeight = !1, this.handle = null, this.prevHandle = null, this.registerTableOption("resizableRows", !1);
        }
    }
    Pe.moduleName = "resizeRows";
    class ze extends k {
        initialize() {
            if (this.table.options.autoResize) {
                var e, t = this.table;
                this.tableHeight = t.element.clientHeight, this.tableWidth = t.element.clientWidth, t.element.parentNode && (this.containerHeight = t.element.parentNode.clientHeight, this.containerWidth = t.element.parentNode.clientWidth), "undefined" != typeof IntersectionObserver && "undefined" != typeof ResizeObserver && "virtual" === t.rowManager.getRenderMode() ? (this.initializeVisibilityObserver(), this.autoResize = !0, this.resizeObserver = new ResizeObserver((e)=>{
                    if (!t.browserMobile || t.browserMobile && !t.modules.edit.currentCell) {
                        var i = Math.floor(e[0].contentRect.height), s = Math.floor(e[0].contentRect.width);
                        this.tableHeight == i && this.tableWidth == s || (this.tableHeight = i, this.tableWidth = s, t.element.parentNode && (this.containerHeight = t.element.parentNode.clientHeight, this.containerWidth = t.element.parentNode.clientWidth), this.redrawTable());
                    }
                }), this.resizeObserver.observe(t.element), e = window.getComputedStyle(t.element), this.table.element.parentNode && !this.table.rowManager.fixedHeight && (e.getPropertyValue("max-height") || e.getPropertyValue("min-height")) && (this.containerObserver = new ResizeObserver((e)=>{
                    if (!t.browserMobile || t.browserMobile && !t.modules.edit.currentCell) {
                        var i = Math.floor(e[0].contentRect.height), s = Math.floor(e[0].contentRect.width);
                        this.containerHeight == i && this.containerWidth == s || (this.containerHeight = i, this.containerWidth = s, this.tableHeight = t.element.clientHeight, this.tableWidth = t.element.clientWidth), this.redrawTable();
                    }
                }), this.containerObserver.observe(this.table.element.parentNode)), this.subscribe("table-resize", this.tableResized.bind(this))) : (this.binding = function() {
                    (!t.browserMobile || t.browserMobile && !t.modules.edit.currentCell) && (t.columnManager.rerenderColumns(!0), t.redraw());
                }, window.addEventListener("resize", this.binding)), this.subscribe("table-destroy", this.clearBindings.bind(this));
            }
        }
        initializeVisibilityObserver() {
            this.visibilityObserver = new IntersectionObserver((e)=>{
                this.visible = e[0].isIntersecting, this.initialized ? this.visible && (this.redrawTable(this.initialRedraw), this.initialRedraw = !1) : (this.initialized = !0, this.initialRedraw = !this.visible);
            }), this.visibilityObserver.observe(this.table.element);
        }
        redrawTable(e) {
            this.initialized && this.visible && (this.table.columnManager.rerenderColumns(!0), this.table.redraw(e));
        }
        tableResized() {
            this.table.rowManager.redraw();
        }
        clearBindings() {
            this.binding && window.removeEventListener("resize", this.binding), this.resizeObserver && this.resizeObserver.unobserve(this.table.element), this.visibilityObserver && this.visibilityObserver.unobserve(this.table.element), this.containerObserver && this.containerObserver.unobserve(this.table.element.parentNode);
        }
        constructor(e){
            super(e), this.binding = !1, this.visibilityObserver = !1, this.resizeObserver = !1, this.containerObserver = !1, this.tableHeight = 0, this.tableWidth = 0, this.containerHeight = 0, this.containerWidth = 0, this.autoResize = !1, this.visible = !1, this.initialized = !1, this.initialRedraw = !1, this.registerTableOption("autoResize", !0);
        }
    }
    ze.moduleName = "resizeTable";
    class Fe extends k {
        initialize() {
            this.table.options.responsiveLayout && (this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("column-show", this.updateColumnVisibility.bind(this)), this.subscribe("column-hide", this.updateColumnVisibility.bind(this)), this.subscribe("columns-loaded", this.initializeResponsivity.bind(this)), this.subscribe("column-moved", this.initializeResponsivity.bind(this)), this.subscribe("column-add", this.initializeResponsivity.bind(this)), this.subscribe("column-delete", this.initializeResponsivity.bind(this)), this.subscribe("table-redrawing", this.tableRedraw.bind(this)), "collapse" === this.table.options.responsiveLayout && (this.subscribe("row-data-changed", this.generateCollapsedRowContent.bind(this)), this.subscribe("row-init", this.initializeRow.bind(this)), this.subscribe("row-layout", this.layoutRow.bind(this))));
        }
        tableRedraw(e) {
            -1 === [
                "fitColumns",
                "fitDataStretch"
            ].indexOf(this.layoutMode()) && (e || this.update());
        }
        initializeResponsivity() {
            var e = [];
            this.mode = this.table.options.responsiveLayout, this.collapseFormatter = this.table.options.responsiveLayoutCollapseFormatter || this.formatCollapsedData, this.collapseStartOpen = this.table.options.responsiveLayoutCollapseStartOpen, this.hiddenColumns = [], this.table.columnManager.columnsByIndex.forEach((t, i)=>{
                t.modules.responsive && t.modules.responsive.order && t.modules.responsive.visible && (t.modules.responsive.index = i, e.push(t), t.visible || "collapse" !== this.mode || this.hiddenColumns.push(t));
            }), e = (e = e.reverse()).sort((e, t)=>t.modules.responsive.order - e.modules.responsive.order || t.modules.responsive.index - e.modules.responsive.index), this.columns = e, "collapse" === this.mode && this.generateCollapsedContent();
            for (let e1 of this.table.columnManager.columnsByIndex)if ("responsiveCollapse" == e1.definition.formatter) {
                this.collapseHandleColumn = e1;
                break;
            }
            this.collapseHandleColumn && (this.hiddenColumns.length ? this.collapseHandleColumn.show() : this.collapseHandleColumn.hide());
        }
        initializeColumn(e) {
            var t = e.getDefinition();
            e.modules.responsive = {
                order: void 0 === t.responsive ? 1 : t.responsive,
                visible: !1 !== t.visible
            };
        }
        initializeRow(e) {
            var t;
            "calc" !== e.type && ((t = document.createElement("div")).classList.add("tabulator-responsive-collapse"), e.modules.responsiveLayout = {
                element: t,
                open: this.collapseStartOpen
            }, this.collapseStartOpen || (t.style.display = "none"));
        }
        layoutRow(e) {
            var t = e.getElement();
            e.modules.responsiveLayout && (t.appendChild(e.modules.responsiveLayout.element), this.generateCollapsedRowContent(e));
        }
        updateColumnVisibility(e, t) {
            !t && e.modules.responsive && (e.modules.responsive.visible = e.visible, this.initializeResponsivity());
        }
        hideColumn(e) {
            var t = this.hiddenColumns.length;
            e.hide(!1, !0), "collapse" === this.mode && (this.hiddenColumns.unshift(e), this.generateCollapsedContent(), this.collapseHandleColumn && !t && this.collapseHandleColumn.show());
        }
        showColumn(e) {
            var t;
            e.show(!1, !0), e.setWidth(e.getWidth()), "collapse" === this.mode && ((t = this.hiddenColumns.indexOf(e)) > -1 && this.hiddenColumns.splice(t, 1), this.generateCollapsedContent(), this.collapseHandleColumn && !this.hiddenColumns.length && this.collapseHandleColumn.hide());
        }
        update() {
            for(var e = !0; e;){
                let t = "fitColumns" == this.table.modules.layout.getMode() ? this.table.columnManager.getFlexBaseWidth() : this.table.columnManager.getWidth(), i = (this.table.options.headerVisible ? this.table.columnManager.element.clientWidth : this.table.element.clientWidth) - t;
                if (i < 0) {
                    let t1 = this.columns[this.index];
                    t1 ? (this.hideColumn(t1), this.index++) : e = !1;
                } else {
                    let t2 = this.columns[this.index - 1];
                    t2 && i > 0 && i >= t2.getWidth() ? (this.showColumn(t2), this.index--) : e = !1;
                }
                this.table.rowManager.activeRowsCount || this.table.rowManager.renderEmptyScroll();
            }
        }
        generateCollapsedContent() {
            this.table.rowManager.getDisplayRows().forEach((e)=>{
                this.generateCollapsedRowContent(e);
            });
        }
        generateCollapsedRowContent(e) {
            var t, i;
            if (e.modules.responsiveLayout) {
                for(t = e.modules.responsiveLayout.element; t.firstChild;)t.removeChild(t.firstChild);
                (i = this.collapseFormatter(this.generateCollapsedRowData(e))) && t.appendChild(i);
            }
        }
        generateCollapsedRowData(e) {
            var t, i = e.getData(), s = [];
            return this.hiddenColumns.forEach((o)=>{
                var n = o.getFieldValue(i);
                if (o.definition.title && o.field) {
                    if (o.modules.format && this.table.options.responsiveLayoutCollapseUseFormatters) {
                        function r(e) {
                            e();
                        }
                        t = {
                            value: !1,
                            data: {},
                            getValue: function() {
                                return n;
                            },
                            getData: function() {
                                return i;
                            },
                            getElement: function() {
                                return document.createElement("div");
                            },
                            getRow: function() {
                                return e.getComponent();
                            },
                            getColumn: function() {
                                return o.getComponent();
                            },
                            getTable: ()=>this.table
                        }, s.push({
                            field: o.field,
                            title: o.definition.title,
                            value: o.modules.format.formatter.call(this.table.modules.format, t, o.modules.format.params, r)
                        });
                    } else s.push({
                        field: o.field,
                        title: o.definition.title,
                        value: n
                    });
                }
            }), s;
        }
        formatCollapsedData(e) {
            var t = document.createElement("table");
            return e.forEach(function(e) {
                var i, s = document.createElement("tr"), o = document.createElement("td"), n = document.createElement("td"), r = document.createElement("strong");
                o.appendChild(r), this.langBind("columns|" + e.field, function(t) {
                    r.innerHTML = t || e.title;
                }), e.value instanceof Node ? ((i = document.createElement("div")).appendChild(e.value), n.appendChild(i)) : n.innerHTML = e.value, s.appendChild(o), s.appendChild(n), t.appendChild(s);
            }, this), Object.keys(e).length ? t : "";
        }
        constructor(e){
            super(e), this.columns = [], this.hiddenColumns = [], this.mode = "", this.index = 0, this.collapseFormatter = [], this.collapseStartOpen = !0, this.collapseHandleColumn = !1, this.registerTableOption("responsiveLayout", !1), this.registerTableOption("responsiveLayoutCollapseStartOpen", !0), this.registerTableOption("responsiveLayoutCollapseUseFormatters", !0), this.registerTableOption("responsiveLayoutCollapseFormatter", !1), this.registerColumnOption("responsive");
        }
    }
    Fe.moduleName = "responsiveLayout";
    class He extends k {
        initialize() {
            !1 !== this.table.options.selectable && (this.subscribe("row-init", this.initializeRow.bind(this)), this.subscribe("row-deleting", this.rowDeleted.bind(this)), this.subscribe("rows-wipe", this.clearSelectionData.bind(this)), this.subscribe("rows-retrieve", this.rowRetrieve.bind(this)), this.table.options.selectable && !this.table.options.selectablePersistence && this.subscribe("data-refreshing", this.deselectRows.bind(this)));
        }
        rowRetrieve(e, t) {
            return "selected" === e ? this.selectedRows : t;
        }
        rowDeleted(e) {
            this._deselectRow(e, !0);
        }
        clearSelectionData(e) {
            this.selecting = !1, this.lastClickedRow = !1, this.selectPrev = [], this.selectedRows = [], !0 !== e && this._rowSelectionChanged();
        }
        initializeRow(e) {
            var t = this, i = e.getElement(), s = function() {
                setTimeout(function() {
                    t.selecting = !1;
                }, 50), document.body.removeEventListener("mouseup", s);
            };
            e.modules.select = {
                selected: !1
            }, t.table.options.selectableCheck.call(this.table, e.getComponent()) ? (i.classList.add("tabulator-selectable"), i.classList.remove("tabulator-unselectable"), t.table.options.selectable && "highlight" != t.table.options.selectable && ("click" === t.table.options.selectableRangeMode ? i.addEventListener("click", this.handleComplexRowClick.bind(this, e)) : (i.addEventListener("click", function(i) {
                t.table.modExists("edit") && t.table.modules.edit.getCurrentCell() || t.table._clearSelection(), t.selecting || t.toggleRow(e);
            }), i.addEventListener("mousedown", function(i) {
                if (i.shiftKey) return t.table._clearSelection(), t.selecting = !0, t.selectPrev = [], document.body.addEventListener("mouseup", s), document.body.addEventListener("keyup", s), t.toggleRow(e), !1;
            }), i.addEventListener("mouseenter", function(i) {
                t.selecting && (t.table._clearSelection(), t.toggleRow(e), t.selectPrev[1] == e && t.toggleRow(t.selectPrev[0]));
            }), i.addEventListener("mouseout", function(i) {
                t.selecting && (t.table._clearSelection(), t.selectPrev.unshift(e));
            })))) : (i.classList.add("tabulator-unselectable"), i.classList.remove("tabulator-selectable"));
        }
        handleComplexRowClick(e, t) {
            if (t.shiftKey) {
                this.table._clearSelection(), this.lastClickedRow = this.lastClickedRow || e;
                var i = this.table.rowManager.getDisplayRowIndex(this.lastClickedRow), s = this.table.rowManager.getDisplayRowIndex(e), o = i <= s ? i : s, n = i >= s ? i : s, r = this.table.rowManager.getDisplayRows().slice(0).splice(o, n - o + 1);
                t.ctrlKey || t.metaKey ? (r.forEach((t)=>{
                    t !== this.lastClickedRow && (!0 === this.table.options.selectable || this.isRowSelected(e) || this.selectedRows.length < this.table.options.selectable) && this.toggleRow(t);
                }), this.lastClickedRow = e) : (this.deselectRows(void 0, !0), !0 !== this.table.options.selectable && r.length > this.table.options.selectable && (r = r.slice(0, this.table.options.selectable)), this.selectRows(r)), this.table._clearSelection();
            } else t.ctrlKey || t.metaKey ? (this.toggleRow(e), this.lastClickedRow = e) : (this.deselectRows(void 0, !0), this.selectRows(e), this.lastClickedRow = e);
        }
        toggleRow(e) {
            this.table.options.selectableCheck.call(this.table, e.getComponent()) && (e.modules.select && e.modules.select.selected ? this._deselectRow(e) : this._selectRow(e));
        }
        selectRows(e) {
            var t;
            switch(typeof e){
                case "undefined":
                    this.table.rowManager.rows.forEach((e)=>{
                        this._selectRow(e, !0, !0);
                    }), this._rowSelectionChanged();
                    break;
                case "string":
                    (t = this.table.rowManager.findRow(e)) ? (this._selectRow(t, !0, !0), this._rowSelectionChanged()) : ((t = this.table.rowManager.getRows(e)).forEach((e)=>{
                        this._selectRow(e, !0, !0);
                    }), t.length && this._rowSelectionChanged());
                    break;
                default:
                    Array.isArray(e) ? (e.forEach((e)=>{
                        this._selectRow(e, !0, !0);
                    }), this._rowSelectionChanged()) : this._selectRow(e, !1, !0);
            }
        }
        _selectRow(e, t, i) {
            if (!isNaN(this.table.options.selectable) && !0 !== this.table.options.selectable && !i && this.selectedRows.length >= this.table.options.selectable) {
                if (!this.table.options.selectableRollingSelection) return !1;
                this._deselectRow(this.selectedRows[0]);
            }
            var s = this.table.rowManager.findRow(e);
            s ? -1 == this.selectedRows.indexOf(s) && (s.getElement().classList.add("tabulator-selected"), s.modules.select || (s.modules.select = {}), s.modules.select.selected = !0, s.modules.select.checkboxEl && (s.modules.select.checkboxEl.checked = !0), this.selectedRows.push(s), this.table.options.dataTreeSelectPropagate && this.childRowSelection(s, !0), this.dispatchExternal("rowSelected", s.getComponent()), this._rowSelectionChanged(t)) : t || console.warn("Selection Error - No such row found, ignoring selection:" + e);
        }
        isRowSelected(e) {
            return -1 !== this.selectedRows.indexOf(e);
        }
        deselectRows(e, t) {
            var i, s = this;
            if (void 0 === e) {
                i = s.selectedRows.length;
                for(let e1 = 0; e1 < i; e1++)s._deselectRow(s.selectedRows[0], !0);
                i && s._rowSelectionChanged(t);
            } else Array.isArray(e) ? (e.forEach(function(e) {
                s._deselectRow(e, !0);
            }), s._rowSelectionChanged(t)) : s._deselectRow(e, t);
        }
        _deselectRow(e, t) {
            var i, s = this, o = s.table.rowManager.findRow(e);
            o ? (i = s.selectedRows.findIndex(function(e) {
                return e == o;
            })) > -1 && (o.getElement().classList.remove("tabulator-selected"), o.modules.select || (o.modules.select = {}), o.modules.select.selected = !1, o.modules.select.checkboxEl && (o.modules.select.checkboxEl.checked = !1), s.selectedRows.splice(i, 1), this.table.options.dataTreeSelectPropagate && this.childRowSelection(o, !1), this.dispatchExternal("rowDeselected", o.getComponent()), s._rowSelectionChanged(t)) : t || console.warn("Deselection Error - No such row found, ignoring selection:" + e);
        }
        getSelectedData() {
            var e = [];
            return this.selectedRows.forEach(function(t) {
                e.push(t.getData());
            }), e;
        }
        getSelectedRows() {
            var e = [];
            return this.selectedRows.forEach(function(t) {
                e.push(t.getComponent());
            }), e;
        }
        _rowSelectionChanged(e) {
            this.headerCheckboxElement && (0 === this.selectedRows.length ? (this.headerCheckboxElement.checked = !1, this.headerCheckboxElement.indeterminate = !1) : this.table.rowManager.rows.length === this.selectedRows.length ? (this.headerCheckboxElement.checked = !0, this.headerCheckboxElement.indeterminate = !1) : (this.headerCheckboxElement.indeterminate = !0, this.headerCheckboxElement.checked = !1)), e || this.dispatchExternal("rowSelectionChanged", this.getSelectedData(), this.getSelectedRows());
        }
        registerRowSelectCheckbox(e, t) {
            e._row.modules.select || (e._row.modules.select = {}), e._row.modules.select.checkboxEl = t;
        }
        registerHeaderSelectCheckbox(e) {
            this.headerCheckboxElement = e;
        }
        childRowSelection(e, t) {
            var i = this.table.modules.dataTree.getChildren(e, !0);
            if (t) for (let e1 of i)this._selectRow(e1, !0);
            else for (let e2 of i)this._deselectRow(e2, !0);
        }
        constructor(e){
            super(e), this.selecting = !1, this.lastClickedRow = !1, this.selectPrev = [], this.selectedRows = [], this.headerCheckboxElement = null, this.registerTableOption("selectable", "highlight"), this.registerTableOption("selectableRangeMode", "drag"), this.registerTableOption("selectableRollingSelection", !0), this.registerTableOption("selectablePersistence", !0), this.registerTableOption("selectableCheck", function(e, t) {
                return !0;
            }), this.registerTableFunction("selectRow", this.selectRows.bind(this)), this.registerTableFunction("deselectRow", this.deselectRows.bind(this)), this.registerTableFunction("toggleSelectRow", this.toggleRow.bind(this)), this.registerTableFunction("getSelectedRows", this.getSelectedRows.bind(this)), this.registerTableFunction("getSelectedData", this.getSelectedData.bind(this)), this.registerComponentFunction("row", "select", this.selectRows.bind(this)), this.registerComponentFunction("row", "deselect", this.deselectRows.bind(this)), this.registerComponentFunction("row", "toggleSelect", this.toggleRow.bind(this)), this.registerComponentFunction("row", "isSelected", this.isRowSelected.bind(this));
        }
    }
    function Oe(e, t, i, s, o, n, r) {
        var a = window.DateTime || luxon.DateTime, l = r.format || "dd/MM/yyyy HH:mm:ss", h = r.alignEmptyValues, d = 0;
        if (void 0 !== a) {
            if (a.isDateTime(e) || (e = "iso" === l ? a.fromISO(String(e)) : a.fromFormat(String(e), l)), a.isDateTime(t) || (t = "iso" === l ? a.fromISO(String(t)) : a.fromFormat(String(t), l)), e.isValid) {
                if (t.isValid) return e - t;
                d = 1;
            } else d = t.isValid ? -1 : 0;
            return ("top" === h && "desc" === n || "bottom" === h && "asc" === n) && (d *= -1), d;
        }
        console.error("Sort Error - 'datetime' sorter is dependant on luxon.js");
    }
    He.moduleName = "selectRow";
    var Ae = {
        number: function(e, t, i, s, o, n, r) {
            var a = r.alignEmptyValues, l = r.decimalSeparator, h = r.thousandSeparator, d = 0;
            if (e = String(e), t = String(t), h && (e = e.split(h).join(""), t = t.split(h).join("")), l && (e = e.split(l).join("."), t = t.split(l).join(".")), e = parseFloat(e), t = parseFloat(t), isNaN(e)) d = isNaN(t) ? 0 : -1;
            else {
                if (!isNaN(t)) return e - t;
                d = 1;
            }
            return ("top" === a && "desc" === n || "bottom" === a && "asc" === n) && (d *= -1), d;
        },
        string: function(e, t, i, s, o, n, r) {
            var a, l = r.alignEmptyValues, h = 0;
            if (e) {
                if (t) {
                    switch(typeof r.locale){
                        case "boolean":
                            r.locale && (a = this.langLocale());
                            break;
                        case "string":
                            a = r.locale;
                    }
                    return String(e).toLowerCase().localeCompare(String(t).toLowerCase(), a);
                }
                h = 1;
            } else h = t ? -1 : 0;
            return ("top" === l && "desc" === n || "bottom" === l && "asc" === n) && (h *= -1), h;
        },
        date: function(e, t, i, s, o, n, r) {
            return r.format || (r.format = "dd/MM/yyyy"), Oe.call(this, e, t, i, s, o, n, r);
        },
        time: function(e, t, i, s, o, n, r) {
            return r.format || (r.format = "HH:mm"), Oe.call(this, e, t, i, s, o, n, r);
        },
        datetime: Oe,
        boolean: function(e, t, i, s, o, n, r) {
            return (!0 === e || "true" === e || "True" === e || 1 === e ? 1 : 0) - (!0 === t || "true" === t || "True" === t || 1 === t ? 1 : 0);
        },
        array: function(e, t, i, s, o, n, r) {
            var a = r.type || "length", l = r.alignEmptyValues, h = 0;
            function d(e) {
                var t;
                switch(a){
                    case "length":
                        t = e.length;
                        break;
                    case "sum":
                        t = e.reduce(function(e, t) {
                            return e + t;
                        });
                        break;
                    case "max":
                        t = Math.max.apply(null, e);
                        break;
                    case "min":
                        t = Math.min.apply(null, e);
                        break;
                    case "avg":
                        t = e.reduce(function(e, t) {
                            return e + t;
                        }) / e.length;
                }
                return t;
            }
            if (Array.isArray(e)) {
                if (Array.isArray(t)) return d(t) - d(e);
                h = 1;
            } else h = Array.isArray(t) ? -1 : 0;
            return ("top" === l && "desc" === n || "bottom" === l && "asc" === n) && (h *= -1), h;
        },
        exists: function(e, t, i, s, o, n, r) {
            return (void 0 === e ? 0 : 1) - (void 0 === t ? 0 : 1);
        },
        alphanum: function(e, t, i, s, o, n, r) {
            var a, l, h, d, c, u = 0, p = /(\d+)|(\D+)/g, m = /\d/, g = r.alignEmptyValues, b = 0;
            if (e || 0 === e) {
                if (t || 0 === t) {
                    if (isFinite(e) && isFinite(t)) return e - t;
                    if ((a = String(e).toLowerCase()) === (l = String(t).toLowerCase())) return 0;
                    if (!m.test(a) || !m.test(l)) return a > l ? 1 : -1;
                    for(a = a.match(p), l = l.match(p), c = a.length > l.length ? l.length : a.length; u < c;)if ((h = a[u]) !== (d = l[u++])) return isFinite(h) && isFinite(d) ? ("0" === h.charAt(0) && (h = "." + h), "0" === d.charAt(0) && (d = "." + d), h - d) : h > d ? 1 : -1;
                    return a.length > l.length;
                }
                b = 1;
            } else b = t || 0 === t ? -1 : 0;
            return ("top" === g && "desc" === n || "bottom" === g && "asc" === n) && (b *= -1), b;
        }
    };
    class _e extends k {
        initialize() {
            this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("table-built", this.tableBuilt.bind(this)), this.registerDataHandler(this.sort.bind(this), 20), this.registerTableFunction("setSort", this.userSetSort.bind(this)), this.registerTableFunction("getSorters", this.getSort.bind(this)), this.registerTableFunction("clearSort", this.clearSort.bind(this)), "remote" === this.table.options.sortMode && this.subscribe("data-params", this.remoteSortParams.bind(this));
        }
        tableBuilt() {
            this.table.options.initialSort && this.setSort(this.table.options.initialSort);
        }
        remoteSortParams(e, t, i, s) {
            var o = this.getSort();
            return o.forEach((e)=>{
                delete e.column;
            }), s.sort = o, s;
        }
        userSetSort(e, t) {
            this.setSort(e, t), this.refreshSort();
        }
        clearSort() {
            this.clear(), this.refreshSort();
        }
        initializeColumn(e) {
            var t, i, s = !1;
            switch(typeof e.definition.sorter){
                case "string":
                    _e.sorters[e.definition.sorter] ? s = _e.sorters[e.definition.sorter] : console.warn("Sort Error - No such sorter found: ", e.definition.sorter);
                    break;
                case "function":
                    s = e.definition.sorter;
            }
            if (e.modules.sort = {
                sorter: s,
                dir: "none",
                params: e.definition.sorterParams || {},
                startingDir: e.definition.headerSortStartingDir || "asc",
                tristate: e.definition.headerSortTristate
            }, !1 !== e.definition.headerSort) {
                if ((t = e.getElement()).classList.add("tabulator-sortable"), (i = document.createElement("div")).classList.add("tabulator-col-sorter"), "icon" === this.table.options.headerSortClickElement) i.classList.add("tabulator-col-sorter-element");
                else t.classList.add("tabulator-col-sorter-element");
                switch(this.table.options.headerSortElement){
                    case "function":
                        break;
                    case "object":
                        i.appendChild(this.table.options.headerSortElement);
                        break;
                    default:
                        i.innerHTML = this.table.options.headerSortElement;
                }
                e.titleHolderElement.appendChild(i), e.modules.sort.element = i, this.setColumnHeaderSortIcon(e, "none"), ("icon" === this.table.options.headerSortClickElement ? i : t).addEventListener("click", (t)=>{
                    var i = "", s = [], o = !1;
                    if (e.modules.sort) {
                        if (e.modules.sort.tristate) i = "none" == e.modules.sort.dir ? e.modules.sort.startingDir : e.modules.sort.dir == e.modules.sort.startingDir ? "asc" == e.modules.sort.dir ? "desc" : "asc" : "none";
                        else switch(e.modules.sort.dir){
                            case "asc":
                                i = "desc";
                                break;
                            case "desc":
                                i = "asc";
                                break;
                            default:
                                i = e.modules.sort.startingDir;
                        }
                        this.table.options.columnHeaderSortMulti && (t.shiftKey || t.ctrlKey) ? (o = (s = this.getSort()).findIndex((t)=>t.field === e.getField()), o > -1 ? (s[o].dir = i, o = s.splice(o, 1)[0], "none" != i && s.push(o)) : "none" != i && s.push({
                            column: e,
                            dir: i
                        }), this.setSort(s)) : "none" == i ? this.clear() : this.setSort(e, i), this.refreshSort();
                    }
                });
            }
        }
        refreshSort() {
            "remote" === this.table.options.sortMode ? this.reloadData(null, !1, !1) : this.refreshData(!0);
        }
        hasChanged() {
            var e = this.changed;
            return this.changed = !1, e;
        }
        getSort() {
            var e = [];
            return this.sortList.forEach(function(t) {
                t.column && e.push({
                    column: t.column.getComponent(),
                    field: t.column.getField(),
                    dir: t.dir
                });
            }), e;
        }
        setSort(e, t) {
            var i = this, s = [];
            Array.isArray(e) || (e = [
                {
                    column: e,
                    dir: t
                }
            ]), e.forEach(function(e) {
                var t;
                (t = i.table.columnManager.findColumn(e.column)) ? (e.column = t, s.push(e), i.changed = !0) : console.warn("Sort Warning - Sort field does not exist and is being ignored: ", e.column);
            }), i.sortList = s, this.dispatch("sort-changed");
        }
        clear() {
            this.setSort([]);
        }
        findSorter(e) {
            var t, i = this.table.rowManager.activeRows[0], s = "string";
            if (i && (i = i.getData(), e.getField())) switch(typeof (t = e.getFieldValue(i))){
                case "undefined":
                    s = "string";
                    break;
                case "boolean":
                    s = "boolean";
                    break;
                default:
                    isNaN(t) || "" === t ? t.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i) && (s = "alphanum") : s = "number";
            }
            return _e.sorters[s];
        }
        sort(e) {
            var t = this, i = this.table.options.sortOrderReverse ? t.sortList.slice().reverse() : t.sortList, s = [], o = [];
            return this.subscribedExternal("dataSorting") && this.dispatchExternal("dataSorting", t.getSort()), t.clearColumnHeaders(), "remote" !== this.table.options.sortMode ? (i.forEach(function(e, i) {
                var o;
                e.column && ((o = e.column.modules.sort) && (o.sorter || (o.sorter = t.findSorter(e.column)), e.params = "function" == typeof o.params ? o.params(e.column.getComponent(), e.dir) : o.params, s.push(e)), t.setColumnHeader(e.column, e.dir));
            }), s.length && t._sortItems(e, s)) : i.forEach(function(e, i) {
                t.setColumnHeader(e.column, e.dir);
            }), this.subscribedExternal("dataSorted") && (e.forEach((e)=>{
                o.push(e.getComponent());
            }), this.dispatchExternal("dataSorted", t.getSort(), o)), e;
        }
        clearColumnHeaders() {
            this.table.columnManager.getRealColumns().forEach((e)=>{
                e.modules.sort && (e.modules.sort.dir = "none", e.getElement().setAttribute("aria-sort", "none"), this.setColumnHeaderSortIcon(e, "none"));
            });
        }
        setColumnHeader(e, t) {
            e.modules.sort.dir = t, e.getElement().setAttribute("aria-sort", "asc" === t ? "ascending" : "descending"), this.setColumnHeaderSortIcon(e, t);
        }
        setColumnHeaderSortIcon(e, t) {
            var i, s = e.modules.sort.element;
            if (e.definition.headerSort && "function" == typeof this.table.options.headerSortElement) {
                for(; s.firstChild;)s.removeChild(s.firstChild);
                "object" == typeof (i = this.table.options.headerSortElement.call(this.table, e.getComponent(), t)) ? s.appendChild(i) : s.innerHTML = i;
            }
        }
        _sortItems(e, t) {
            var i = t.length - 1;
            e.sort((e, s)=>{
                for(var o, n = i; n >= 0; n--){
                    let i1 = t[n];
                    if (0 !== (o = this._sortRow(e, s, i1.column, i1.dir, i1.params))) break;
                }
                return o;
            });
        }
        _sortRow(e, t, i, s, o) {
            var n, r, a = "asc" == s ? e : t, l = "asc" == s ? t : e;
            return e = void 0 !== (e = i.getFieldValue(a.getData())) ? e : "", t = void 0 !== (t = i.getFieldValue(l.getData())) ? t : "", n = a.getComponent(), r = l.getComponent(), i.modules.sort.sorter.call(this, e, t, n, r, i.getComponent(), s, o);
        }
        constructor(e){
            super(e), this.sortList = [], this.changed = !1, this.registerTableOption("sortMode", "local"), this.registerTableOption("initialSort", !1), this.registerTableOption("columnHeaderSortMulti", !0), this.registerTableOption("sortOrderReverse", !1), this.registerTableOption("headerSortElement", "<div class='tabulator-arrow'></div>"), this.registerTableOption("headerSortClickElement", "header"), this.registerColumnOption("sorter"), this.registerColumnOption("sorterParams"), this.registerColumnOption("headerSort", !0), this.registerColumnOption("headerSortStartingDir"), this.registerColumnOption("headerSortTristate");
        }
    }
    _e.moduleName = "sort", _e.sorters = Ae;
    class Be extends k {
        initialize() {
            this.deprecatedOptionsCheck(), this.subscribe("column-init", this.initializeColumn.bind(this));
        }
        deprecatedOptionsCheck() {
            this.deprecationCheckMsg("tooltipGenerationMode", "This option is no longer needed as tooltips are always generated on hover now");
        }
        initializeColumn(e) {
            e.definition.headerTooltip && !this.headerSubscriber && (this.headerSubscriber = !0, this.subscribe("column-mousemove", this.mousemoveCheck.bind(this, "headerTooltip")), this.subscribe("column-mouseout", this.mouseoutCheck.bind(this, "headerTooltip"))), e.definition.tooltip && !this.tooltipSubscriber && (this.tooltipSubscriber = !0, this.subscribe("cell-mousemove", this.mousemoveCheck.bind(this, "tooltip")), this.subscribe("cell-mouseout", this.mouseoutCheck.bind(this, "tooltip")));
        }
        mousemoveCheck(e, t, i) {
            var s = "tooltip" === e ? i.column.definition.tooltip : i.definition.headerTooltip;
            s && (this.clearPopup(), this.timeout = setTimeout(this.loadTooltip.bind(this, t, i, s), this.table.options.tooltipDelay));
        }
        mouseoutCheck(e, t, i) {
            this.popupInstance || this.clearPopup();
        }
        clearPopup(e, t, i) {
            clearTimeout(this.timeout), this.timeout = null, this.popupInstance && this.popupInstance.hide();
        }
        loadTooltip(e, t, i) {
            var s, n, r;
            "function" == typeof i && (i = i(e, t.getComponent(), function(e) {
                n = e;
            })), i instanceof HTMLElement ? s = i : (s = document.createElement("div"), !0 === i && (t instanceof o ? i = t.value : t.definition.field ? this.langBind("columns|" + t.definition.field, (e)=>{
                s.innerHTML = i = e || t.definition.title;
            }) : i = t.definition.title), s.innerHTML = i), (i || 0 === i || !1 === i) && (s.classList.add("tabulator-tooltip"), s.addEventListener("mousemove", (e)=>e.preventDefault()), this.popupInstance = this.popup(s), "function" == typeof n && this.popupInstance.renderCallback(n), r = this.popupInstance.containerEventCoords(e), this.popupInstance.show(r.x + 15, r.y + 15).hideOnBlur(()=>{
                this.dispatchExternal("TooltipClosed", t.getComponent()), this.popupInstance = null;
            }), this.dispatchExternal("TooltipOpened", t.getComponent()));
        }
        constructor(e){
            super(e), this.tooltipSubscriber = null, this.headerSubscriber = null, this.timeout = null, this.popupInstance = null, this.registerTableOption("tooltipGenerationMode", void 0), this.registerTableOption("tooltipDelay", 300), this.registerColumnOption("tooltip"), this.registerColumnOption("headerTooltip");
        }
    }
    Be.moduleName = "tooltip";
    var Ve = {
        integer: function(e, t, i) {
            return "" === t || null == t || (t = Number(t), !isNaN(t) && isFinite(t) && Math.floor(t) === t);
        },
        float: function(e, t, i) {
            return "" === t || null == t || (t = Number(t), !isNaN(t) && isFinite(t) && t % 1 != 0);
        },
        numeric: function(e, t, i) {
            return "" === t || null == t || !isNaN(t);
        },
        string: function(e, t, i) {
            return "" === t || null == t || isNaN(t);
        },
        max: function(e, t, i) {
            return "" === t || null == t || parseFloat(t) <= i;
        },
        min: function(e, t, i) {
            return "" === t || null == t || parseFloat(t) >= i;
        },
        starts: function(e, t, i) {
            return "" === t || null == t || String(t).toLowerCase().startsWith(String(i).toLowerCase());
        },
        ends: function(e, t, i) {
            return "" === t || null == t || String(t).toLowerCase().endsWith(String(i).toLowerCase());
        },
        minLength: function(e, t, i) {
            return "" === t || null == t || String(t).length >= i;
        },
        maxLength: function(e, t, i) {
            return "" === t || null == t || String(t).length <= i;
        },
        in: function(e, t, i) {
            return "" === t || null == t || ("string" == typeof i && (i = i.split("|")), i.indexOf(t) > -1);
        },
        regex: function(e, t, i) {
            return "" === t || null == t || new RegExp(i).test(t);
        },
        unique: function(e, t, i) {
            if ("" === t || null == t) return !0;
            var s = !0, o = e.getData(), n = e.getColumn()._getSelf();
            return this.table.rowManager.rows.forEach(function(e) {
                var i = e.getData();
                i !== o && t == n.getFieldValue(i) && (s = !1);
            }), s;
        },
        required: function(e, t, i) {
            return "" !== t && null != t;
        }
    };
    class Ie extends k {
        initialize() {
            this.subscribe("cell-delete", this.clearValidation.bind(this)), this.subscribe("column-layout", this.initializeColumnCheck.bind(this)), this.subscribe("edit-success", this.editValidate.bind(this)), this.subscribe("edit-editor-clear", this.editorClear.bind(this)), this.subscribe("edit-edited-clear", this.editedClear.bind(this));
        }
        editValidate(e, t, i) {
            var s = "manual" === this.table.options.validationMode || this.validate(e.column.modules.validate, e, t);
            return !0 !== s && setTimeout(()=>{
                e.getElement().classList.add("tabulator-validation-fail"), this.dispatchExternal("validationFailed", e.getComponent(), t, s);
            }), s;
        }
        editorClear(e, t) {
            t && e.column.modules.validate && this.cellValidate(e), e.getElement().classList.remove("tabulator-validation-fail");
        }
        editedClear(e) {
            e.modules.validate && (e.modules.validate.invalid = !1);
        }
        cellIsValid(e) {
            return e.modules.validate && e.modules.validate.invalid || !0;
        }
        cellValidate(e) {
            return this.validate(e.column.modules.validate, e, e.getValue());
        }
        columnValidate(e) {
            var t = [];
            return e.cells.forEach((e)=>{
                !0 !== this.cellValidate(e) && t.push(e.getComponent());
            }), !t.length || t;
        }
        rowValidate(e) {
            var t = [];
            return e.cells.forEach((e)=>{
                !0 !== this.cellValidate(e) && t.push(e.getComponent());
            }), !t.length || t;
        }
        userClearCellValidation(e) {
            e || (e = this.getInvalidCells()), Array.isArray(e) || (e = [
                e
            ]), e.forEach((e)=>{
                this.clearValidation(e._getSelf());
            });
        }
        userValidate(e) {
            var t = [];
            return this.table.rowManager.rows.forEach((e)=>{
                var i = (e = e.getComponent()).validate();
                !0 !== i && (t = t.concat(i));
            }), !t.length || t;
        }
        initializeColumnCheck(e) {
            void 0 !== e.definition.validator && this.initializeColumn(e);
        }
        initializeColumn(e) {
            var t, i = this, s = [];
            e.definition.validator && (Array.isArray(e.definition.validator) ? e.definition.validator.forEach((e)=>{
                (t = i._extractValidator(e)) && s.push(t);
            }) : (t = this._extractValidator(e.definition.validator)) && s.push(t), e.modules.validate = !!s.length && s);
        }
        _extractValidator(e) {
            var t, i, s;
            switch(typeof e){
                case "string":
                    return (s = e.indexOf(":")) > -1 ? (t = e.substring(0, s), i = e.substring(s + 1)) : t = e, this._buildValidator(t, i);
                case "function":
                    return this._buildValidator(e);
                case "object":
                    return this._buildValidator(e.type, e.parameters);
            }
        }
        _buildValidator(e, t) {
            var i = "function" == typeof e ? e : Ie.validators[e];
            return i ? {
                type: "function" == typeof e ? "function" : e,
                func: i,
                params: t
            } : (console.warn("Validator Setup Error - No matching validator found:", e), !1);
        }
        validate(e, t, i) {
            var s = this, o = [], n = this.invalidCells.indexOf(t);
            return e && e.forEach((e)=>{
                e.func.call(s, t.getComponent(), i, e.params) || o.push({
                    type: e.type,
                    parameters: e.params
                });
            }), t.modules.validate || (t.modules.validate = {}), o.length ? (t.modules.validate.invalid = o, "manual" !== this.table.options.validationMode && t.getElement().classList.add("tabulator-validation-fail"), -1 == n && this.invalidCells.push(t)) : (t.modules.validate.invalid = !1, t.getElement().classList.remove("tabulator-validation-fail"), n > -1 && this.invalidCells.splice(n, 1)), !o.length || o;
        }
        getInvalidCells() {
            var e = [];
            return this.invalidCells.forEach((t)=>{
                e.push(t.getComponent());
            }), e;
        }
        clearValidation(e) {
            var t;
            e.modules.validate && e.modules.validate.invalid && (e.getElement().classList.remove("tabulator-validation-fail"), e.modules.validate.invalid = !1, (t = this.invalidCells.indexOf(e)) > -1 && this.invalidCells.splice(t, 1));
        }
        constructor(e){
            super(e), this.invalidCells = [], this.registerTableOption("validationMode", "blocking"), this.registerColumnOption("validator"), this.registerTableFunction("getInvalidCells", this.getInvalidCells.bind(this)), this.registerTableFunction("clearCellValidation", this.userClearCellValidation.bind(this)), this.registerTableFunction("validate", this.userValidate.bind(this)), this.registerComponentFunction("cell", "isValid", this.cellIsValid.bind(this)), this.registerComponentFunction("cell", "clearValidation", this.clearValidation.bind(this)), this.registerComponentFunction("cell", "validate", this.cellValidate.bind(this)), this.registerComponentFunction("column", "validate", this.columnValidate.bind(this)), this.registerComponentFunction("row", "validate", this.rowValidate.bind(this));
        }
    }
    Ie.moduleName = "validate", Ie.validators = Ve;
    var Ne = Object.freeze({
        __proto__: null,
        AccessorModule: A,
        AjaxModule: W,
        ClipboardModule: j,
        ColumnCalcsModule: X,
        DataTreeModule: q,
        DownloadModule: J,
        EditModule: Q,
        ExportModule: ie,
        FilterModule: oe,
        FormatModule: re,
        FrozenColumnsModule: ae,
        FrozenRowsModule: le,
        GroupRowsModule: ce,
        HistoryModule: ue,
        HtmlTableImportModule: pe,
        ImportModule: ge,
        InteractionModule: be,
        KeybindingsModule: fe,
        MenuModule: ve,
        MoveColumnsModule: we,
        MoveRowsModule: Ce,
        MutatorModule: Ee,
        PageModule: Re,
        PersistenceModule: ke,
        PopupModule: Me,
        PrintModule: Le,
        ReactiveDataModule: De,
        ResizeColumnsModule: Se,
        ResizeRowsModule: Pe,
        ResizeTableModule: ze,
        ResponsiveLayoutModule: Fe,
        SelectRowModule: He,
        SortModule: _e,
        TooltipModule: Be,
        ValidateModule: Ie
    });
    class We extends O {
    }
    return new F(We, Ne), We;
}); //# sourceMappingURL=tabulator.min.js.map

//# sourceMappingURL=index.906b8dc8.js.map
