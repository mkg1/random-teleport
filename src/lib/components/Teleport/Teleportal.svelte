<script>
    import Portal from '$lib/images/teleportbutton.png';
    import Header from '$lib/components/Header/Header.svelte'
    import Footer from '$lib/components/Footer/Footer.svelte'
    import { takeMeSomewhere } from '$lib/utils/Destination.js';

    let pagecontext = 'portal';
    console.log("pagecontext: ", pagecontext)
    function teleport() {
        var bodyElement = document.body;
        bodyElement.classList.add("teleporting");

        const teleportDestination = takeMeSomewhere();
        setTimeout(() => {  window.location = teleportDestination; }, 2000)
    }
</script>
<Header bind:pagecontext />
<div id="portal">
{#if pagecontext == 'enterDestination'}
    <div id="input-container">
        <input placeholder="Enter a new destination..." />
        <p>Enter a new teleport destination</p>
        <p id="subtext">(must be a permanent link)</p>    
    </div>
{:else}
        <button on:click={teleport}>
            <img src={Portal} alt="a teleportation device" />
        </button>
{/if}
</div>
<Footer />

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

    #input-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        margin-top: 50%;
        width: 75%;
        background: rgb(176 236 241 / 30%);
        border: 2px solid #aae3ff;
        height: 30px;
        border-radius: 8px;
        text-align: center;
        color: white;
        font-size: 16px;
    }

    ::placeholder {
        color: rgb(160, 157, 157);
    }

    p {
        font-family: 'Bungee Hairline', sans-serif;
        color: white;
    }

    #subtext {
        margin: 0;
    }
</style>
