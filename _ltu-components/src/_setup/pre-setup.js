((window) => {
    const componentsJSExport = {}

    let isInitialised = false
    const callbacksOnReady = []

    function _runAllComponents(funcName, keys, options) {
        keys.forEach((key) => componentsJSExport[key][funcName] && componentsJSExport[key][funcName](_helpers, ...(options[key] || [])))
    }

    function _getSelector(containerSelector, childKey, selectorConfig) {
        const selectors = [
            containerSelector || '',
        ]

        selectors.push(selectorConfig.children[childKey])

        if (selectors[0].length) selectors[0] += ':not(.ds-no-js)'
        else if (selectors[1].length) selectors[1] += ':not(.ds-no-js)'

        return selectors.join(' ')
    }

    const _helpers = {
        getSelector: _getSelector,
    }

    const _this = {
        /**
         * Register a component
         *
         * @param {string} name - name or key of component
         * @param {Object} exports - functions to be exported/shared. setup() is required
         */
        registerComponent: (name, exports) => {
            if (typeof componentsJSExport[name] === 'undefined') {
                componentsJSExport[name] = Object.assign(
                    {
                        setup: () => { },
                        eventHandlers: {},
                        helpers: {},
                    },
                    exports
                )
                Object.freeze(componentsJSExport[name])
            } else {
                console.error(`LTUDS : component ${name} is already registered`);
            }
        },
        /**
         * Register a callbakc when LTUDS is ready
         * @param {Object} cb - callback function to be invokved
         * @returns
         */
        ready: cb => isInitialised ? cb() : callbacksOnReady.push(cb),
        /**
         * Get registered components
         */
        components: componentsJSExport,

        getComponentKeys: () => Object.keys(componentsJSExport),
        /**
         * Setup componments
         * @param {string[]} [keys] - list of component keys to be setup, it is default to all registered components
         * @param {Object.<string, array>} [options] - list of extra parameters to pass in component setup function
         */
        setupComponents: (keys, options) => {
            _runAllComponents('setup', keys || _this.getComponentKeys(), options || {})
            isInitialised = true
            let cb
            while (cb = callbacksOnReady.shift()) {
                try {
                    cb()
                } catch (e) {
                    console.error(e)
                }
            }
        },
    }

    window.LTUDS = _this

})(window);