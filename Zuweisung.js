/* * Überweisung vom Hausarzt zum Orthopäden
 * ANNAHME: Die IDs existieren bereits auf dem Server
 * https://hapi.fhir.org/baseR4/ReferralRequest POST (Patiente ID und die IDs der Ärtze )
 */
let ueberweisung_orthopaede = {
  resourceType: "ServiceRequest",
  status: "active",
  intent: "order",
  occurrenceDateTime: "2025-11-23T18:00:00+01:00",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "103698004",
        display: "Patient referral",
      },
    ],
    text: "Überweisung zur orthopädischen Abklärung",
  },
  subject: {
    reference: "Patient/46161799",
    display: "lala tata",
  },
  requester: {
    reference: "Practitioner/53357560",
    display: "Hausarzt Dr. Schmidt",
  },
  performer: [
    {
      reference: "Practitioner/53359852",
      display: "Orthopäde Mustermann",
    },
  ],
  reasonCode: [
    {
      coding: [
        {
          system: "http://fhir.de/CodeSystem/dimdi/icd-10-gm",
          code: "M54.9",
          display: "Rückenschmerz, nicht näher bezeichnet",
        },
      ],
      text: "Chronische lumbale Beschwerden",
    },
  ],
  priority: "routine",
};
