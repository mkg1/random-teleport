<script>
	export let pagecontext;

	function displayInput() {
		pagecontext = 'enterDestination'
	}

	function displayPortal() {
		pagecontext = 'portal'
	}
</script>

<header>
	<button on:click={displayPortal}>Random Teleport</button>

	<nav>
		<ul>
			<button on:click={displayInput}>Submit Destination</button>
		</ul>
	</nav>
</header>

<style>
	header {
		padding: 1rem;
        margin: 1.5rem 1.5rem 0 1.5rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
        color: #FFF;
        text-shadow: 6px 4px 7px rgba(0, 0, 0, 0.80);
        font-family: 'Bungee Hairline', sans-serif;       
        font-size: 32px;
        font-style: normal;
        line-height: normal;
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
        font-size: 16px;
	}
	
	button {
		all: unset;
		cursor: pointer;
	}
</style>
