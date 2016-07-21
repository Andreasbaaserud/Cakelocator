import CakelocatorAddModule from './cakelocator-add'
import CakelocatorAddController from './cakelocator-add.controller';
import CakelocatorAddComponent from './cakelocator-add.component';
import CakelocatorAddTemplate from './cakelocator-add.html';

describe('Cakelocator-add', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CakelocatorAddModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CakelocatorAddController();
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
      expect(CakelocatorAddTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CakelocatorAddComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CakelocatorAddTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CakelocatorAddController);
      });
  });
});
