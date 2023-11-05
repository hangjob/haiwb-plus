import uploadImage from './UploadImage.vue'

const setupGlobComponents = (app) => {
    app.component('upload-image', uploadImage)
}

export {
    setupGlobComponents,
}
