import CakelocatorTableModule from './cakelocator-table'
import CakelocatorTableController from './cakelocator-table.controller';
import CakelocatorTableComponent from './cakelocator-table.component';
import CakelocatorTableTemplate from './cakelocator-table.html';

describe('CakelocatorTable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CakelocatorTableModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CakelocatorTableController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CakelocatorTableTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CakelocatorTableComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CakelocatorTableTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CakelocatorTableController);
      });
  });
});
