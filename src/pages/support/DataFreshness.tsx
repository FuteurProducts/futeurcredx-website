import { Link } from "react-router-dom";
import SupportPageLayout from "@/components/support/SupportPageLayout";

const DataFreshness = () => {
  return (
    <SupportPageLayout
      title="Data Freshness & Synchronization"
      description="Understanding how credit data is collected, updated, and synchronized across bureaus"
    >
      <section className="mb-12">
        <h2>How Credit Data Flows</h2>
        <p>
          Credit data originates from creditors and lenders who report to the three major bureaus 
          (Equifax, Experian, TransUnion). Understanding this flow helps explain timing expectations 
          and potential discrepancies.
        </p>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-6">
          <h4 className="text-amber-400 mb-4">Data Flow Timeline</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm shrink-0">1</div>
              <div>
                <p className="text-white font-medium">Creditor Reports Activity</p>
                <p className="text-white/60 text-sm">Lenders typically report to bureaus once per billing cycle (monthly)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm shrink-0">2</div>
              <div>
                <p className="text-white font-medium">Bureau Processes Data</p>
                <p className="text-white/60 text-sm">Bureaus process and validate incoming data (1-3 business days)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm shrink-0">3</div>
              <div>
                <p className="text-white font-medium">FuteurCredX Syncs</p>
                <p className="text-white/60 text-sm">Our platform pulls updated data within 24-48 hours of bureau update</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm shrink-0">4</div>
              <div>
                <p className="text-white font-medium">Data Available via API</p>
                <p className="text-white/60 text-sm">Fresh data is immediately available through all endpoints</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>Common Data Issues & Solutions</h2>
        
        <div className="space-y-6 mt-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-amber-400 mb-3">Missing Tradelines</h3>
            <p className="text-white/70 mb-4">
              Tradelines may appear missing for several reasons. Here's how to diagnose and resolve:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <div>
                  <p className="text-white font-medium">New Account (0-60 days old)</p>
                  <p className="text-white/60 text-sm">New accounts may take 1-2 billing cycles to appear. Allow 24-48 hours after the creditor's first report.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <div>
                  <p className="text-white font-medium">Creditor Doesn't Report</p>
                  <p className="text-white/60 text-sm">Some creditors only report to 1-2 bureaus. Check which bureaus the creditor reports to.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <div>
                  <p className="text-white font-medium">Bureau Sync Delay</p>
                  <p className="text-white/60 text-sm">Allow 24-48 hours for our system to sync after bureau updates.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-amber-500/10 rounded-lg">
              <p className="text-amber-400 text-sm font-medium">Resolution</p>
              <p className="text-white/70 text-sm">Request a fresh pull via API to force immediate synchronization.</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-amber-400 mb-3">Score Discrepancy</h3>
            <p className="text-white/70 mb-4">
              Scores may differ between pulls or seem outdated. Understanding the update cycle helps set expectations:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <div>
                  <p className="text-white font-medium">Score Update Frequency</p>
                  <p className="text-white/60 text-sm">Credit scores are recalculated every 30 days based on new tradeline data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <div>
                  <p className="text-white font-medium">Different Scoring Models</p>
                  <p className="text-white/60 text-sm">FICO, VantageScore, and FSR use different algorithms. Compare like with like.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <div>
                  <p className="text-white font-medium">Bureau-Specific Data</p>
                  <p className="text-white/60 text-sm">Each bureau may have slightly different data, leading to score variations.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-amber-500/10 rounded-lg">
              <p className="text-amber-400 text-sm font-medium">Resolution</p>
              <p className="text-white/70 text-sm">Use the <code className="bg-white/10 px-1.5 py-0.5 rounded text-amber-300">score_model</code> parameter to ensure consistent comparisons.</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-amber-400 mb-3">Stale Data</h3>
            <p className="text-white/70 mb-4">
              If data appears outdated, you can request a fresh pull to get the latest information:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <div>
                  <p className="text-white font-medium">Check Last Updated Timestamp</p>
                  <p className="text-white/60 text-sm">Every response includes a <code className="bg-white/10 px-1.5 py-0.5 rounded text-amber-300">last_updated</code> field.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <div>
                  <p className="text-white font-medium">Cached vs Fresh Pulls</p>
                  <p className="text-white/60 text-sm">By default, we return cached data (faster, no additional cost). Fresh pulls hit the bureaus directly.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-amber-500/10 rounded-lg">
              <p className="text-amber-400 text-sm font-medium">Resolution</p>
              <p className="text-white/70 text-sm">Add <code className="bg-white/10 px-1.5 py-0.5 rounded text-amber-300">fresh_pull=true</code> to your API request.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>Requesting a Fresh Pull</h2>
        <p>
          To force a fresh pull from the bureaus instead of using cached data, include the 
          <code>fresh_pull</code> parameter in your API request:
        </p>
        
        <pre className="bg-gray-900 border border-white/10 rounded-lg p-4 my-6 overflow-x-auto">
          <code className="text-sm">{`curl -X POST https://api.futeurcredx.com/v1/credit/report \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "consumer_id": "usr_abc123",
    "fresh_pull": true,
    "bureaus": ["equifax", "experian", "transunion"]
  }'`}</code>
        </pre>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 my-6">
          <p className="text-amber-400 font-medium mb-2">⚠️ Fresh Pull Considerations</p>
          <ul className="text-white/70 text-sm space-y-1">
            <li>• Fresh pulls incur additional API costs (see pricing)</li>
            <li>• Response time is longer (5-15 seconds vs &lt;1 second for cached)</li>
            <li>• Rate limited to 1 fresh pull per consumer per 24 hours</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2>Data Retention & Caching</h2>
        
        <table className="w-full border-collapse my-6">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left py-3 px-4">Data Type</th>
              <th className="text-left py-3 px-4">Cache Duration</th>
              <th className="text-left py-3 px-4">Refresh Trigger</th>
            </tr>
          </thead>
          <tbody className="text-white/70">
            <tr className="border-b border-white/10">
              <td className="py-3 px-4">Full Credit Report</td>
              <td className="py-3 px-4">24 hours</td>
              <td className="py-3 px-4"><code className="bg-white/10 px-1.5 py-0.5 rounded text-amber-300">fresh_pull=true</code></td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-3 px-4">Credit Score</td>
              <td className="py-3 px-4">30 days</td>
              <td className="py-3 px-4">Auto-refresh on report pull</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-3 px-4">Tradeline Summary</td>
              <td className="py-3 px-4">24 hours</td>
              <td className="py-3 px-4"><code className="bg-white/10 px-1.5 py-0.5 rounded text-amber-300">fresh_pull=true</code></td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-3 px-4">Public Records</td>
              <td className="py-3 px-4">7 days</td>
              <td className="py-3 px-4">Full report refresh</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-3 px-4">Inquiry History</td>
              <td className="py-3 px-4">24 hours</td>
              <td className="py-3 px-4">Auto-refresh daily</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2>Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-green-400 mb-2">✓ Do</h4>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Check <code className="bg-white/10 px-1 rounded text-amber-300">last_updated</code> before requesting fresh pull</li>
              <li>• Use webhooks to get notified of data changes</li>
              <li>• Cache data on your end to reduce API calls</li>
              <li>• Set appropriate user expectations for data timing</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-red-400 mb-2">✗ Don't</h4>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Request fresh pulls on every page load</li>
              <li>• Assume data updates in real-time</li>
              <li>• Ignore the 24-hour fresh pull rate limit</li>
              <li>• Compare scores across different models</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Related Resources</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Link to="/support/fsr-score" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors block">
            <h4 className="text-amber-400 mb-2">FSR Score Overview</h4>
            <p className="text-white/60 text-sm">Learn about our proprietary scoring model</p>
          </Link>
          <Link to="/support/tradeline-analysis" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors block">
            <h4 className="text-amber-400 mb-2">Tradeline Analysis</h4>
            <p className="text-white/60 text-sm">Deep dive into tradeline data structure</p>
          </Link>
          <Link to="/support/webhooks-setup" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors block">
            <h4 className="text-amber-400 mb-2">Webhooks Setup</h4>
            <p className="text-white/60 text-sm">Get notified when data changes</p>
          </Link>
        </div>
      </section>
    </SupportPageLayout>
  );
};

export default DataFreshness;
