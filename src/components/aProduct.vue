<!-- <script setup>

const props = defineProps({
  product: {
    required: true,
  },
});

</script>


<template>


 <div id="descriptionProduit">
            <section>
                <h3>Description</h3>
                <p>{{}}</p>
            </section>
            <section id="aspectTechniqueProduit">
                <h3>Aspect technique</h3>
                @foreach($leProduit->typeProduit->aspectTechnique as $unAspectTechnique)
                <p>{{$unAspectTechnique->libelleaspecttechnique}} : {{$unAspectTechnique->pivot->descriptionaspecttechnique}} </p>
                @endforeach
            </section>
</div>



</template> -->