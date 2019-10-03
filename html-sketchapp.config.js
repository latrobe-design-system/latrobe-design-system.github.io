module.exports = {
    file: 'all-patterns.md',
    outDir: 'sketch',
    viewports: {
        Desktop: '1280x800',
        Mobile: '320x568'
    },
    puppeteerArgs: '--no-sandbox --disable-setuid-sandbox',
    puppeteerExecutablePath: 'google-chrome-unstable'
};
