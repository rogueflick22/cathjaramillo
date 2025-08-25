$(document).ready(function () {
  const projects = {
    1: {
      title: "One Parkade",
      description: "A mixed-use high-rise development combining multi-level parking facilities with commercial units.",
      media: [
        "images/PARKADE/Image17.png",
        "images/PARKADE/Image16.png",
        "images/PARKADE/Image18.png"
      ]
    },
    2: { 
      title: "Whitley Residence",
      description: "A two-storey duplex house with an attic, developed using integrated BIM workflows for coordinated design and documentation.",
      media: [
        "images/WHITLEY/Image3.png",
        "images/WHITLEY/Image6.png",
        "images/WHITLEY/Image2.png",
        "images/WHITLEY/Image5.png",
        "images/WHITLEY/Image10.png",
        "images/WHITLEY/Image13.png"
      ]
     },
    3: { 
      title: "CBM Residence",
      description: "A two-storey residential house featuring a modern design with open-plan interiors and an integrated garden space.",
      media: [
        "images/CBM/Image1.png",
        "images/CBM/Image13.png",
        "images/CBM/Image2.png",
        "images/CBM/Image14.png",
        "images/CBM/Image15.png"
      ]
     },
    4: { 
      title: "La Casa",
      description: "An interior renovation project featuring a contemporary design aesthetic and functional spatial improvements.",
      media: [
        "images/E1/9.png",
        "images/E1/1.png",
        "images/E1/2.png",
        "images/E1/6.png",
        "images/E1/7.png",
        "images/E1/10.png"
      ]
     },
    5: { 
      title: "Parc Central",
      description: "An 11-block high-rise residential development, where I implemented integrated BIM workflows for design coordination and construction documentation",
      media: [
        "images/TPAEC/Image10.png",
        "images/TPAEC/Image4.png",
        "images/TPAEC/Image8.png",
        "images/TPAEC/Image12.png",
        "images/TPAEC/Image7.png",
        "images/TPAEC/Image5.png"
      ]
     },
    6: { 
      title: "Bus Stop",
      description: "BIM modeling and multi-disciplinary coordination for an underground tunnel project, incorporating temporary bus stop provisions to maintain construction continuity.",
      media: [
        "images/BUS SHELTER_GREYTEAL/BST_3.png",
        "images/BUS SHELTER_GREYTEAL/BST_1.png",
        "images/BUS SHELTER_GREYTEAL/BST_4.png",
        "images/BUS SHELTER_GREYTEAL/BST_5.png",
        "images/BUS SHELTER_GREYTEAL/BST_6.png",
        "videos/Busvid2.mp4",
        "images/BUS SHELTER_REDWHITE/BS_5.png",
        "images/BUS SHELTER_REDWHITE/BS_3.png",
        "images/BUS SHELTER_REDWHITE/BS_6.png",
        "images/BUS SHELTER_REDWHITE/BS_1.png",
        "videos/Busvid3.mp4"

      ]
    },
    7: {
      title: "Pedestrian Overhead Bridge @ Caldecott",
      description: "BIM modeling and coordination for an underground tunnel project, including provisions for temporary bridges to ensure construction continuity.",
      media: [
        "images/POB10/POB 6.png",
        "images/POB10/POB 1.png",
        "images/POB10/POB 2.png",
        "images/POB10/POB 3.png",
        "images/POB10/POB 4.png",
        "images/POB10/POB 5.png",
        "images/POB10/POB 7.png",
        "videos/Pobc.mp4"
      ]
    },
    8: {
      title: "Pedestrian Overhead bridge @ Novena",
      description: "BIM modeling and coordination for an underground tunnel project, including provisions for temporary bridges to ensure construction continuity.",
      media: [
        "images/POB15/POB 3.png",
        "images/POB15/POB 1.png",
        "images/POB15/POB 2.png",
        "images/POB15/POB 4.png",
        "images/POB15/POB 5.png",
        "videos/Pobn.mp4"
      ]
    },
    9: {
      title: "Link Bridge",
      description: "BIM modeling and multi-disciplinary coordination for an underground tunnel project, incorporating temporary link bridges to maintain construction continuity.",
      media: [
        "images/LB15/VIEW 4.png",
        "images/LB15/VIEW 1.png",
        "images/LB15/VIEW 2.png",
        "images/LB15/VIEW 3.png",
        "videos/Lb15.mp4"
        
      ]
    },
    10: {
      title: "Flynn Park",
      description: "BIM modeling and multi-disciplinary coordination for a nine-block luxury residential high-rise, covering architectural, plumbing, electrical, sanitary, and mechanical systems through VDC integration",
      media: [
        "images/flynn/f1.png",
        "images/flynn/f2.png",
        "images/flynn/f3.png",
        "images/flynn/f4.png",
        "images/flynn/f5.png",
        "images/flynn/f6.png",
        "videos/fv2.mp4"
      ]
    }
  };

 // Function to open modal
  function openModal(projectId) {
    const project = projects[projectId];
    $("#modal-title").text(project.title);
    $("#modal-description").text(project.description);
    $("#modal-gallery").empty();

    project.media.forEach(media => {
      if (media.endsWith(".mp4")) {
        $("#modal-gallery").append(`
          <video controls>
            <source src="${media}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `);
      } else {
        $("#modal-gallery").append(`<img src="${media}" alt="${project.title}">`);
      }
    });

    $("#project-modal").fadeIn(function () {
      $(this).scrollTop(0); // scroll to top when opened
    });
  }

  // Click project card
  $(".project-card").on("click", function () {
    const projectId = $(this).data("project");
    openModal(projectId);
  });

  // Close modal
  $(".close, .modal").on("click", function (e) {
    if ($(e.target).is(".close") || $(e.target).is(".modal")) {
      $("#project-modal").fadeOut();
    }
  });
});