class DOMHelper {
  static clearEventListeners(element) { // element => last button
    const clonedElement = element.cloneNode(true); // 깊은 복사를 한다. => 새로운 복사값
    element.replaceWith(clonedElement); // replaceWith => 기존의 것과 교체를 한다.
    return clonedElement; // 그 버튼을 반환한다.
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class Tooltip {}

class ProjectItem {

  constructor(id, updateProjectListsFunction, type) {
    this.id = id; // p1,p2,p3
    this.updateProjectListsHandler = updateProjectListsFunction; // switchProjects 메서드 == updateProjectListHandler
    this.connectMoreInfoButton();
    this.connectSwitchButton(type); // this type => active, finished/ 함수를 실행한다.
  }

  connectMoreInfoButton() {}

  connectSwitchButton(type) { // active, finished
    const projectItemElement = document.getElementById(this.id); // p1,p2,p3 => li
    let switchBtn = projectItemElement.querySelector('button:last-of-type'); // li 중에서 마지막에 있는 버튼
    switchBtn = DOMHelper.clearEventListeners(switchBtn); 
    // 버튼을 매개변수로 하여 clearEventListners를 작동시킨다.
    // 메서드를 통해서 새롭게 복사된 버튼 => switchBtn
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    // textContent에 textContent button의 text는 active라면 finish, 아니라면 Activate가 반환된다.
    switchBtn.addEventListener(
      'click',
      this.updateProjectListsHandler.bind(null, this.id)
    );
    // switchBtn이 클릭되었을 떄 updateProjectListsHandler가 this.id 매개변수를 갖고 실행된다.
  }

  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {  //active, finished
    this.type = type; // type => active, finished
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    // id가 active,finished-projects의 li전부를 선택한다. => nodelist 유사배열객체이고 해당 모든 노드를 반환한다.
    for (const prjItem of prjItems) { // 배열을 순환한다.
      this.projects.push( // 객체를 만들어서 projects의 배열에 추가한다.
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type) 
        // 매개변수는 3개이다. p1,p2,p3,switchProject 메서드, active, finished
        // 매개변수가 3개가 전달되어 생성자 함수가 실행된다.
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find(p => p.id === projectId));
    this.projects = this.projects.filter(p => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    // 이 두개의 객체가 생성되어서 constructor가 실행된다.

    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    ); // 메서드를 실행시킨다.

    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
  }
}

App.init();
