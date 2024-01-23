<script>
    import Portal from '$lib/images/teleportbutton.png';
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
        <img src={Portal} alt="a teleportation device" />
    </button>
</div>

<style>
    #portal {
        display: flex;
        justify-content: center;
        height: 75vh;
    }

    img {
        max-width: 25%;
    }

    @media only screen and (max-width: 480px) {
        img {
            max-width: 50%;
        }
    }
    button {
        background: none;
        border: none;
    }
</style>
