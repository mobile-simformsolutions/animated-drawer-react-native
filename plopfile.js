module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'app/components/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Component.js.hbs'
      },
      {
        type: 'add',
        path: 'app/components/styles/{{pascalCase name}}Styles.js',
        templateFile: 'plop-templates/Styles.js.hbs'
      }
    ]
  });
  plop.setGenerator('module', {
    description: 'Create a module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your module name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'app/modules/{{pascalCase name}}/{{pascalCase name}}Screen.js',
        templateFile: 'plop-templates/Module.js.hbs'
      },
      {
        type: 'add',
        path:
          'app/modules/{{pascalCase name}}/styles/{{pascalCase name}}ScreenStyles.js',
        templateFile: 'plop-templates/Styles.js.hbs'
      }
    ]
  });
  plop.setGenerator('screen', {
    description: 'Create a screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your module name?'
      },
      {
        type: 'input',
        name: 'screen',
        message: 'What is your screen name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'app/modules/{{lowerCase name}}/{{pascalCase screen}}Screen.js',
        templateFile: 'plop-templates/Screen.js.hbs'
      },
      {
        type: 'add',
        path:
          'app/modules/{{lowerCase name}}/styles/{{pascalCase screen}}ScreenStyles.js',
        templateFile: 'plop-templates/Styles.js.hbs'
      }
    ]
  });
  plop.setGenerator('reducer', {
    description: 'Create a reducer',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your reducer name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'app/redux/{{pascalCase name}}Redux.js',
        templateFile: 'plop-templates/Reducer.js.hbs'
      }
    ]
  });
  plop.setGenerator('saga', {
    description: 'Create a saga',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your saga name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'app/saga/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Saga.js.hbs'
      }
    ]
  });
  plop.setGenerator('service', {
    description: 'Create a service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?'
      },
      {
        type: 'input',
        name: 'path',
        message: 'What is your directory path? (eg. app/module)'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}Service.js',
        templateFile: 'plop-templates/Service.js.hbs'
      }
    ]
  });
};
