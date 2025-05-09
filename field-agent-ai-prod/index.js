import Head from 'next/head'

export default function Home() {
  return (
    <div className="text-white bg-black min-h-screen p-8">
      <Head>
        <title>Field Agent AI – The AI Toolkit for Service Pros</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">🌍 Automate. Respond. Grow.</h1>
      <p className="mb-8">Field Agent AI gives property managers, real estate agents, landscapers, and service professionals everything they need to dominate their market — without ever missing a lead, forgetting a follow-up, or fumbling a booking.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">🧠 Powered by Turfie™ – Your Tireless AI Assistant</h2>
      <p className="mb-8">Turfie handles it all: inbound inquiries, instant quote replies, appointment scheduling, voice alerts, CRM logging, and proactive upsells — all customized to your business.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">🔍 Choose Your Industry Edition</h2>
      <table className="table-auto w-full text-left border-collapse border border-gray-700 mb-8">
        <thead>
          <tr>
            <th className="border border-gray-700 p-2">Industry</th>
            <th className="border border-gray-700 p-2">Features Included</th>
            <th className="border border-gray-700 p-2">CTA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-700 p-2 font-bold">Property Management Edition</td>
            <td className="border border-gray-700 p-2">Tenant follow-up, vacancy alerts, appointment automation, maintenance dispatch</td>
            <td className="border border-gray-700 p-2"><a href="/property-management" className="text-blue-400 underline">Explore Edition</a></td>
          </tr>
          <tr>
            <td className="border border-gray-700 p-2 font-bold">Realtor Edition</td>
            <td className="border border-gray-700 p-2">Lead nurturing, open house reminders, listing insights, AI response to Zillow/FB</td>
            <td className="border border-gray-700 p-2"><a href="/realtor" className="text-blue-400 underline">Explore Edition</a></td>
          </tr>
          <tr>
            <td className="border border-gray-700 p-2 font-bold">Landscaper Edition</td>
            <td className="border border-gray-700 p-2">Instant yard quotes, route planning, photo-to-proposal tools, voice booking</td>
            <td className="border border-gray-700 p-2"><a href="/landscaping" className="text-blue-400 underline">Explore Edition</a></td>
          </tr>
          <tr>
            <td className="border border-gray-700 p-2 font-bold">Tree Services Edition</td>
            <td className="border border-gray-700 p-2">Storm alerts, emergency callouts, visual quote builder, crew dispatcher</td>
            <td className="border border-gray-700 p-2"><a href="/trees" className="text-blue-400 underline">Explore Edition</a></td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-10 mb-4">💸 Pricing That Grows With You</h2>
      <ul className="list-disc list-inside mb-8">
        <li><strong>Starter</strong> – $49/month: Single-user AI Toolkit</li>
        <li><strong>Pro</strong> – $149/month: Multi-user with team dashboard + Turfie Voice Alerts</li>
        <li><strong>Advanced</strong> – $249/month: White-labeled, full analytics, and custom verticals</li>
      </ul>
      <a href="/pricing" className="text-blue-400 underline">View Full Pricing</a>

      <h2 className="text-2xl font-semibold mt-10 mb-4">🚀 Join the Beta Program (100 users only)</h2>
      <p className="mb-4">Apply today to lock in discounted rates and lifetime perks. Your feedback shapes the future.</p>
      <a href="/beta" className="text-blue-400 underline">Join the Beta</a>

      <h2 className="text-2xl font-semibold mt-10 mb-4">👤 Already a Member?</h2>
      <a href="/login" className="text-blue-400 underline">Log In to Your Dashboard</a>
    </div>
  )
}
