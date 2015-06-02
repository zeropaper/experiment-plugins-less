# grunt-contrib-less experiment

## Aim
This projet is aimed to experiment around [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less) in order to find a way to offer a seamless way for Camunda BPM plugin developers to define their own styles.

## Scaffolding

```
├── app
│   └── resources
│       ├── _bootstrap.less
│       ├── _mixins.less
│       ├── _variables.less
│       └── styles.less
├── node_modules
│   └── bootstrap
│       └── less
└── path
    └── to
        ├── a
        │   └── plugin
        │       └── resources
        │           └── styles.less
        └── an-other
            └── plugin
                └── resources
                    └── styles.less
```

## Running

```sh
npm i
grunt
```

## Result

The less grunt task has 2 configurations

### `separate`

Will generate:
- a `styles.css` which contains the "webapp" styles
- a `plugins.css` which will have the styles needed for the plugins

### `combined`

Will generate 1 file (`combined.css`) which includes all the styles (for the "webapp" as well as the plugins.
