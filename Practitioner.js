/* Hausarztresorce 
* create Arzt 
* Main Endoint =  https://hapi.fhir.org/baseR4/Practitioner POST 
*
*
*/
let hausarzt =
{
  "resourceType": "Practitioner",
  "identifier": [
    {
      "system": "http://fhir.de/sid/bundesaerztekammer/efn",
      "value": "123456789"
    }
  ],
  "active": true,
  "name": [
    {
      "use": "official",
      "family": "Schmidt",
      "given": ["Anna"],
      "prefix": ["Dr. med."]
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "+49 30 12345678",
      "use": "work"
    },
    {
      "system": "email",
      "value": "a.schmidt@hausarztpraxis.de",
      "use": "work"
    }
  ],
  "gender": "female",
  "qualification": [
    {
      "code": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0360",
            "code": "MD",
            "display": "Hausarzt"
          }
        ],
        "text": "Hausarzt"
      }
    }
  ]
}


/*
example id = 53357560
https://hapi.fhir.org/baseR4/Practitioner/{id}  GET 

*/