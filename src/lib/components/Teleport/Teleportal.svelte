<script>
    import Portal from '$lib/images/portal.png';
    import { takeMeSomewhere } from '$lib/utils/Destination.js';
    function teleport() {
        var bodyElement = document.body;
        bodyElement.classList.add("teleporting");

        const teleportDestination = takeMeSomewhere();
        setTimeout(() => {  window.location = teleportDestination; }, 2000)
    }
</script>

<div id="portal">
    <button on:click={teleport}>
        <img src={Portal} alt="a teleportation device" width="700px" />
    </button>
</div>

<style>
    #portal {
        display: flex;
        justify-content: center;
    }
    button {
        background: none;
        border: none;
    }
</style>
