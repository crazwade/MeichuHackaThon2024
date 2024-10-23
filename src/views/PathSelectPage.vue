<script setup lang="ts">
import type { GetPathListPayload } from '@/api';
import { getPathList } from '@/api';
import PathCard from '@/components/PathSelectionPage/PathCard.vue';
import PDetail from '@/components/PathSelectionPage/PDetail.vue';
import type { Path, PathDetail } from '@/type';
import { generateMap } from '../common/generateMap';
import LoadingDialog from '../components/LoadingDialog.vue';

const route = useRoute();
const router = useRouter();
const pathData = ref<Path[]>([]);
const pathSelect = ref<number>(-1);
const mapRef = ref<HTMLElement | null>(null);
const mapId = ref<number>(0);
const LoadingDialogVisable = ref<boolean>(false);

const pathCardClick = (id: number) => {
  if (pathSelect.value === id) {
    pathSelect.value = -1;
    return;
  }

  pathSelect.value = id;

  const data = pathData.value.filter((d) => d.id === id)[0];

  if (data) {
    let locs = [
      {
        lat: data.path_details[0].location.gps.lat,
        lng: data.path_details[0].location.gps.lng,
      },
    ];
    const newlocs = data.path_details.map((d) => {
      return {
        lng: d.destination.gps.lng,
        lat: d.destination.gps.lat,
      };
    });

    const timestampDiv = document.createElement('div');
    const oldMap = document.getElementById(`map${mapId.value}`);
    if (oldMap) {
      oldMap.remove();
    }
    mapId.value = Date.now();
    timestampDiv.id = `map` + mapId.value.toString();
    mapRef.value?.appendChild(timestampDiv);
    document.getElementById(timestampDiv.id)!.style.height = '100%';
    document.getElementById(timestampDiv.id)!.style.width = '100%';

    // generateMap([...locs, ...newlocs], timestampDiv.id);
  }
};

const nextStep = () => {
  if (pathSelect.value === -1) {
    return;
  }

  router.push({ name: 'PathPage', query: { id: pathSelect.value } });
};

onMounted(async () => {
  LoadingDialogVisable.value = true;

  const { q } = route.query;

  const payload: GetPathListPayload = {
    des: q as string,
    loc: q as string,
  };
  const response = await getPathList(payload);
  pathData.value = response.data;

  console.log(response.data);

  const locs = [
    {
      lng: response.data[0].path_details[0].location.gps.lng,
      lat: response.data[0].path_details[0].location.gps.lat,
    },
  ];
  const timestampDiv = document.createElement('div');
  mapId.value = Date.now();
  timestampDiv.id = `map` + mapId.value.toString();
  mapRef.value?.appendChild(timestampDiv);
  document.getElementById(timestampDiv.id)!.style.height = '100%';
  document.getElementById(timestampDiv.id)!.style.width = '100%';

  // generateMap(locs, timestampDiv.id);

  LoadingDialogVisable.value = false;
});
</script>

<template>
  <div class="flex relative bg-gray-800">
    <nav class="h-[100dvh] z-10 relative flex flex-col justify-center items-center">
      <ul class="h-full overflow-y-auto list-none flex flex-col">
        <li
          v-for="path in pathData"
          :key="path.id"
          class="w-full border-b-2 border-white border-dashed bg-gray-400"
        >
          <div @click="pathCardClick(path.id)">
            <PathCard :path="path" :selected="pathSelect === path.id" />
            <ul
              role="menu"
              :class="[
                pathSelect === path.id ? 'h-auto opacity-100' : 'hidden',
              ]"
            >
              <li role="menuitem">
                <PDetail v-for="d in path.path_details" :detail="d"></PDetail>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div
        class="h-fit w-full py-3 cursor-pointer flex justify-center items-center text-2xl text-white font-extrabold"
        :class="[
          pathSelect === -1
            ? 'bg-gray-600 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-800',
        ]"
        @click="nextStep"
      >
        選擇
      </div>
    </nav>
    <div ref="mapRef" class="w-full h-full bg-gray-400 relative" />
    <LoadingDialog v-if="LoadingDialogVisable" />
  </div>
</template>

<style scpoe>
::-webkit-scrollbar {
  display: none;
}
</style>
