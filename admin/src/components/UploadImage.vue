<template>
    <n-modal
        v-model:show="compData.showModal"
        class="custom-card"
        preset="card"
        :style="compData.bodyStyle"
        title="图片裁剪"
        size="huge"
        :bordered="false"
        :segmented="compData.segmented"
        style="position: relative"
    >
        <template #header-extra>

        </template>
        <div style="width: 100%;height: 600px;">
            <vueCropper
                ref="cropper"
                v-bind="compData.option"
            ></vueCropper>
        </div>
        <template #footer>
            <n-space justify="end">
                <n-button attr-type="button" @click="compHandle.clearCrop">关闭窗口</n-button>
                <n-button @click="compHandle.getCropData" :loading="compData.loading" attr-type="button">确认裁剪</n-button>
            </n-space>
        </template>
    </n-modal>
</template>
<script>
import {defineComponent,reactive,ref} from "vue"
import 'vue-cropper/dist/index.css'
import { VueCropper }  from "vue-cropper";
import {file as pmFile} from "pm-utils"
import apis from "@/api/app.js";
import Compressor from 'compressorjs';
import { shrinkImage } from "shrinkpng";
export default defineComponent({
    components:{
        VueCropper
    },
    emits: ['update:url'],
    setup(props,{ emit }){
        const cropper = ref(null)
        const compData = reactive({
            loading:false,
            bodyStyle: {
                width: '80%'
            },
            segmented: {
                content: 'soft',
                footer: 'soft'
            },
            showModal: false,
            option:{
                img: '',
                size: 1,
                full: false,
                info:true,
                outputType: 'png',
                canMove: true,
                fixedBox: false,
                original: false,
                canMoveBox: true,
                autoCrop: true,
                autoCropWidth: 750,
                autoCropHeight: 340,
                centerBox: true,
                high: true,
                max: 99999,
            }
        })

        const compHandle = reactive({
            open(status,option){
                compData.option = Object.assign(compData.option,option)
                compData.showModal = status
            },
            getCropData(){
                compData.loading = true;
                cropper.value.getCropBlob((data)=>{
                    shrinkImage(data, {
                        quality: 80
                    }).then((result)=>{
                        const param = new FormData();
                        param.append('file', result, (+new Date())+'.png');
                        apis[`/upload/images`](param).then((res)=>{
                            emit('update:url', res.data.url)
                            compHandle.clearCrop();
                        })
                    })
                })
            },
            clearCrop(){
                cropper.value.clearCrop()
                compData.showModal = false
                compData.loading = false;
            }
        })

        return {
            compData,
            compHandle,
            cropper
        }
    }
})
</script>
