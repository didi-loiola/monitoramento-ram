const os = require('os');

const { arch, platform, totalmem, freemem } = os;

const tRam = (totalmem()/1024/1024).toFixed(0);
const fRam = (freemem()/1024/1024).toFixed(0);

const status = {
    OS: platform(),
    Arch: arch(),
    TotalRam: tRam,
    FreeRam: fRam
}

console.log(status)