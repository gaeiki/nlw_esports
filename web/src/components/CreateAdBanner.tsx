import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner(){
    return(
        <div className="pt-1 bg-nlw-gradient mt-8 self-stretch rounded-lg">
            <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
            <div>
                <strong className="block text-2xl font-black text-white">Não encontrou seu duo?</strong>
                <span className="block text-zinc-400">Publique um anúncio para encontrar novos players!</span>
            </div>
            <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-700 duration-200 text-white rounded-md flex items-center gap-3">
                <MagnifyingGlassPlus size={24}/>
                Publicar anúncio
            </Dialog.Trigger>
            </div>
        </div>
    )
}