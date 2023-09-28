class DOMHelper{
    static moveElement(elementId, newDestinationSelector){
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
    }
}


class Tooltip{

}

class ProjectItem{

    constructor(id, updateProjectListFunction){ //prjItem.id, switchProject() 이 메서드는 ProjectList를 참조한다.
        this.id = id;
        this.updateProjectListHandler = updateProjectListFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(); // 실행한다.
    }

    connectMoreInfoButton(){

    }

    connectSwitchButton(){
        const projectItemElement = document.getElementById(this.id);//p1,p2
        const switchButton = projectItemElement.querySelector('button:last-of-type'); // finish버튼, activate버튼을 선택
        switchButton.addEventListener('click',this.updateProjectListHandler.bind(null, this.id));
        // 이 finish버튼이나 activate 버튼이 눌리면 swtichProject()메서드가 실행된다.
    }
}

class ProjectList{

    projects = [];

    constructor(type){ // active, finished
        const prjItems = document.querySelectorAll(`#${type}-projects li`); //prjitems => nodeList
        // 해당 id를 가진 모든 리스트 아이템에 대한 css 선택자
        //console.log(prjItems);
        for(const prjItem of prjItems){
            console.log(prjItem.id) // p1, p2
            this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this)));
            // projectList 클래스의 projects 배열에 projectItem 객체를 생성하여 push한다.
        }
    }
    
    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandlerFunction = switchHandlerFunction;
    }

    addProject(project){
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        
    }

    switchProject(projectId){
        // const projectIndex = this.projects.findIndex(p => p.id === projectId)
        // this.projects.splice(projectIndex,1);
        this.switchHandlerFunction(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }

} // 객체가 생성되면 리스트에 관한 정보를 담고 있어야 된다.

class App{
    static init() {
        const activeProjectList = new ProjectList('active',); // Consturctor가 실행된다.
        const finishedProjectList = new ProjectList('finished'); // Constructor가 실행된다.
        activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
        finishedProjectList.setSwitchHandlerFunction(activeProjectList.addProject.bind(activeProjectList));
    };
}

App.init();