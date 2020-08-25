<section className="main-state-container">
{/* STATE NAME  */}
<div className="state-name-container">
<StateName abbrev={stateInfo.state}/> 
</div>
{/* STATE DATA */}
<p>Data Quality: <strong>{stateInfo.dataQualityGrade}</strong></p>
{/* DATE */}
<p>Last Updated: {stateInfo.lastUpdateEt}</p>
{/* DEATHS */}
<p>Total Deaths: {stateInfo.death}</p>
{/* POSITIVE */}
<p>Positive Cases: {stateInfo.positive}</p>
{/* NEGATIVE */}
<p>Negative Cases: {stateInfo.negative}</p>
{/* TOTAL */}
<p>Total Test Results: {stateInfo.totalTestResults}</p>


<Button type="primary">Button</Button>
</section>