let hospitalData = {
  hospitalName: "CareWell Hospital",
  location: "Hyderabad",
  apiStatus: 200,
  data: {
    doctor: {
      doctorId: "D001",
      name: "Dr. Ramesh",
      specialization: "Cardiology",
      isAvailable: true
    },
    patients: [
      { patientId: "P001", name: "Deepak", age: 30, condition: "critical", isAdmitted: true },
      { patientId: "P002", name: "Suresh", age: 45, condition: "stable", isAdmitted: false },
      { patientId: "P003", name: "Priya", age: 28, condition: "critical", isAdmitted: true },
      { patientId: "P004", name: "Anjali", age: 35, condition: "stable", isAdmitted: true },
      { patientId: "P005", name: "Ravi", age: 52, condition: "observation", isAdmitted: false }
    ],
    billing: {
      totalBill: 150000,
      isPaid: false,
      insuranceCovered: true
    }
  }
};

//Task 6: Write a function called getPatientPriority that takes a patient object and returns:
// "Immediate Attention" if condition is "critical" AND isAdmitted === true
// "Monitor Closely" if condition is "observation"
// "Stable - Regular Checkup" if condition is "stable"
// "Unknown" for anything else

// Then call it for every patient using .forEach() and print:
// Deepak : Immediate Attention
// Suresh : Stable - Regular Checkup
// Priya : Immediate Attention
// Anjali : Stable - Regular Checkup
// Ravi : Monitor Closely

const getPatientPriority = (patient) => {

  if (patient.condition === "critical" && patient.isAdmitted === true) {
    return "Immediate Attention";
  } else if (patient.condition === "observation") {
    return "Monitor Closely";
  } else if (patient.condition === "stable") {
    return "Stable - Regular Checkup";
  } else {
    return "Unknown";
  }
};

hospitalData.data.patients.forEach((patientId) => {
  console.log(patientId.name + " : " + getPatientPriority(patientId));
});


//Task 1: Print hospitalName, location and apiStatus directly from hospitalData.
console.log(hospitalData.hospitalName);
console.log(hospitalData.location);
console.log(hospitalData.apiStatus);

//Task 2: Print name and specialization from the nested doctor object.
console.log(hospitalData.data.doctor.name);
console.log(hospitalData.data.doctor.specialization);

//Task 3: Write an if/else that checks all three simultaneously:
// apiStatus === 200
// doctor.isAvailable === true
// billing.insuranceCovered === true
// Print "Hospital system verified - insurance accepted" if all true, otherwise "Verification failed".
if (hospitalData.apiStatus === 200 &&
  hospitalData.data.doctor.isAvailable === true &&
  hospitalData.data.billing.insuranceCovered === true){
    console.log("Hospital system verified - insurance accepted");
  }else{
    console.log("Verification failed")
  }

  //Task 4: Use .filter() to get only admitted patients (isAdmitted === true), then use .forEach() to print each like:
  // /Admitted: P001 - Deepak - critical
let admittedPatients = hospitalData.data.patients.filter((isAdmitted)=>{
  return isAdmitted.isAdmitted === true;
});

admittedPatients.forEach((patient)=>{
  console.log("Admitted : ", patient.patientId + " - " + patient.name + " - " + patient.condition);
})

//Task 5: Use .map() to transform all patients into just their name values and print the resulting array:

let patientNames = hospitalData.data.patients.map((justname)=>{

  return justname.name;
});

console.log(patientNames);