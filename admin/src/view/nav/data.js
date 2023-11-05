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
            width: 160
        },
        {
            title: "Web菜单名称",
            key: "title",
            align: "center",
            ellipsis: true,
        },
        {
            title: "上级菜单",
            key: "pid",
            align: "center",
            ellipsis: true,
            width: 160
        },
        {
            title: "路径",
            key: "file",
            align: "center",
            ellipsis: true,
            width: 160
        },
        {
            title: "描述",
            key: "des",
            align: "center",
            ellipsis: true
        },
        {
            title: "封面图",
            key: "cover",
            align: "center",
            ellipsis: true
        },
        {
            title: "是否显示",
            key: "shows",
            align: "center",
            ellipsis: true,
            width: 100,
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
            width: 130,
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


const tableSize = [
    {
        label: "较小",
        value: "small",
    },
    {
        label: "适中",
        value: "medium",
    },
    {
        label: "较大",
        value: "large",
    }
]


export {
    createColumns,
    tableSize,
}
