<script>
	import TextBlock from '../../TextBlock.svelte';
	import Subheader from '../../Subheader.svelte';
	import Header from '../../Header.svelte';
</script>

<Header> About us</Header>
<Subheader> It's quite simple, really</Subheader>

<div class="justify-center items-center content-center">
	<p class="p-6">
		At SaaS Select Ltd., we specialize in guiding businesses and individuals through the intricate maze of Software
		as a Service (SaaS) options. Our mission? To connect you with the perfect SaaS solutions that not only meet your
		unique needs but also propel your goals forward!
	</p>

	<TextBlock title="Consultation / advisory services" icon="🛟" items="{[
			{ header: 'How we can help', text: 'Our trusted advisors will have a calm conversation with you about your needs and desires, or simply brainstorm where you think your business will be in the next period.'},
			{ header: '', text: 'For individuals, we offer coaching and mentoring, suggesting supportive subscription services along the way. As we are neither affiliated - nor or get any commission from - any of the solutions we recommend, you can rest assured that you are receiving as close to unbiased advice as can be given amongst fellow humans.' }
		]}" />

	<TextBlock title="Digital products" icon="📢" items="{[
			{ header: 'To be announced', text: 'We are developing some digital products that we believe will fill a gap in the market. We\'ll make further announcements soon. Stay tuned!' },
		]}" />
</div>