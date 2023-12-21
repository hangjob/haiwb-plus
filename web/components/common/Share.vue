<template>
    <div class="flex justify-center">
        <div @click.once="handleLikePlus"
             class="flex flex-col cursor-pointer justify-center items-center mx-2 bg-[#8881] w-[60px] h-[60px] p-[10px] rounded-[50%]">
            <svg class="bag-icon stroke-2 text-[18px]  group-hover:text-[#22c55e]" aria-hidden="true">
                <use xlink:href="#haiwb-dianzan1"></use>
            </svg>
            <span class="text-[12px] mt-1 text-slate-400">{{ compData.like }}</span>
        </div>
        <div @click="handleOpen(true)"
             class="flex flex-col cursor-pointer justify-center items-center mx-2 bg-[#8881] w-[60px] h-[60px] p-[10px] rounded-[50%]">
            <svg class="bag-icon stroke-2 text-[16px] group-hover:text-[#22c55e]" aria-hidden="true">
                <use xlink:href="#haiwb-yaoqing"></use>
            </svg>
            <span class="text-[12px] mt-1 text-slate-400">分享</span>
        </div>
    </div>
    <USlideover v-model="isOpen">
        <div class="flex border-b border-solid border-slate-100 px-[12px] py-[20px] items-center justify-between">
            <h3 class="text-[14px] font-bold">{{ content.title }}</h3>
        </div>
        <div class="flex-1 px-[30px] py-[20px] relative overflow-hidden" ref="poster_container">
            <nuxt-img class="absolute top-0 bottom-0 left-0 right-0 h-full  object-cover"
                      :src="content.cover" alt=""></nuxt-img>
            <div class="flex mb-[20px] relative z-1 items-center">
                <div
                    class="rounded-[50%] bg-white w-[36px] h-[36px] p-[6px] overflow-hidden flex justify-center items-center">
                    <nuxt-img class="object-cover" src="/img/logo.png"></nuxt-img>
                </div>
                <div class="text-white ml-2 text-[14px]">那些适用的工具</div>
            </div>
            <canvas id="poster" class="border relative border-white"></canvas>
        </div>
        <div class="flex justify-end space-x-2 px-[12px] py-[20px] border-t border-solid border-slate-100 ">
            <UButton color="primary" @click="handleDownload" variant="solid">下载图片</UButton>
            <UButton color="white" variant="solid" @click="isOpen = false">关闭</UButton>
        </div>
        <div id="QRCode" class="hidden"></div>
        <img id="httpImg" class="hidden" :src="content.cover" alt="">
    </USlideover>
</template>
<script lang="ts" setup>
import {useRequest} from "~/composables/useRequest";
import tianqi from '~/public/img/tianqi.png'
import {locaOnce} from "~/utils";
import {useWebsite} from "~/composables/useWebsite";

const isOpen = ref(false)
const poster_container = ref()
const route = useRoute()
const location = useRequestURL()
let canvas: any = null
const website = useWebsite()
const props = defineProps({
    content: {
        type: Object,
        default: {}
    }
})

const compData = reactive({
    like: props.content.like
})

const handleOpen = (show: boolean) => {
    isOpen.value = show

    nextTick(async () => {
        const QRCodeDom = document.getElementById('QRCode')
        // @ts-ignore
        new QRCode(QRCodeDom, {
            text: location.href,
            width: 80,
            height: 80,
            colorDark: "#000000",
            colorLight: "#ffffff",
        })
        const style = window.getComputedStyle(poster_container.value, null)
        const width = parseInt(style.width) - parseFloat(style.getPropertyValue('padding-left')) - parseFloat(style.getPropertyValue('padding-right'));
        const height = parseInt(style.height) - parseFloat(style.getPropertyValue('padding-top')) - parseFloat(style.getPropertyValue('padding-bottom'));
        let top = 200;
        let _top = 0;
        // @ts-ignore
        canvas = new fabric.Canvas('poster', {
            width,
            height: height - 100,
            backgroundColor: '#fff',
        })
        _top = _top + 30
        // @ts-ignore
        const title = new fabric.Textbox(lunisolar(props.content.createdAt).format('lY年 lM'), {
            width: 170, fontSize: 26, fontWeight: 700,
            top: _top, left: 20, fill: '#1e456c',
            strokeWidth: 2, objectCaching: false, splitByGrapheme: true, charSpacing: 100
        })
        canvas.add(title)
        // @ts-ignore
        let rect1 = new fabric.Rect({
            top: _top + title.height + 15,
            left: 17, // 距离画布左侧距离
            width: 20, // 矩形宽度
            height: 2,
            fill: '#1e456c',
            strokeWidth: 2,
            objectCaching: false,
        })
        canvas.add(rect1)

        // @ts-ignore
        const day = new fabric.Textbox(lunisolar(props.content.createdAt).format('lD'), {
            width: 40, fontSize: 14,
            top: _top + 45, left: width - 55, fill: '#1e456c',
            strokeWidth: 2, objectCaching: false, splitByGrapheme: true,
        })
        canvas.add(day)
        top = _top
        // @ts-ignore
        fabric.Image.fromURL(tianqi, (img: any) => {
            img.set({
                scaleX: 0.6,
                scaleY: 0.6,
            })
            img.top = top
            img.left = width - 60
            // 将图片添加到画布中
            canvas.add(img)
        })
        const catImg = document.getElementById('httpImg')
        // @ts-ignore
        catImg.onload = function () {
            _top = _top + title.height + 40;
            // @ts-ignore
            let banner = new fabric.Image(catImg, {
                top: _top,
                left: 0,
            })
            banner.set({
                scaleY: 200 / banner.height,
                scaleX: width / banner.width,
            })
            canvas.add(banner)

            _top = _top + 200 + 10
            // @ts-ignore
            const docTitle = new fabric.Textbox(`《${props.content.title}》`, {
                width: width - 60, fontSize: 18,
                top: _top, left: 30, fill: '#1e456c', fontWeight: 700,
                strokeWidth: 2, objectCaching: false, splitByGrapheme: true,
                charSpacing: 100
            })
            canvas.add(docTitle)

            _top = _top + docTitle.height + 10
            // @ts-ignore
            const docDes = new fabric.Textbox(`《${props.content.des}》`, {
                width: width - 60, fontSize: 14,
                top: _top, left: 30, fill: '#1e456c',
                strokeWidth: 2, objectCaching: false, splitByGrapheme: true,
                charSpacing: 200
            })
            canvas.add(docDes)

            // @ts-ignore
            let QRCodeRect = new fabric.Rect({
                top: _top + docDes.height + 30, // 距离画布顶部距离
                left: 15, // 距离画布左侧距离
                width: width - 30, // 矩形宽度
                height: 120, // 矩形高度
                fill: 'transparent',
                stroke: '#f4f4f5',
                rx: 5,
                ry: 5,
                strokeWidth: 2,
                objectCaching: false,
            })
            canvas.add(QRCodeRect)
            // @ts-ignore
            fabric.Image.fromURL(QRCodeDom.querySelector('canvas').toDataURL('image/png'), (img: any) => {
                _top = _top + docDes.height + 50
                img.top = _top
                img.left = width - 80 - 30
                canvas.add(img)
                // 设置logo
                // @ts-ignore
                const websiteTitle = new fabric.Textbox(website.value.name, {
                    width: width - 30,
                    fontSize: 16,
                    top: _top,
                    left: 30,
                    fill: '#000',
                    fontWeight: 700,
                    strokeWidth: 2,
                    objectCaching: false,
                    splitByGrapheme: true
                })
                canvas.add(websiteTitle)

                _top = _top + websiteTitle.height + 10
                // @ts-ignore
                const websiteDes = new fabric.Textbox(website.value.share, {
                    width: width - 30 - 120,
                    fontSize: 12,
                    top: _top,
                    left: 30,
                    fill: '#64748b',
                    strokeWidth: 2,
                    objectCaching: false,
                    splitByGrapheme: true
                })
                canvas.add(websiteDes)
            })
        }
    })
}

const handleDownload = () => {
    let oA = document.createElement("a");
    oA.download = 'img_.jpg';
    oA.href = canvas.toDataURL("image/jpeg");
    document.body.appendChild(oA);
    oA.click();
    oA.remove();
}

const handleLikePlus = () => {
    locaOnce().then(async res => {
        if (res) {
            const {data}: { data: any } = await useRequest("/api/webv1/web/common/contentPlus", {
                method: "POST",
                body: {
                    id: route.params.id
                }
            })
            if (data.value.code === 1) {
                compData.like++
            }
        }
    })
}
</script>
