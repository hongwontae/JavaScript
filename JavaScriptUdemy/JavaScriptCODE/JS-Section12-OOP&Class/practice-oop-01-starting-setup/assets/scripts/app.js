class Tooltip{

}

class ProjectItem{

    constructor(id){
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton(){

    }

    connectSwitchButton(){
        const projectItemElement = document.getElementById(this.id);
        const switchButton = projectItemElement.querySelector('button:last-of-type');
        switchButton.addEventListener('click',)
    }
}

class ProjectList{

    projects = [];

    constructor(type){
        const prjItems = document.querySelectorAll(`#${type}-projects li`); //prjitems => nodeList
        // 해당 id를 가진 모든 리스트 아이템에 대한 css 선택자
        //console.log(prjItems);
        for(const prjItem of prjItems){
            console.log(prjItem.id)
            this.projects.push(new ProjectItem(prjItem.id));
            
        }
        console.log(this.projects);
    }

    addProject(){

    }

    switchProject(projectId){
        // const projectIndex = this.projects.findIndex(p => p.id === projectId)
        // this.projects.splice(projectIndex,1);
        this.projects = this.projects.filter(p => p.id !== projectId);
    }

} // 객체가 생성되면 리스트에 관한 정보를 담고 있어야 된다.

class App{
    static init() {
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
    };
}

App.init();