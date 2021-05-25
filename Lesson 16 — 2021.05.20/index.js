/*
    Сделайте форму для добавления табов. У формы должны быть следующие контролы:

    • название таба
    • контент таба
    • кнопка добавить

    При клике на кнопку "добавить" проверять, что поля формы не пустые и добавлять под формой табы.
    Табы должны работать как мы делали на занятии.

    Первая добавленная таба должна быть сразу активной, а все остальные
    просто добавлять и менять состояние "активная/не активная" уже по клику.

    В один момент времени активна только одна таба. Для активной табы добавлять класс, который содержит стили для
    индикации состояния активной табы. Просто добавьте какой-то цвет и жирность текста, к примеру.

    По клику на таб - переключать контент.
*/
'use strict';

const $tabMenu = document.getElementById("tab-menu")

class Tab {
    buttonClassName = "tablinks"
    divClassName = "tabcontent"

    constructor(tabName, tabContent) {
        this.name = tabName;
        this.content = tabContent;
        this.button = this.initButton()
        this.html = this.initHtml()
    }

    initHtml() {
        const div = document.createElement("div");
        div.className = this.divClassName;
        div.innerHTML = `
        <h3>${this.name}</h3>
        <p>${this.content}</p>`
        return div
    }

    initButton() {
        const button = document.createElement("button");
        button.className = this.buttonClassName;
        button.innerText = this.name;
        return button
    }

    hideHtml() {
        this.html.style.display = "none";
    }

    showHtml() {
        this.html.style.display = "block";
    }

    makeBtnActive() {
        this.button.classList.add("active");
    }

    makeBtnNonActive() {
        this.button.classList.remove("active");
    }
}

const tabsManager = {
    tabs: [],

    addTab(tabMenu, tabName, tabContent) {
        if (this._isAlreadyPresent(tabName)) {
            return false;
        }
        const tab = new Tab(tabName, tabContent);
        this.tabs.push(tab);

        tab.button.addEventListener("click", handleTabClick, true)
        tabMenu.appendChild(tab.button)
        tabMenu.after(tab.html)

        return tab;
    },

    _isAlreadyPresent(tabName) {
        return this.tabs.some((tab) => tab.name === tabName)
    },

    getTabByName(tabName) {
        return this.tabs.find((tab) => tab.name === tabName)
    },

    hideAll() {
        this.tabs.forEach(tab => tab.hideHtml());
    },

    showTab(tabName) {
        this.getTabByName(tabName).showHtml()
    },

    makeButtonActive(tabName) {
        this.getTabByName(tabName).makeBtnActive();
    },

    makeButtonsNonActive() {
        this.tabs.forEach(tab => tab.makeBtnNonActive());
    }
}


function handleTabClick(evt) {
    const tabName = evt.target.innerText;

    tabsManager.hideAll();
    tabsManager.showTab(tabName);
    tabsManager.makeButtonsNonActive();
    tabsManager.makeButtonActive(tabName);
}

function handleSubmitClick(evt) {
    evt.preventDefault();
    const inputTabName = document.getElementById("tname").value;
    const inputTabContent = document.getElementById("tcontent").value;

    if (!(inputTabName && inputTabContent))
        return

    tabsManager.addTab($tabMenu, inputTabName, inputTabContent)
    if(tabsManager.tabs.length === 1){
        tabsManager.makeButtonActive(inputTabName);
        tabsManager.showTab(inputTabName);
    }

    document.getElementById("tname").value = "";
    document.getElementById("tcontent").value = "";

}


const $submit = document.getElementById("tsubmit")
$submit.addEventListener("click", handleSubmitClick, true)
