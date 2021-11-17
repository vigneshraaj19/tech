const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin});
  var input = [{"memorysummary": {
    "MaximumCapacity" : "2048MBytes",
    "MaximumMemoryModuleSize" : " 4096MBytes",
    "MemorySlots" : "4",
    "ErrorCorrection" : "None",
    "DRAMFrequency" : "199.0MHz",
    "MemoryTimings" : "3-3-3-8(CL-RCD-RP-RAS)",
  }
  },
   {"DeviceLocator" : {
    "Manufacturer" : "Hyundaielectronics",
    "PartNumber" : "HYMD264646D8J-D43",
    "SerialNumber" :"FFFF7240",
    "Capacity" : "512MBytes",
    }
   }
    ];
inp.on("close", () => {
 console.log(input[1].DeviceLocator.Capacity);
});

