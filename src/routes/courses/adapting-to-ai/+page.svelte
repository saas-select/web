<script>
	import TextBlock from '$components/TextBlock.svelte';
	import ContactUs from '$components/ContactUs.svelte';
</script>

<code>/<a href="/courses">courses</a>/adapting-to-ai</code>

<TextBlock title="What you'll learn" icon="🔐" items="{[
			{	header: 'A practical overview of the AI landscape', 
				text: `What tools are out there; how to use them; and how to make sure you're not overwhelmed.`},
			{	header: 'Your situation',
				text: `We'll help you understand how AI can be applied to your specific situation.`},
			{	header: 'Ongoing mentoring',
				text: `We won't just drop a tool on you and disappear. We'll be here for you until you can comfortable stand on your own two legs`}]}"/>

<TextBlock title="Full money back policy" icon="🤝" items="{[
			{	header: `We're confident in our ability to help you`,
				text: `We offer full money-back guarantee if you're not satisfied with our service. The only thing we require in return, is that you explain to us how we missed your expectations, so that we can improve in the future.`}]}"/>

<TextBlock title="Transparent pricing" icon="💱" items="{[
			{	header: `£1000 per participant per 6 hour day; £800 for 8+ participants; £600 for 16+ up to 30 participants; £500 retainer for ongoing async mentoring.`,
				text: `We're confident in our ability to relay the crucial information and to design a strategy for you to follow within 2-4 hours.`},
]}"/>

<ContactUs/>
