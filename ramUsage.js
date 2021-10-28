const os = require('os');

const { arch, platform, totalmem, freemem } = os;

setInterval(()=>{
    const tRam = (totalmem()/1024/1024).toFixed(0);
    const fRam = (freemem()/1024/1024).toFixed(0);
    const usage = ((tRam-fRam)/tRam * 100).toFixed(2);

    const status = {
    OS: platform(),
    Arch: arch(),
    TotalRam: `${tRam} MB`,
    FreeRam: `${fRam} MB`,
    Usage: `${usage} %`
    }
    console.clear()
    console.table(status)
}, 1000)