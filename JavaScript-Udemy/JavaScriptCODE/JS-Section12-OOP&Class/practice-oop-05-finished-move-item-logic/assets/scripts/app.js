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

class Component{
  detach = () => {
    this.element.remove();
  }

  attach(){
    document.body.append(this.element);
  }
}

class Tooltip extends Component {

  constructor(closeNotofierFunction){
    super();
    this.closeNotifier = closeNotofierFunction;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotofier();
  }

  create(){
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    tooltipElement.textContent = 'Dummy'
    tooltipElement.addEventListener('click', this.detach);
    this.element = tooltipElement;
  }

}

class ProjectItem {

  hsaActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id; // p1,p2,p3
    this.updateProjectListsHandler = updateProjectListsFunction; // switchProjects 메서드 == updateProjectListHandler
    this.connectMoreInfoButton();
    this.connectSwitchButton(type); // this type => active, finished/ 함수를 실행한다.
  }

  showHandler(){
    if(this.hsaActiveTooltip){
      return;
    }
    const tooltip = new Tooltip(() => {
      this.hsaActiveTooltip = false;
    });
    tooltip.attach();
    this.hsaActiveTooltip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    let moreInfoBtn = projectItemElement.querySelector('button:first-of-type'); 
    moreInfoBtn.addEventListener('click',this.showHandler)
  }

  connectSwitchButton(type) { 
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type'); 
    switchBtn = DOMHelper.clearEventListeners(switchBtn); 

    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener(
      'click',
      this.updateProjectListsHandler.bind(null, this.id)
    );
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
