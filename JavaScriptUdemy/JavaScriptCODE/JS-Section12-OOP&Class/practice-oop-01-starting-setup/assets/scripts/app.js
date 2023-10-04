class DOMHeler{

    static clearEventListners(element){
        const cloneElement = element.cloneNode(true);
        element.replaceWith(cloneElement);
        return cloneElement;
    }

    static moveElement(elementId, newDestinationSelector){
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
    }
}

class ToolTip{}

class ProjectItem{

    constructor(id, updateProjectListsFunction,type){
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectSwitchButton();
        this.connectMoreInfoButton(type);
    }

    connectSwitchButton(){

    }

    connectMoreInfoButton(){
        const projectItemElement = document.getElementById(this.id);
        let switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn = DOMHeler.clearEventListners(switchBtn);
        switchBtn.textContent = type === 'active' ? 'finish' : 'Activate'
        switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id)); 
    }

    update(updateProjectListFn, type){
        this.updateProjectListsHandler = updateProjectListFn;
        this.connectMoreInfoButton(type);
    }

}

class ProjectList{

    products = [];

    constructor(type){
        
        this.type = type;

        const prjItems = document.querySelectorAll(`#${type}-projects li`)
        console.log(prjItems);
        for(const prjitem of prjItems){
            this.products.push(new ProjectItem(prjitem.id, this.switchProject.bind(this), this.type));
             // this는 여기있는 필드들을 의미한다.
        }
        console.log(this.products); // li의 id만 가져와서 배열에 넣었다.
    }

    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }

    addProject(product){
        this.products.push(product);
        DOMHeler.moveElement(product.id, `#${this.type}-projects ul`)
        product.update(this.switchProject.bind(this), this.type);
    }

    switchProject(projectId){
        //const projectIndex = this.products.findIndex(p => p.id === projectId);
        //this.products.splice(projectIndex,1); // 버튼 클릭으로 활성화되었을 떄 해당 배열을 삭제하는 메서드이다.
        this.switchHandler(this.products.find(p => p.id === projectId));
        this.products = this.products.filter(p => p.id !== projectId);
        // 위의 있는 메서드의 로직과 정반대이다. 인자의 id와 배열의 id가 일치하지 않는 것만 products에 추가한다.
    }
}

class App{
    static init(){
        const activeProjectsList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
        activeProjectsList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
        // finishedPList의 addPro에 bind finishedProList객체를 바인딩 시켰다. this
        // 두 번쨰 인자의 함수호출은 click시이다. bind는 함수를 생성시키기만 하고 호출은 함수에 맡긴다.
        finishedProjectList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
    }s
}

App.init(); 