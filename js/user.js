const photoInput =
    document.getElementById("complaintPhoto");

const preview =
    document.getElementById("imagePreview");


if (photoInput) {

    photoInput.addEventListener(
        "change",
        function () {

            const file = this.files[0];

            if (!file) return;

            const reader =
                new FileReader();

            reader.onload = function (event) {

                preview.innerHTML = `
                    <img
                        src="${event.target.result}"
                        class="preview-image"
                        alt="Complaint Photo"
                    >
                `;

            };

            reader.readAsDataURL(file);

        }
    );

}


const complaintForm =
    document.getElementById("complaintForm");


if (complaintForm) {

    complaintForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const wasteType =
                document.getElementById("wasteType").value;

            const priority =
                document.getElementById("priority").value;

            const location =
                document.getElementById("location").value;

            const description =
                document.getElementById("description").value;

            const file =
                document.getElementById("complaintPhoto").files[0];


            if (!file) {

                alert(
                    "Please upload a complaint photo."
                );

                return;

            }


            const reader =
                new FileReader();


            reader.onload = function (event) {

                const complaints =
                    JSON.parse(
                        localStorage.getItem(
                            "complaints"
                        )
                    ) || [];


                const complaintNumber =
                    complaints.length + 1025;


                const complaint = {

                    id:
                        "GC" +
                        complaintNumber,

                    wasteType:
                        wasteType,

                    priority:
                        priority,

                    location:
                        location,

                    description:
                        description,

                    beforePhoto:
                        event.target.result,

                    status:
                        "Reported",

                    collector:
                        null,

                    createdAt:
                        new Date().toLocaleString(),

                    completionPhoto:
                        null,

                    completionNotes:
                        ""

                };


                complaints.push(
                    complaint
                );


                localStorage.setItem(
                    "complaints",
                    JSON.stringify(
                        complaints
                    )
                );


                alert(
                    "Complaint submitted successfully!\n\nComplaint ID: #" +
                    complaint.id
                );


                window.location.href =
                    "my-complaints.html";

            };


            reader.readAsDataURL(file);

        }
    );

}
