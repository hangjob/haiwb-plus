import { NButton, NPopconfirm, NSwitch} from "naive-ui"
import {h} from "vue"

const createColumns = ({compHandle}) => {
    return [
        {
            type: "selection",
        },
        {
            title: "ID",
            key: "id",
            align: "center",
            ellipsis: true,
            width: 250
        },
        {
            title: "Banner名称",
            key: "title",
            align: "center",
            ellipsis: true,
            width: 300
        },
        {
            title: "Banner描述",
            key: "des",
            align: "center",
            ellipsis: true,
        },
        {
            title: "是否显示",
            key: "shows",
            align: "center",
            ellipsis: true,
            width: 200,
            render(row) {
                return h(NSwitch, {
                    defaultValue: row.shows
                })
            }
        },
        {
            title: "操作",
            key: "actions",
            align: "center",
            width: 200,
            render(row) {
                return h("div", [
                    h(NButton,
                        {
                            type: "success",
                            size: "small",
                            ghost: true,
                            onClick: () => compHandle.edit(row),
                            style: {marginRight: "5px"}
                        },
                        {default: () => "编辑"}),

                    h(NPopconfirm,
                        {
                            onPositiveClick: () => {
                                compHandle.del(row)
                            },
                            negativeText: "取消",
                            positiveText: "确定"
                        },
                        {
                            trigger: () => {
                                return h(
                                    NButton,
                                    {
                                        type: "error",
                                        strong: true,
                                        size: "small",
                                        ghost: true,
                                    },
                                    {default: () => "删除"}
                                )
                            },
                            default: () => {
                                return "确认删除该条数据嘛？"
                            }
                        }
                    ),
                ])
            }
        }
    ]
}



export {
    createColumns,
}
