const sanityClient = require('@sanity/client');

export const dataClient = sanityClient({
    projectId: 'lr3spczj',
    dataset: 'production',
    token: 'skGYRDbG6ZQ84FHC0MgZTkc0M3kOj9V72L2Ye1Mxe055QoBWwk53cL2EBtgXVGtURQfCFggNKB5oidmIPCxpBK5w298FfYUCutBvKCOdofFo2OBvMMfMXLeflhZbESXZjaiKgAbpZ2LOeNxCsLjgyKVIF1b6zo1F6IEo6EtVuqw1xhz264i9',
    useCdn: false
});