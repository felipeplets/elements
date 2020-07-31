function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,o,n){return o&&_defineProperties(e.prototype,o),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"xps+":function(e,o,n){"use strict";n.r(o),n.d(o,"GettingStartedModule",(function(){return g}));var t,l,r,a=n("uHuC"),c=n("PCNd"),u=n("sEIs"),s=n("EM62"),i=((t=function(){function e(){_classCallCheck(this,e),this.codeExampleComponent=m,this.codeExampleModule=p,this.codeExampleAppModule=d,this.codeExampleSharedModule=b}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["demo-getting-started"]],decls:84,vars:4,consts:[[1,"wrapper"],[3,"highlight"]],template:function(e,o){1&e&&(s.Rb(0,"div",0),s.Rb(1,"h1"),s.uc(2,"Getting started"),s.Qb(),s.Rb(3,"p"),s.uc(4," Start using Angular elements or any other web components in your applications by following these 5 steps... "),s.Qb(),s.Rb(5,"ol"),s.Rb(6,"li"),s.uc(7,"Install "),s.Rb(8,"code"),s.uc(9,"npm i @angular-extensions/elements"),s.Qb(),s.Qb(),s.Rb(10,"li"),s.uc(11," Add "),s.Rb(12,"code"),s.uc(13," import { LazyElementsModule } from '@angular-extensions/elements'; "),s.Qb(),s.Qb(),s.Rb(14,"li"),s.uc(15," Append "),s.Rb(16,"code"),s.uc(17,"LazyElementsModule"),s.Qb(),s.uc(18," to the "),s.Rb(19,"code"),s.uc(20,"imports: []"),s.Qb(),s.uc(21," of your "),s.Rb(22,"code"),s.uc(23,"AppModule"),s.Qb(),s.Qb(),s.Rb(24,"li"),s.uc(25," Add new "),s.Rb(26,"code"),s.uc(27,"schemas: []"),s.Qb(),s.uc(28," property with "),s.Rb(29,"code"),s.uc(30,"CUSTOM_ELEMENTS_SCHEMA"),s.Qb(),s.uc(31," value to "),s.Rb(32,"code"),s.uc(33,"@NgModule"),s.Qb(),s.uc(34," decorator of your "),s.Rb(35,"code"),s.uc(36,"AppModule"),s.Qb(),s.Qb(),s.Rb(37,"li"),s.uc(38," Use "),s.Rb(39,"code"),s.uc(40,"*axLazyElement"),s.Qb(),s.uc(41," directive on an element you wish to load and pass in the url of the element bundle "),s.Qb(),s.Qb(),s.Rb(42,"p"),s.uc(43,"That way we get..."),s.Qb(),s.Mb(44,"pre",1),s.Rb(45,"p"),s.uc(46," and can use "),s.Rb(47,"code"),s.uc(48,"*axLazyElement"),s.Qb(),s.uc(49," in the template of our component... "),s.Qb(),s.Mb(50,"pre",1),s.Rb(51,"h2"),s.uc(52,"Using in other (and lazy loaded) modules"),s.Qb(),s.Rb(53,"p"),s.uc(54," Any non-trivial Angular application will usually contain more than a single "),s.Rb(55,"code"),s.uc(56,"AppModule"),s.Qb(),s.uc(57,". "),s.Qb(),s.Rb(58,"p"),s.uc(59,"More so, some of these additional modules could be lazy loaded."),s.Qb(),s.Rb(60,"p"),s.uc(61," Any module which contains components which are using "),s.Rb(62,"code"),s.uc(63,"*axLazyElement"),s.Qb(),s.uc(64," directive has to have "),s.Rb(65,"code"),s.uc(66,"schemas: [CUSTOM_ELEMENTS_SCHEMA]"),s.Qb(),s.uc(67," in its "),s.Rb(68,"code"),s.uc(69,"@NgModule"),s.Qb(),s.uc(70," decorator configuration. Also the module has to either import "),s.Rb(71,"code"),s.uc(72,"LazyElementsModule"),s.Qb(),s.uc(73,". Let's have a look on the following example... "),s.Qb(),s.Mb(74,"pre",1),s.Rb(75,"p"),s.uc(76," Or import other module (most commonly "),s.Rb(77,"code"),s.uc(78,"SharedModule"),s.Qb(),s.uc(79,") which both imports and exports "),s.Rb(80,"code"),s.uc(81,"LazyElementsModule"),s.Qb(),s.uc(82,". "),s.Qb(),s.Mb(83,"pre",1),s.Qb()),2&e&&(s.zb(44),s.hc("highlight",o.codeExampleAppModule),s.zb(6),s.hc("highlight",o.codeExampleComponent),s.zb(24),s.hc("highlight",o.codeExampleModule),s.zb(9),s.hc("highlight",o.codeExampleSharedModule))},directives:[a.b],styles:["ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]}),t),m="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'your-org-feature',\n  template: `\n    <some-element *axLazyElement=\"elementUrl\"></some-element>\n  `\n})\nexport class FeatureComponent {\n  elementUrl = 'https://your-org.com/elements/some-element.js';\n}\n",p="import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\nimport { FeatureComponent } from './feature-component';\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  imports: [CommonModule, LazyElementsModule], // or imports: [SharedModule]\n  declarations: [FeatureComponent]\n})\nexport class FeatureModule {}\n",d="import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  imports: [BrowserModule, LazyElementsModule],\n  declarations: [AppComponent],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}\n",b="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\n@NgModule({\n  imports: [CommonModule, LazyElementsModule],\n  exports: [CommonModule, LazyElementsModule]\n})\nexport class SharedModule {}\n",h=[{path:"",component:i}],M=((r=function e(){_classCallCheck(this,e)}).\u0275mod=s.Jb({type:r}),r.\u0275inj=s.Ib({factory:function(e){return new(e||r)},imports:[[u.d.forChild(h)],u.d]}),r),g=((l=function e(){_classCallCheck(this,e)}).\u0275mod=s.Jb({type:l}),l.\u0275inj=s.Ib({factory:function(e){return new(e||l)},imports:[[a.c,c.a,M]]}),l)}}]);