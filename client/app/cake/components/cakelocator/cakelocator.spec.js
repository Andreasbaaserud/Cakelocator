import CakelocatorModule from './cakelocator'
import CakelocatorController from './cakelocator.controller';
import CakelocatorComponent from './cakelocator.component';
import CakelocatorTemplate from './cakelocator.html';

describe('Cakelocator', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CakelocatorModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CakelocatorController();
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
      expect(CakelocatorTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CakelocatorComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CakelocatorTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CakelocatorController);
      });
  });
});
