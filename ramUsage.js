const os = require('os');

const { arch, platform, totalmem, freemem } = os;

const status = {
    OS: platform(),
    Arch: arch(),
    TotalRam: totalmem(),
    FreeRam: freemem()
}

console.log(status)