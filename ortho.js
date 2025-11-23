/*
* FHIR Practitioner Ressource für Uni-Projekt (Orthopäde)
* Main Endpoint = https://hapi.fhir.org/baseR4/Practitioner POST unser id = 53359852
*/
let orthopaede_uni_projekt =
{
    "resourceType": "Practitioner",
    "identifier": [
        {
            "use": "official",
            "system": "http://fhir.de/sid/bundesaerztekammer/efn",
            "value": "876543210"
        }
    ],
    "active": true,
    "name": [
        {
            "use": "official",
            "family": "Mustermann",
            "given": ["Alex"],
            "prefix": ["Dr. med."],
            "suffix": ["Facharzt für Orthopädie"]
        }
    ],
    "telecom": [
        {
            "system": "phone",
            "value": "+49 231 987654321",
            "use": "work"
        },
        {
            "system": "email",
            "value": "alex.mustermann@ortho-dortmund.de",
            "use": "work"
        }
    ],
    "gender": "female",
    "birthDate": "1975-05-15",
    "qualification": [
        {
            "code": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0360",
                        "code": "MD", // Medical Doctor
                        "display": "Facharzt für Orthopädie"
                    },
                    {
                        // Verwendung von SNOMED CT für die Facharztbezeichnung (bessere Praxis)
                        "system": "http://snomed.info/sct",
                        "code": "416720008",
                        "display": "Specialist in orthopaedics"
                    }
                ],
                "text": "Facharzt für Orthopädie"
            },
            "issuer": {
                "display": "Ärztekammer Westfalen-Lippe"
            }
        }
    ]
}