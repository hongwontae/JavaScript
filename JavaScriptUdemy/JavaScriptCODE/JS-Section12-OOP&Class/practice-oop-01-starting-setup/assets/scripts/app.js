class ToolTip{}

class ProjectItem{

    constructor(id, updateProjectListsFunction){
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectSwitchButton();
        this.connectMoreInfoButton();
    }

    connectSwitchButton(){

    }

    connectMoreInfoButton(){
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn.addEventListener('click', this.updateProjectListsHandler); 
        // switchBtn에 나는 속해있는 클래스의 메서드 뿐만 아니라 다른 클래스의 메서드를 addEvent에 넣고 싶다.
        // 콜백 함수를 사용하자.
    }

}

class ProjectList{

    products = [];

    constructor(type){
        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`)
        console.log(prjItems);
        for(const prjitem of prjItems){
            this.products.push(new ProjectItem(prjitem.id, this.switchProject.bind(this)));
        }
        console.log(this.products); // li의 id만 가져와서 배열에 넣었다.
    }

    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }

    addProject(){
        console.log(this);
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
        finishedProjectList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
    }
}
App.init(); 