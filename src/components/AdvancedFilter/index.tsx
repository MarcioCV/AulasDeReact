import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FilterAccordion,
  FilterAccordionContent,
  FilterAccordionItem,
  FilterAccordionTrigger,
} from "../FilterAccordion";
import { useState } from "react";

export interface AdvancedFilterProps {
  filterList: FilterAccordionProps[];
}

interface FilterAccordionProps {
  label: string;
  options: Option[];
}

interface Option {
  id: number;
  name: string;
}

export function AdvancedFilter({ filterList }: AdvancedFilterProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  // Função para verificar se o item está aberto
  const isOpen = (value: string) => openItems.includes(value);

  // Função para alternar o estado de um item específico
  const toggleAccordion = (value: string) => {
    if (isOpen(value)) {
      setOpenItems(openItems.filter((item) => item !== value));
    } else {
      setOpenItems([...openItems, value]);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <FilterAccordion type="multiple">
          {filterList.map((item, i) => (
            <FilterAccordionItem value={"item-" + i} key={"item-" + i}>
              <FilterAccordionTrigger
                onClick={() => toggleAccordion("item-" + i)}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isOpen("item-" + i)}
                    onChange={() => toggleAccordion("item-" + i)}
                    className="mr-2"
                  />
                  {item.label}
                </div>
              </FilterAccordionTrigger>
              <FilterAccordionContent>
                <div>
                  {item.options.map((option, index) => (
                    <div className="flex ml-4" key={"option-" + index}>
                      <input type="checkbox" className="mr-2" />
                      <p>{option.name}</p>
                    </div>
                  ))}
                </div>
              </FilterAccordionContent>
            </FilterAccordionItem>
          ))}
        </FilterAccordion>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
