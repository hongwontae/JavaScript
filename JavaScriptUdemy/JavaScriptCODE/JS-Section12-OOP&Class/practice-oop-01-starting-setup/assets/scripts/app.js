class Tooltip{

}

class ProjectItem{

}

class ProjectList{
    constructor(type){
        const prjItems = document.querySelectorAll(`#${type}-projects li`); 
        // 해당 id를 가진 모든 리스트 아이템에 대한 css 선택자
        console.log(prjItems);
    }
} // 객체가 생성되면 리스트에 관한 정보를 담고 있어야 된다.

class App{
    static init() {
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
    };
}

App.init();