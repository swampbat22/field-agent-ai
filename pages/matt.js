// /pages/matt.js
export default function Matt() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome Matt 👂</h1>
        <p className="text-lg mb-6">
          You’re invited to preview our new <strong>Hearing Clinic Edition</strong> of Field Agent AI — built to support clinics like yours that focus on screenings, fittings, and long-term hearing care.
        </p>
        <p className="mb-4">
          Turfie AI can automatically follow up with potential patients, confirm appointments, schedule check-ins, and even send reminders for annual cleanings or rechargeable upgrades.
        </p>
        <ul className="text-left text-md max-w-xl mx-auto mb-6 list-disc pl-5">
          <li>✅ Lead Capture & Screening Scheduler</li>
          <li>✅ Follow-up for Fittings & Trials</li>
          <li>✅ Device Upgrade Opportunities</li>
          <li>✅ Automated Reminders for Cleanings & Retests</li>
        </ul>
        <p className="mb-8">We believe this will not only save your staff time, but also help more people hear better — consistently and reliably.</p>
        <a href="mailto:judsonspence1@gmail.com">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl text-lg shadow">Talk to Me About It</button>
        </a>
      </section>
    </main>
  );
}
