import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import "./style.scss";
import { Button } from "@/components/ui/button";
import iconX from "../../assets/x.png";
import { InputField } from "@/components/Input";
import { ChangeEvent, useState } from "react";
import { CsvModal } from "./CsvModal";

interface CsvRow {
  [key: string]: string;
}

export function CreateCollection() {
  const [value, setValue] = useState("");
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  console.log(csvData);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const content = e?.target?.result;
        if (typeof content === "string") {
          parseCsv(content);
        }
        setShowModal(true);
      };
      reader.readAsText(file);
    }
  };

  const parseCsv = (data: string): void => {
    const rows = data.split("\n").map((row) => row.split(","));
    setCsvData(rows.filter((row) => row[0] != "" && row[0] != "\r"));
  };

  return (
    <>
      <div className="collectionGeneral">
        <nav className="navCollection">
          <div className="navSpacing">
            <div className="iconX">
              <img src={iconX} alt="" />
            </div>
            <div className="buttonsDiv">
              {/* <button>Save as draft</button> */}
              {/* <button>Publish Collection</button> */}
              <Button variant="outline">Save as draft</Button>
              <Button variant="primary">Publish Collection</Button>
            </div>
          </div>
        </nav>

        <div className="createCollectionBody">
          <div>
            <h2>Create Collection</h2>
          </div>
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="text-lg font-bold">
                  General info<span className="required">*</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <InputField
                  label="Title"
                  placeholder="Collection number one"
                  value={value}
                  required
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />

                <InputField
                  label="Description"
                  placeholder="Available paintings in my collection"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="paintingsDiv">
                  <span>Paintings</span>
                  <p>
                    Select Paintings that will be available at your collection.
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="accordionButtons">
                  <Button>Add Objects</Button>
                  <Button
                    onClick={() => {
                      document.getElementById("fileCSV")?.click();
                    }}
                  >
                    Import CSV
                  </Button>
                  <CsvModal data={csvData} open={showModal} />
                  <input
                    type="file"
                    id="fileCSV"
                    accept=".csv"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
